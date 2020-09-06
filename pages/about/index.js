import Head from "../../components/head";
import Header from "../../components/molecules/header";
import Footer from "../../components/molecules/footer";

const About = () => (
  <div>
    <Head />
    <Header />
    <div className="about-page">
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">About Me</h1>
        <img src="/assets/img/profile.JPG"></img>
        <p className="text-gray-500 text-center">
          WEB制作会社でプログラマーをやっている24歳です。
          <br />
          当ブログでは、自分が技術を通して得た知見を主に発信していきます。
          <br />
          趣味は、旅行・写真・ゲームです。
        </p>
        <p className="test">test</p>
      </div>
      <style jsx>{`
        .test {
          color: red;
        }
      `}</style>
    </div>
    <Footer />
  </div>
);

export default About;
