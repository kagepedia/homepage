import { useEffect, useState } from 'react';
import { fetchEntriesTop } from '../pages/api/contentful';
import { formatDate } from '../utils/date';
import { noImage } from '../utils/image';
import Head from '../components/head';
import Header from '../components/molecules/header';
import PostList from '../components/atom/PostList';
import Profile from '../components/molecules/profile';
import SearchForm from '../components/atom/SeachForm';
import Footer from '../components/molecules/footer';

// Loading
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Top = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      const allPosts = await fetchEntriesTop();
      setPosts([...allPosts]);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
    getPosts();
  }, []);

  return (
    <div>
      <Head />
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
            <p>現在表示できる記事はありません</p>
          )}
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
export default Top;
