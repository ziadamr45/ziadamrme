import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Forward to email via mailto link or store in database
    // For now, we log and return success
    console.log("Contact form submission:", { name, email, message });

    // You can integrate with email services like Resend, SendGrid, etc.
    // Example with Resend:
    // await resend.emails.send({
    //   from: "portfolio@ziadamr.me",
    //   to: "ziad90216@gmail.com",
    //   subject: `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
