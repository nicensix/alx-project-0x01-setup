import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p>Here you will find all the posts!</p>
      </main>
    </div>
  );
};

export default PostsPage;