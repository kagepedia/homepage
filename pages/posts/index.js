import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchEntriesPost, fetchEntriesAllPostCount } from '../api/contentful';
import { formatDate } from '../../utils/date';
import { noImage } from '../../utils/image';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import PostList from '../../components/atom/PostList';
import Profile from '../../components/molecules/profile';
import SearchForm from '../../components/atom/SeachForm';
import Footer from '../../components/molecules/footer';

// Loading
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

// _Pager
import _Pager from '../../components/atom/_Pager';

// default setting
const page = 1;
const limit = 5;
const skip = 0;

const Post = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [postsCount, setPostsCount] = useState(0);
  const [query, setQuesy] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { q } = router.query;

  useEffect(() => {
    // queryが利用可能になったら処理される
    if (q !== undefined) setQuesy(q);
  }, [q]);

  useEffect(() => {
    // 関数の実行
    async function getPosts(query) {
      setIsLoading(true);
      if (query === undefined) return;
      const allPosts = await fetchEntriesPost(limit, skip, query);
      const allPostsCounter = await fetchEntriesAllPostCount(query);
      setPosts([...allPosts]);
      setPostsCount(allPostsCounter);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }

    // /postの時
    if (router.asPath == router.pathname) {
      getPosts(query);
      // queryがある時
    } else {
      getPosts(query);
    }
  }, [query]);

  const lastPage = Math.ceil(postsCount / limit);

  return (
    <div>
      <Head title={'記事一覧'} url={'https://kagepedia.com/posts'} />
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {isLoading ? (
            <div className="animate-spin text-6xl text-blue-800">
              <FontAwesomeIcon icon={faCircleNotch} />
            </div>
          ) : posts.length > 0 ? (
            posts.map((p) => (
              <PostList
                img_url={noImage(p).url}
                img_alt={noImage(p).title}
                title={p.fields.title}
                publishDate={formatDate(p.fields.publishDate)}
                discription={p.fields.discription}
                slug={p.fields.slug}
                key={p.fields.slug}
              />
            ))
          ) : (
            <p>表示する記事がありません</p>
          )}
          {postsCount && lastPage !== 1 && !isLoading ? <_Pager page={page} total={postsCount} perPage={limit} href={`/posts/page/[page]`} asCallback={(page) => `/posts/page/${page}`} /> : ``}
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

export default Post;
