import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Profile from '../../components/molecules/profile';
import SearchForm from '../../components/atom/SeachForm';
import Footer from '../../components/molecules/footer';

const Privacy = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <div>
            <b>プライバシーポリシー</b>
            <p>ひなたぼっこ（以下、当サイト）では、個人情報の保護およびその適切な取り扱いについて、以下のとおりプライバシーポリシー（以下、本ポリシー）を定めております。</p>
          </div>
          <div className="bg-white shadow">
            <p className="title">個人情報の利用目的</p>
            <hr />
            <p className="discription">
              当サイトでは、お問い合わせの際に頂いた名前やメールアドレス等の個人を特定する情報を、当サイトのサービス提供と運用、お問い合わせへの回答に利用いたします。また、これらの目的以外では利用いたしません。
            </p>
            <p className="title">個人情報の第三者提供</p>
            <hr />
            <p className="discription">当サイトは、本人の同意を得る事なく第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
            <p className="title">個人情報の開示及び訂正・削除</p>
            <hr />
            <p className="discription">本人からの個人情報の開示及び訂正、削除を求められたときは、本人確認させていただいた上で速やかに要求に沿った対応をいたします。</p>
            <p className="title">アクセス解析ツールについて</p>
            <hr />
            <p className="discription">
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              <br />
              <br />
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。規約の詳細については
              <a href="https://www.google.com/analytics/terms/jp.html">Googleアナリティクス利用規約</a>
              からご確認ください。
            </p>
            <p className="title">広告について</p>
            <hr />
            <p className="discription">
              当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報「Cookie」(氏名、住所、メールアドレス、
              電話番号は含まれません) を使用することがあります。
              <br />
              <br />
              Googleアドセンスの詳細と、Googleが収集するデータの匿名化の方法については、<a href="https://policies.google.com/technologies/ads?hl=ja">ポリシーと規約 - Google</a>をご覧ください
            </p>
            <p className="title">著作権について</p>
            <hr />
            <p className="discription">
              当サイトのコンテンツ（記事・画像・その他のコンテンツ）について、許可なく転載することを禁じます。コンテンツの引用は、当サイトのリンクを掲載することで、ご自由に行うことができます。
              <br />
              <br />
              引用許可範囲については、事前予告なく変更する場合があります。最新の情報は本ページにて公開されます。
            </p>
            <p className="title">免責条項</p>
            <hr />
            <p className="discription">
              当サイトのに掲載している情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤った情報が入り込んだり、情報が古くなっている場合があります。
              <br />
              <br />
              誤った情報を見つけた場合は、お手数ですがinfo.hinatabokko@gmail.comよりご連絡ください。確認を取り次第、即座に対応致します。また、情報の正誤性のため、コンテンツは随時更新され予告なしに変更・削除されることがあります。
              <br />
              <br />
              当サイトに掲載された内容、又は移動先サイトで提供される情報、サービスによって生じた損害については一切の責任を負いかねますのでご了承ください。
            </p>
            <p className="title">本ポリシーの変更について</p>
            <hr />
            <p className="discription">
              当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、継続的な改善に努め、必要に応じて本ポリシーを変更することがあります。
              <br />
              <br />
              修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </p>
          </div>
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <Profile />
          <SearchForm />
        </aside>
      </div>
      <Footer />
    </div>
  );
};
export default Privacy;
