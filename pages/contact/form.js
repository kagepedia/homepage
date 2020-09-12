import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

const Form = () => (
  <div>
    <Head title={'お問い合わせ（入力）'} url={'https://kagepedia.com/contact/form'} />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Form</h1>
      <p className="text-gray-500">with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for production builds.</p>
    </div>
    <Footer />
  </div>
);

export default Form;
