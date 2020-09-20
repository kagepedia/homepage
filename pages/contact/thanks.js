import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';

const Thanks = () => (
  <div>
    <Head title={'お問い合わせ（完了）'} url={'https://kagepedia.com/contact/thanks'} />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold border-b-2">お問い合わせ完了</h1>
      <h2 className="text-xl font-semibold my-4">お問い合わせメールを送信しました</h2>
      <p>
        Webサイトより、お問い合わせ頂きありがとうございました。
        <br />
        お問い合わせフォームにご記入いただいたメールアドレス宛に、お問い合わせ受付の確認メールを送信させていただきました。
        <br />
        <br />
        順番に確認後お問い合わせの返信をさせて頂きますが、お問い合わせ内容や、混雑状況等によって前後する場合もございますので予めご了承ください。
        <br />
        お問い合わせ受付確認の自動返信メールが24時間以内に届かない場合は、メールアドレスの入力ミス等が考えられます。その場合は大変お手数ですが、再度お問い合わせいただきますようよろしくお願いいたします。
        <br />
        <span className="text-red-600">※迷惑メールフォルダに受信されている場合もございますので一度ご確認ください。</span>
      </p>
      <a href="/" className="border-solid border border-gray-600 hover:text-white hover:bg-black h-12 w-32">
        TOPへ戻る
      </a>
    </div>
    <Footer />
  </div>
);

export default Thanks;
