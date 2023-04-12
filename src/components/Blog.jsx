import React from "react";

const Blog = ({ blog }) => {
  const { author, question, answer } = blog;
  return (
    <article className="p-5 md:p-10">
      <h3 className="text-xl font-extrabold opacity-50">{question}</h3>
      <p className="ms-2 my-3">{answer}</p>
      <p className="text-right">_{author}</p>
    </article>
  );
};

export default Blog;
