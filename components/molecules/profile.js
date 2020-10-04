const Profile = () => (
  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
    <div className="w-5/12 mx-auto">
      <img src="/img/profile.JPG" className="rounded-full border-solid border-4 border-green-600" alt="プロフィール画像" />
    </div>
    <p className="text-xl text-center mt-3 font-semibold pb-5">Kage Soichiro</p>
    <p className="pb-2">WEB制作会社でWEBエンジニアとして働いている24歳です。技術ネタを中心に発信していきます。</p>
    <a href="about" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
      詳しいプロフィールはこちら
    </a>
  </div>
);

export default Profile;
