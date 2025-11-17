import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, city, message } = body;

        // Transporter setup (Gmail App Password)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send Email
        await transporter.sendMail({
            from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
            to: "nirmasolarsolutions@gmail.com",
            subject: `New Inquiry from ${name}`,
            html: `
        <h2>New Message From Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
