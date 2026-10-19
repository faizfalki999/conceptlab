const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetWidth = parseInt(process.argv[2] || '390', 10);
const targetHeight = parseInt(process.argv[3] || '844', 10);
const outputFile = process.argv[4] || 'mobile_view.png';
const isMobile = targetWidth < 800;

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const profileDir = path.join(__dirname, '.edge-temp-profile');

const edge = spawn(edgePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  `--user-data-dir=${profileDir}`,
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank'
], { stdio: 'ignore' });

function cleanup() {
  try { edge.kill(); } catch (e) {}
}

process.on('exit', cleanup);
process.on('SIGINT', cleanup);

async function run() {
  await new Promise(r => setTimeout(r, 1500));

  let targets;
  for (let i = 0; i < 10; i++) {
    try {
      targets = await new Promise((resolve, reject) => {
        http.get('http://localhost:9222/json', (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (targets && targets.length > 0) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let msgId = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      callbacks.get(msg.id)(msg);
      callbacks.delete(msg.id);
    }
  };

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      callbacks.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise(r => ws.onopen = r);

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: targetWidth,
    height: targetHeight,
    deviceScaleFactor: 2,
    mobile: isMobile,
    screenOrientation: { angle: 0, type: 'portraitPrimary' }
  });

  await send('Page.navigate', { url: 'http://localhost:3000' });
  const delayMs = parseInt(process.argv[5] || '1200', 10);
  await new Promise(r => setTimeout(r, delayMs));

  // Check element positions and rects
  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('section');
      const pill = document.querySelector('.lg\\\\:hidden.absolute');
      const foreign = document.querySelector('foreignObject');
      const tag = Array.from(document.querySelectorAll('div')).find(d => d.textContent === 'FROM IDEA TO LAUNCH');
      const serializeRect = (r) => r ? ({ top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), height: Math.round(r.height) }) : null;
      const statsCol = document.querySelector('.space-y-6')?.parentElement;
      const statsBlock = document.querySelector('.space-y-6');
      return {
        viewport: { w: window.innerWidth, h: window.innerHeight },
        secRect: serializeRect(sec ? sec.getBoundingClientRect() : null),
        statsColRect: serializeRect(statsCol ? statsCol.getBoundingClientRect() : null),
        statsBlockRect: serializeRect(statsBlock ? statsBlock.getBoundingClientRect() : null),
        tagRect: serializeRect(tag ? tag.getBoundingClientRect() : null),
      };
    })()`,
    returnByValue: true
  });

  console.log('Layout evaluation:', JSON.stringify(evalRes, null, 2));

  // Take screenshot
  const shotRes = await send('Page.captureScreenshot', { format: 'png' });
  if (shotRes.result?.data) {
    fs.writeFileSync(outputFile, Buffer.from(shotRes.result.data, 'base64'));
    console.log(`Saved screenshot to ${outputFile}`);
  }

  ws.close();
  cleanup();
  process.exit(0);
}

run().catch(err => {
  console.error('Error:', err);
  cleanup();
  process.exit(1);
});
