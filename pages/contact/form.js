import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

// SendGrid
/*
fetch('/api/sendmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'test@exsample.com',
    message: 'Test mail.',
  }),
});
*/
// SendGrid

const Form = () => (
  <div>
    <Head title={'お問い合わせ（入力）'} url={'https://kagepedia.com/contact/form'} />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">SendGrid Contact Form</h1>
      <p className="text-gray-500">SendGrid</p>
    </div>
    <Footer />
  </div>
);

export default Form;
