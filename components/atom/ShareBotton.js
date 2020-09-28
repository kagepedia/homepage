import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
// import { faHatebu } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

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
    <div className="flex">
      <div className="twitter text-blue-600 text-3xl pr-4">
        <a href={twitterShare}>
          <FontAwesomeIcon icon={faTwitter} />
          <span className="text-base block">ツイート</span>
        </a>
      </div>
      <div className="facebook text-blue-700 text-3xl pr-4">
        <a href={facebookShare}>
          <FontAwesomeIcon icon={faFacebook} />
          <span className="text-base block">シェア</span>
        </a>
      </div>
      <div className="line text-green-600 text-3xl pr-4">
        <a href={lineShare}>
          <FontAwesomeIcon icon={faLine} />
          <span className="text-base block">line</span>
        </a>
      </div>
      <div className="clipboard text-gray-700 text-3xl">
        <a href={clipBoard}>
          <FontAwesomeIcon icon={faClipboard} />
          <span className="text-base block">コピー</span>
        </a>
      </div>
    </div>
  );
};

export default ShareBotton;
