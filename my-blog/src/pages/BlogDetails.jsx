import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="blog-list">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;