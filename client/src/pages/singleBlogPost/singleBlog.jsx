import React from "react";
import "./singleBlog.css";

const SingleBlog = () => {
  return (
    <div className="single-blog">
      <h1 className="blog-title">Top Luxury Destinations for 2024</h1>
      <p className="blog-date">Published on: December 5, 2024</p>
      <img
        src="https://source.unsplash.com/800x400/?luxury,destination"
        alt="Blog Banner"
        className="blog-banner"
      />
      <div className="blog-content">
        <p>
          Explore the top luxury destinations for 2024! From stunning beaches to
          exclusive mountain retreats, these locations are perfect for
          unforgettable adventures. Enjoy tailored experiences with world-class
          amenities.
        </p>
        <p>
          At Liyanna Luxury Tours, we specialize in making these trips happen
          with ease and style. Discover what awaits you!
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
