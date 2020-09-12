import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import Skills from '../../components/atom/Skills';

const About = () => (
  <div>
    <Head />
    <Header />
    <div className="about-page">
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">About Me</h1>
        <div className="flex flex-wrap justify-center my-6">
          <img
            className="rounded-full border-solid border-4 border-green-600"
            src="/img/profile.JPG"
            alt="プロフィール画像"
          ></img>
        </div>
        <p className="text-gray-500 text-center">
          WEB制作会社でプログラマーをやっている24歳です。
          <br />
          当ブログでは、自分が技術を通して得た知見を主に発信していきます。
          <br />
          趣味は、旅行・写真・ゲームです。
        </p>
        <Skills />
      </div>
      <style jsx>{`
        img {
          text-align: center;
        }
      `}</style>
    </div>
    <Footer />
  </div>
);

export default About;
