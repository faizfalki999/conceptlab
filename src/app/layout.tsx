import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#F3F1EC",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://conceptlab.solutions"),
  title: {
    default: "Concept Lab | Digital Products, Web Development & AI Solutions",
    template: "%s | Concept Lab",
  },
  description:
    "Concept Lab builds high-performance websites, web apps, AI chatbots, voice agents, and custom e-commerce solutions that scale businesses.",
  keywords: [
    "web development",
    "digital agency",
    "AI chatbots",
    "AI voice agents",
    "Next.js agency",
    "SaaS MVP development",
    "AI visibility SEO",
    "e-commerce development",
    "custom Shopify themes",
  ],
  authors: [{ name: "Concept Lab" }],
  creator: "Concept Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conceptlab.solutions",
    title: "Concept Lab | Digital Products, Web Development & AI Solutions",
    description:
      "We build websites, apps and AI that grow your business. High-performance digital products engineered for modern founders and SMBs.",
    siteName: "Concept Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concept Lab | Digital Products, Web Development & AI Solutions",
    description:
      "We build websites, apps and AI that grow your business. High-performance digital products engineered for modern founders and SMBs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "supported-color-schemes": "light",
    "darkreader-lock": "true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F3F1EC] text-[#161C2D] font-sans antialiased flex flex-col selection:bg-[#0070F3] selection:text-white">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
