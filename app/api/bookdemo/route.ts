import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/app/lib/mailerDemo'

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, course, message } = await req.json()

    if (!firstName || !lastName || !email || !phone || !course) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 })
    }

    const htmlContent = `
      <h2>New Demo Class Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong><br/>${message || '—'}</p>
    `

    await sendEmail({
      subject: '📩 New Demo Class Request',
      html: htmlContent,
    })

    return NextResponse.json({ message: 'Demo class request submitted!' }, { status: 200 })
  } catch (error) {
    console.error('Error booking demo:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
