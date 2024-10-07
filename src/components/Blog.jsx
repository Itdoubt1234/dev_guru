import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
const blogPosts = [
  {
    title: "The Future of Web Development",
    description:
      "Explore the latest trends in web development and how they shape the future.",
    author: "xxx",
    date: "March 22, 2024",
    imgUrl: img1,
  },
  {
    title: " Content Marketing",
    description:
      "Learn how to effectively use content marketing strategies to improve your SEO.",
    author: "xxx",
    date: "April 10, 2024",
    imgUrl: img2,
  },
  {
    title: "Understanding UI/UX Design",
    description:
      "A guide to the fundamentals of UI/UX design and how to apply them.",
    author: "xxx",
    date: "May 5, 2024",
    imgUrl: img3,
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400">
            Company Blog
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Stay up to date with the latest news and articles from our team.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={post.imgUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-500">{post.description}</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>
                    By {post.author} • {post.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
