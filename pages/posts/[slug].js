import { useRouter } from 'next/router';
import { getAllPostsWithSlug, getPost } from '../api/contentful';
import { formatDate } from '../../utils/date';
import { noImage } from '../../utils/image';
import Header from '../../components/molecules/header';
import PostDtail from '../../components/atom/PostDetail';
import Profile from '../../components/molecules/profile';
import Footer from '../../components/molecules/footer';

export async function getStaticPaths() {
  const entries = await getAllPostsWithSlug();
  const paths = entries.items.map((post) => `/posts/${post.fields.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const entry = await getPost(slug);
  const post = entry.items[0];
  return { props: { post } };
}

const Detail = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {post ? (
            <PostDtail
              img_url={noImage(post).url}
              img_alt={noImage(post).title}
              title={post.fields.title}
              publishDate={formatDate(post.fields.publishDate)}
              discription={post.fields.discription}
              body={post.fields.body}
              slug={post.fields.slug}
            />
          ) : null}
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <Profile />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
