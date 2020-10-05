import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
// import { faHatebu } from '@fortawesome/free-brands-svg-icons';
// import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const ShareBotton = ({ title, slug }) => {
  const BASE_URL = process.env.BASE_URL;
  const twitterShare = encodeURI(`//twitter.com/share?url=${BASE_URL}/posts/${slug}/&text=${title}`);
  const facebookShare = encodeURI(`//www.facebook.com/sharer/sharer.php?u=${BASE_URL}/posts/${slug}`);
  const hatenaShare = encodeURI(`//b.hatena.ne.jp/entry/kagepedia.com/posts/${slug}`);
  const lineShare = encodeURI(`//line.me/R/msg/text/?${title} ${BASE_URL}/posts/${slug}`);
  const clipBoard = `${title} ${BASE_URL}/posts/${slug}`;

  return (
    <div>
      <p className="text-center mb-4">SHARE PLEASE !</p>
      <div className="flex text-center max-w-5xl">
        <div className="twitter text-blue-600 text-3xl pr-4">
          <a href={twitterShare} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="text-base block">ツイート</span>
          </a>
        </div>
        <div className="facebook text-blue-700 text-3xl pr-4">
          <a href={facebookShare} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="text-base block">シェア</span>
          </a>
        </div>
        <div className="line text-green-600 text-3xl pr-4">
          <a href={lineShare} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faLine} />
            <span className="text-base block">line</span>
          </a>
        </div>
        {/*
      <div className="clipboard text-gray-700 text-3xl">
        <a href={clipBoard}>
          <FontAwesomeIcon icon={faClipboard} />
          <span className="text-base block">コピー</span>
        </a>
      </div>
      */}
      </div>
    </div>
  );
};

export default ShareBotton;
