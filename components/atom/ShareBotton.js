const ShareBotton = ({ title, url, slug }) => {
  // {process.env.BASE_URL} ←を使う
  // https://twitter.com/share?url=https://kagepedia.com/&text=ひなたぼっこブログ textはエンコード
  const twitterShare = `https://twitter.com/share`;
  // https://www.facebook.com/sharer/sharer.php?u=https://kagepedia.com/ urlエンコード
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=postURL`;
  // http://b.hatena.ne.jp/entry/kagepedia.com/posts/markdown-it-sample ホストとパス(http://なしのURLアドレス)を付ける形
  const hatenaShare = `https://b.hatena.ne.jp/entry/`;
  // http://line.me/R/msg/text/?ひなたぼっこ https://kagepedia.com/post
  const lineShare = ``;
  const clipBoard = `タイトル + URL`;

  return (
    <div>
      <div className="twitter">
        <a href={twitterShare}></a>
      </div>
      <div className="facebook">
        <a href={facebookShare}></a>
      </div>
      <div className="hatena">
        <a href={hatenaShare}></a>
      </div>
      <div className="line">
        <a href={lineShare}></a>
      </div>
      <div className="clipboard">
        <a href={clipBoard}></a>
      </div>
    </div>
  );
};

export default ShareBotton;
