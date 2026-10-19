import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // =========================================================================
    // TODO: Connect Email & CRM Webhook
    // 1. Send transactional confirmation email via Resend / Postmark / SendGrid.
    // 2. Dispatch contact payload to HubSpot / Salesforce / Slack Webhook.
    // e.g.:
    // await resend.emails.send({
    //   from: "Concept Lab <team@conceptlab.solutions>",
    //   to: [email, "founder@conceptlab.solutions"],
    //   subject: `New Project Inquiry: ${name} (${service || "General"})`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`,
    // });
    // =========================================================================

    console.log("[Concept Lab Contact Intake]", {
      name,
      email,
      company,
      service,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received. We will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
