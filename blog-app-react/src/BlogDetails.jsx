import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        {post.title}
      </h1>
      <img
        src={post.image}
        alt="Post thumbnail"
        className="w-full h-96 object-cover mb-4"
      />
      <div className="flex items-center mb-4">
        <img
          src={post.authorPic}
          alt={post.author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-800 font-semibold">{post.author}</p>
          <p className="text-gray-600 text-sm">
            {post.published_date} • {post.reading_time}
          </p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{post.content}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags &&
          post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}

export default BlogDetail;
