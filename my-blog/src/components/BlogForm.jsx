import { useState } from "react";

const BlogForm = ({ blog = {}, onSubmit }) => {
  const [title, setTitle] = useState(blog.title || "");
  const [content, setContent] = useState(blog.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onSubmit({ ...blog, title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="btn primary">Submit</button>
    </form>
  );
};

export default BlogForm;