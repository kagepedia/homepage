import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchEntriesPost } from '../api/contentful';
import { formatDate } from '../../utils/date';
import { noImage } from '../../utils/image';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import PostList from '../../components/atom/PostList';
import Profile from '../../components/molecules/profile';
import SearchForm from '../../components/atom/SeachForm';
import Footer from '../../components/molecules/footer';

// test
import _Pager from '../../components/atom/_Pager';

// default setting
const limit = 5;
const skip = 0;

const Post = () => {
  let {
    query: { q },
  } = useRouter();
  const [posts, setPosts] = useState([]);

  if (q === undefined) q = '';

  useEffect(() => {
    // 関数の実行
    async function getPosts() {
      const allPosts = await fetchEntriesPost(limit, skip, q);
      setPosts([...allPosts]);
    }
    getPosts();
  }, [q]);

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
          <_Pager />
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
