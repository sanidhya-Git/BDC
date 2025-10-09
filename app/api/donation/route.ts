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

        await transporter.sendMail({
            from: `"SKIT Blood Donation" <${process.env.SMTP_USER}>`,
            to: data.email,
            subject: "❤️ Blood Donation Registration Confirmation ✅",
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    /* Reset and responsive */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }
    table { border-collapse: collapse !important; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; }
    @media screen and (max-width: 600px) {
      h1 { font-size: 24px !important; }
      h2 { font-size: 20px !important; }
      td { padding: 15px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table class="container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg,#dc2626 0%,#991b1b 100%); padding:40px 30px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700;">Registration Confirmed! ✓</h1>
              <p style="margin:10px 0 0; color:rgba(255,255,255,0.9); font-size:16px;">Thank you for saving lives</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:40px 30px 20px;">
              <h2 style="margin:0 0 15px; color:#111827; font-size:24px; font-weight:600;">Hi ${data.fullName} 👋</h2>
              <p style="margin:0; color:#6b7280; font-size:16px; line-height:1.6;">
                Thank you for registering to donate blood with <strong style="color:#dc2626;">SKIT Blood Donation</strong>. Your generosity will help save lives in our community.
              </p>
            </td>
          </tr>

          <!-- Registration Details -->
          <tr>
            <td style="padding:0 30px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background: linear-gradient(135deg,#fef2f2 0%,#fee2e2 100%); border-radius:12px; border:2px solid #fecaca;">
                <tr>
                  <td style="padding:25px;">
                    <h3 style="margin:0 0 20px; color:#991b1b; font-size:18px; font-weight:600;">📋 Your Registration Details</h3>
                    <table width="100%" cellpadding="8" cellspacing="0" role="presentation">
                      <tr style="border-bottom:1px solid #fecaca;">
                        <td style="color:#7f1d1d; font-size:14px; font-weight:600;">🩸 Blood Type</td>
                        <td style="color:#1f2937; font-size:15px; font-weight:500; text-align:right;">${data.bloodType}</td>
                      </tr>
                      <tr style="border-bottom:1px solid #fecaca;">
                        <td style="color:#7f1d1d; font-size:14px; font-weight:600;">👤 Role</td>
                        <td style="color:#1f2937; font-size:15px; font-weight:500; text-align:right;">${data.roleType}</td>
                      </tr>
                      <tr style="border-bottom:1px solid #fecaca;">
                        <td style="color:#7f1d1d; font-size:14px; font-weight:600;">🏢 Branch</td>
                        <td style="color:#1f2937; font-size:15px; font-weight:500; text-align:right;">${data.branch}</td>
                      </tr>
                      <tr style="border-bottom:1px solid #fecaca;">
                        <td style="color:#7f1d1d; font-size:14px; font-weight:600;">📍 Location</td>
                        <td style="color:#1f2937; font-size:15px; font-weight:500; text-align:right;">${data.location}</td>
                      </tr>
                      <tr>
                        <td style="color:#7f1d1d; font-size:14px; font-weight:600;">🎂 Date of Birth</td>
                        <td style="color:#1f2937; font-size:15px; font-weight:500; text-align:right;">${data.dob}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding:0 30px 30px;">
              <div style="background-color:#eff6ff; border-left:4px solid #3b82f6; padding:20px; border-radius:8px;">
                <p style="margin:0; color:#1e40af; font-size:15px;"><strong>📞 What's Next?</strong><br>Our team will contact you shortly to confirm your appointment.</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 30px 40px; text-align:center;">
              <p style="margin:0; color:#111827; font-size:16px; font-weight:600;">— SKIT Blood Donation Team ❤️</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#f9fafb; padding:20px; text-align:center; border-top:1px solid #e5e7eb;">
              <p style="margin:0; color:#9ca3af; font-size:12px;">This is an automated message. Please do not reply.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
