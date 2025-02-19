import React from "react";
import { BLOG_POSTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="pb-4 border-b lg:mb-3 border-neutral-900">
      <motion.h2
        className="my-20 text-4xl text-center font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {BLOG_POSTS.map((post, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="w-full lg:w-1/3 p-4"
          >
            <div className="h-full p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-600 to-black">
              <h3 className="mb-4 text-2xl font-bold text-white">
                {post.title}
              </h3>
              <p className="mb-6 text-gray-300">{post.excerpt}</p>
              <Link
                to={`/blog/${index}`}
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read more
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
