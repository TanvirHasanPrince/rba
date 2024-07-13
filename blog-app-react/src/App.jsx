import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogForm from "./BlogForm.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <BlogForm addPost={addPost} />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt="Post thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.content.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Read more
                    </Link>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-500 hover:text-red-600 ml-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
