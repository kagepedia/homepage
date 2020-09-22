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
const limit = 1;
const skip = 0;

// Pathを生成
const COUNT_PER_PAGE = 1;
export async function getStaticPaths() {
  const entries = await fetchEntriesAllPostCount();
  const pages = range(Math.ceil(entries.length / COUNT_PER_PAGE));
  const paths = pages.map((page) => `/posts/${page}`);
  return { paths, fallback: false };
}

function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1);
}

export async function getStaticProps({ params }) {
  const page2 = parseInt(params.page, 10);
  console.log(page2);
  return page2;
}

// Pathを生成 ここまで

const Post = () => {
  let {
    query: { q },
  } = useRouter();
  const [posts, setPosts] = useState([]);
  const [postsCount, setPostsCount] = useState(0);

  if (q === undefined) q = '';

  useEffect(() => {
    // 関数の実行
    async function getPosts() {
      const allPosts = await fetchEntriesPost(limit, skip, q);
      const allPostsCounter = await fetchEntriesAllPostCount(q);
      setPosts([...allPosts]);
      setPostsCount(allPostsCounter);
    }
    getPosts();
  }, [q]);

  const lastPage = Math.ceil(postsCount / limit);

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
          {postsCount && lastPage !== 1 ? <_Pager page={page} total={postsCount} perPage={limit} href="/posts/[page]" asCallback={(page) => `/posts/${page}`} /> : ``}
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
