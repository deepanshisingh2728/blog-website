import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";
import toast from "react-hot-toast";

const EditPost = () => {
  const { id } = useParams();
  const { blogs, editBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const blogToEdit = blogs.find((b) => b.id === Number(id));

  const handleSubmit = (updatedBlog) => {
    editBlog(updatedBlog);
    toast.success("Blog updated!");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edit Blog</h2>
      {blogToEdit ? (
        <BlogForm blog={blogToEdit} onSubmit={handleSubmit} />
      ) : (
        <p>Blog not found!</p>
      )}
    </div>
  );
};

export default EditPost;