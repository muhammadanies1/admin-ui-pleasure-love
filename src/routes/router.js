import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/login";
import Dashboard from "../views/dashboard/dashboard";
import App from "../App";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/dashboard",
    element:<Dashboard />
  },
]);

export default router;