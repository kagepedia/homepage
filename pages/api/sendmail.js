import { useRouter } from 'next/router';
const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  const router = useRouter();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, contents } = req.body;

  const content = {
    to: email,
    from: process.env.ADMIN_MAIL,
    subject: 'メールのタイトルです',
    text: name + contents,
    html: `<p><b>${name}</b>${contents}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
    router.push('/contact/thanks');
  } catch (error) {
    res.status(400).send('Message not sent.');
    router.push('/contact/form');
  }
}
