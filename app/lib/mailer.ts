import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, 
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});


export const sendAdminEmail = async (subscriberEmail: string) => {
  const mailOptions = {
    from: `"Newsletter Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Newsletter Subscriber',
    html: `<p>You have a new subscriber: <strong>${subscriberEmail}</strong></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(' Admin email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending admin email:', error);
    throw error;
  }
};
