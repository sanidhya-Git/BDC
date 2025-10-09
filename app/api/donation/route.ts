import connectToDatabase from "@/lib/mongodb"
import Donation from "@/models/Donation"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectToDatabase()
    const data = await req.json()

    // Save donation to database
    const donation = await Donation.create(data)

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send confirmation email
    await transporter.sendMail({
      from: `"SKIT Blood Donation" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Blood Donation Registration Confirmation",
      html: `
        <h2>Hi ${data.fullName},</h2>
        <p>Thank you for registering to donate blood. Here are your details:</p>
        <ul>
          <li>Blood Type: ${data.bloodType}</li>
          <li>Role: ${data.roleType}</li>
          <li>Branch: ${data.branch}</li>
          <li>Preferred Location: ${data.location}</li>
          <li>D.O.B: ${data.dob}</li>
        </ul>
        <p>We will contact you shortly to confirm your appointment.</p>
        <p>— SKIT Blood Donation Team</p>
      `,
    })

    // Return success response
    return new Response(JSON.stringify({ success: true, donation }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error(error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
