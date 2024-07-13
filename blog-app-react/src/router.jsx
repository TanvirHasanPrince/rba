import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import BlogDetail from "./BlogDetails";
import BlogForm from "./BlogForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blogs/:postId",
    element: <BlogDetail />,
  },
  {
    path: "/addblog",
    element: <BlogForm />,
  },
]);

export default router;
