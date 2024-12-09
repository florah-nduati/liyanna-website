import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Luxury Destinations for 2024",
      excerpt:
        "Explore the most luxurious destinations you can visit this year.",
      image: "https://source.unsplash.com/300x200/?travel,destination",
    },
    {
      id: 2,
      title: "Travel Tips for an Unforgettable Journey",
      excerpt: "Practical tips for making your travel smooth and enjoyable.",
      image: "https://source.unsplash.com/300x200/?travel,tips",
    },
    {
      id: 3,
      title: "Why Private Jets Are the Ultimate Luxury",
      excerpt: "Discover why chartered planes are redefining luxury travel.",
      image: "https://source.unsplash.com/300x200/?private-jet,luxury",
    },
  ];

  return (
    <div className="blog">
      <h1>Travel Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
