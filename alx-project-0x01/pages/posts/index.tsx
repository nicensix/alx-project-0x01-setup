import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  const posts = [
    { title: "Post 1", content: "This is the first post." },
    { title: "Post 2", content: "This is the second post." }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;