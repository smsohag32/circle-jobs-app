import React from "react";
import { useLoaderData } from "react-router-dom";
import TitleBanner from "./TitleBanner";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <TitleBanner>
        FA<span className="primary-text">Q</span> Popular Blogs
      </TitleBanner>
      <div className="default-container flex flex-col gap-5 py-16 divide-y-2">
        {blogs?.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
        <hr />
      </div>
    </>
  );
};

export default Blogs;
