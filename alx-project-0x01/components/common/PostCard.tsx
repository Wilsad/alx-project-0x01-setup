import React from 'react';
import { PostProps } from '@/interfaces';

interface PostCardProps {
  post: PostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-2">{post.body}</p>
      <div className="text-sm text-gray-500">
        Post ID: {post.id} • User ID: {post.userId}
      </div>
    </div>
  );
};

export default PostCard;