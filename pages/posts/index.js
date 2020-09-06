import Head from "../../components/head";
import Header from "../../components/molecules/header";
import Footer from "../../components/molecules/footer";
import PostList from "../../components/atom/PostList";

const Post = () => (
  <div>
    <Head />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Post</h1>
      <p className="text-gray-500">
        with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method
        for production builds.
      </p>
    </div>
    <PostList />
    <Footer />
  </div>
);

export default Post;
