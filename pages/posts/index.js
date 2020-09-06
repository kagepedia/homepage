import Head from "../../components/head";
import Header from "../../components/molecules/header";
import Footer from "../../components/molecules/footer";
import PostList from "../../components/atom/PostList";

const Post = () => (
  <div>
    <Head />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center">Post</h1>
    </div>
    <PostList />
    <PostList />
    <PostList />
    <PostList />
    <PostList />
    <PostList />
    <Footer />
  </div>
);

export default Post;
