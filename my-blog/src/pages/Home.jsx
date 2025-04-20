import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div className="container">
      <h1>All Blogs</h1>
      {blogs.length === 0 && <p>No blogs found. Add one!</p>}
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <Link to={`/edit/${blog.id}`} className="btn">Edit</Link>
          <button
            onClick={() => {
              deleteBlog(blog.id);
              toast.success("Deleted");
            }}
            className="btn danger">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;



