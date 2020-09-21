import { useEffect, useState } from 'react';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import PostList from '../../components/atom/PostList';
import { fetchEntriesPost } from '../api/contentful';
import { formatDate } from '../../utils/date';
import { noImage } from '../../utils/image';
import Profile from '../../components/molecules/profile';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntriesPost();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

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
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <Profile />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
