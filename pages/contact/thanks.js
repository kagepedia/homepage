import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

const Thanks = () => (
  <div>
    <Head title={'お問い合わせ（完了）'} url={'https://kagepedia.com/contact/thanks'} />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Thanks</h1>
      <p className="text-gray-500">Thanks Page</p>
    </div>
    <Footer />
  </div>
);

export default Thanks;
