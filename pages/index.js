import { useEffect, useState } from 'react';
import { fetchEntriesTop } from '../pages/api/contentful';
import { formatDate } from '../utils/date';
import { noImage } from '../utils/image';
import Head from '../components/head';
import Header from '../components/molecules/header';
import PostList from '../components/atom/PostList';
import Profile from '../components/molecules/profile';
import Footer from '../components/molecules/footer';

const Top = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntriesTop();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <div>
      <Head />
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
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <Profile />
        </aside>
      </div>
      <Footer />
    </div>
  );
};
export default Top;
