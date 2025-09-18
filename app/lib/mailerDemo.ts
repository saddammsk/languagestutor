import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

interface EmailPayload {
  subject: string
  html: string
}

export const sendEmail = async ({ subject, html }: EmailPayload) => {
  const mailOptions = {
    from: `"Demo Request" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Admin email sent:', info.messageId)
  } catch (error) {
    console.error('❌ Error sending admin email:', error)
    throw error
  }
}
