import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const PostListTop = ({ title, publishDate, discription, slug }) => (
  <div>
    <article className="flex shadow my-4">
      <Link href={'/posts/' + slug} as={'/posts/' + slug}>
        <a className="flex items-center hover:bg-gray-100">
          <div className="w-2/6">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
          </div>
          <div className="flex flex-col justify-start p-6">
            <p className="text-sm pb-3">
              <span className="mr-2">
                <FontAwesomeIcon icon={faHistory} />
              </span>
              {publishDate}2020-7-10
            </p>
            <p className="text-3xl font-bold pb-4">{title}サンプルタイトルサンプルタイトル</p>
            <p className="pb-6">{discription}記事詳細データ記事詳細データ記事詳細データ</p>
          </div>
        </a>
      </Link>
    </article>
  </div>
);

export default PostListTop;
