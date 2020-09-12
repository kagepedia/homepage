import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

const Comp = () => (
  <div>
    <Head title={'お問い合わせ（完了）'} url={'https://kagepedia.com/contact/comp'} />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Comp</h1>
      <p className="text-gray-500">with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for production builds.</p>
    </div>
    <Footer />
  </div>
);

export default Comp;
