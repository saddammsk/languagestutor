import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/app/lib/mailerDemo'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, country, subject, message } = await req.json()

    if (!name || !email || !phone || !subject) {
      return NextResponse.json(
        { error: 'All required fields must be filled.' },
        { status: 400 }
      )
    }

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message || '—'}</p>
    `

    await sendEmail({
      subject: '📩 New Contact Submission',
      html: htmlContent,
    })

    return NextResponse.json({ message: 'Submitted successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}