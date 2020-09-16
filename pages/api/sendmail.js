// SendGrid
/*
const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey('SendGridで作成したAPIキー');

  const { email, message } = req.body;

  const content = {
    to: email,
    from: '任意のメールアドレス（実現するもの）',
    subject: 'メールのタイトルです',
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
*/
// SendGrid
