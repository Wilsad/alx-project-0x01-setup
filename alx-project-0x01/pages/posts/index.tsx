import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const [isModalOpen, setModalOpen] = useState(false);
const [post, setPost] = useState<PostData | null>(null);

const handleAddPost = (newPost: PostData) => {
  setPost({ ...newPost, id: Posts.length + 1 });
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: { posts }
  }
}

export default Posts;
