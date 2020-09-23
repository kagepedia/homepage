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
  const [query, setQuesy] = useState();

  useEffect(() => {
    // queryが利用可能になったら処理される
    if (router.asPath !== router.route && router.query.q !== '') {
      setQuesy(router.query.q);
    }
  }, [router]);

  useEffect(() => {
    // 関数の実行
    async function getPosts(query) {
      const allPosts = await fetchEntriesPost(limit, skip, query);
      const allPostsCounter = await fetchEntriesAllPostCount(query);
      setPosts([...allPosts]);
      setPostsCount(allPostsCounter);
    }
    getPosts(query);
  }, [query]);

  const lastPage = Math.ceil(postsCount / limit);
  // const withParams = router.asPath.split('?')[1];

  return (
    <div>
      <Head title={'記事一覧'} url={'https://kagepedia.com/posts'} />
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {posts.length > 0
            ? posts.map((p) => (
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
            : null}
          {postsCount && lastPage !== 1 ? <_Pager page={page} total={postsCount} perPage={limit} href={`/posts/page/[page]`} asCallback={(page) => `/posts/page/${page}`} /> : ``}
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
