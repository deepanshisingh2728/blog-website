import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => setBlogs([...blogs, blog]);

  const editBlog = (updatedBlog) => {
    setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, editBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};