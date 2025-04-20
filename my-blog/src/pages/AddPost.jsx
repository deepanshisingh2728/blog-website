import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddPost = () => {
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (blog) => {
    addBlog({ ...blog, id: Date.now() });
    toast.success("Blog added!");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add New Blog</h2>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPost;
