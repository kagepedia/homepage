import { useEffect, useState } from 'react';
import Head from '../../components/head';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import PostList from '../../components/atom/PostList';
import { formatDate } from '../../utils/date';

const client = require('contentful').createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
});

const Post = () => {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <div>
      <Head title={'記事一覧'} url={'https://kagepedia.com/posts'} />
      <Header />
      <div className="p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Post</h1>
      </div>
      {posts.length > 0
        ? posts.map((p) => <PostList title={p.fields.title} publishDate={formatDate(p.fields.publishDate)} discription={p.fields.discription} slug={p.fields.slug} key={p.fields.slug} />)
        : null}
      <Footer />
    </div>
  );
};

export default Post;
