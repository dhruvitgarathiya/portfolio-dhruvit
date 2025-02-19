import React from "react";
import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogPost;
