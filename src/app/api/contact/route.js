import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email,mobile, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ms23btech11034@iith.ac.in",
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailToUser = {
    from: "ms23btech11034@iith.ac.in",
    to: email,
    subject: "Thank you for contacting us",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to us. We have received your message:</p>
      <blockquote>${message}</blockquote>
      <p>We will get back to you as soon as possible.</p>
      <p>Regards,<br/>MSME Department</p>
    `,
  };

  const mailToOffice = {
    from: "ms23btech11034@iith.ac.in",
    to: "ms23btech11004@iith.ac.in",
    subject: `New Contact Request By: ${name}`,
    html: `
      <p><strong>Name :</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number :</strong> ${mobile || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${message}</blockquote>
    `,
  };

  try {
    await transporter.sendMail(mailToUser);
    await transporter.sendMail(mailToOffice);
    return Response.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return Response.json({ message: "Failed to send emails" }, { status: 500 });
  }
}
