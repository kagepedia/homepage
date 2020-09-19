const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, contents } = req.body;

  const messages = [
    {
      to: email, // To client
      from: process.env.ADMIN_MAIL,
      subject: 'お問い合わせありがとうございます',
      text: `お問い合わせありがとうございます。rn順番に回答を行いますので、今しばらくお待ち下さい。rnrn以下の内容で送信されました。rnお名前：${name}rnメールアドレス：${email}rnお問い合わせ内容：${contents}`,
    },
    {
      to: process.env.ADMIN_MAIL, // To admin
      from: process.env.ADMIN_MAIL,
      subject: 'お問い合わせがありました',
      text: `以下の内容でお問い合わせがありました。rnお名前：${name}¥rnメールアドレス：${email}rnお問い合わせ内容：${contents}`,
    },
  ];

  try {
    await sgMail.send(messages);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    res.status(400).send('Message not sent.');
  }
}
