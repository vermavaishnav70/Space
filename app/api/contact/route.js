import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      // Parse the request body
      const {
        first_name,
        last_name,
        email,
        company_name,
        help,
        company_size,
        info,
      } = await req.json();

      // Nodemailer transporter setup
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // use environment variable for SMTP host
        port: 465, // Gmail SMTP port for SSL
        secure: true, // use SSL
        auth: {
          user: process.env.SMTP_USER, // environment variable for your Gmail address
          pass: process.env.SMTP_PASS, // environment variable for your app password
        },
      });

      // Define mail options
      const mailOptions = {
        from: email, // Use sender's email
        to: process.env.SMTP_USER, // Your Gmail address to receive the contact form submission
        subject: "Contact Form Submission",
        html: `
          <h1>Contact Form</h1>
          <p>First Name: ${first_name}</p>
          <p>Last Name: ${last_name}</p>
          <p>Work Email: ${email}</p>
          <p>Company Name: ${company_name}</p>
          <p>Company Size: ${company_size}</p>
          <p>Help: ${help}</p>
          <p>Info: ${info}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond with success message
      return NextResponse.json({ message: "Email has been sent" });
    } catch (error) {
      console.error("Error sending email: ", error);
      return NextResponse.json(
        { error: "Email has not been sent" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
