import { useRouter } from 'next/router';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import PostDtail from '../../components/atom/PostDetail';
import { getAllPostsWithSlug, getPost } from '../api/contentful';
import { formatDate } from '../../utils/date';
import { noImage } from '../../utils/image';

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
      <Footer />
    </div>
  );
};

export default Detail;
