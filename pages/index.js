import Head from '../components/head';
import Header from '../components/molecules/header';
import PostListTop from '../components/atom/PostListTop';
import Footer from '../components/molecules/footer';

const Top = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <PostListTop />
          <PostListTop />
          <PostListTop />
          <PostListTop />
          <PostListTop />
          <PostListTop />
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <div className="w-5/12 mx-auto">
              <img src="/img/profile.JPG" className="rounded-full border-solid border-4 border-green-600" />
            </div>
            <p className="text-xl text-center mt-3 font-semibold pb-5">Kage Soichiro</p>
            <p className="pb-2">WEB制作会社でWEBエンジニアとして働いている24歳です。技術ネタを中心に発信していきます。</p>
            <a href="about" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              詳しいプロフィールはこちら
            </a>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};
export default Top;
