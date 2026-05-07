import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/user/Home";
import AboutUs from "../pages/user/AboutUs";
import Properties from "../pages/user/Properties";
import Services from "../pages/user/Services";
import Blogs from "../pages/user/Blogs";
import Wrapper from "../layout/User/Wrapper";
import ErrorBoundary from "../pages/ErrorBoundary";
import Contact from "../pages/user/Contact";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyEmail from "../pages/auth/VerifyEmail";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Navigate to="/signup/user" replace />,
  },
  {
    path: "/signup/user",
    element: <Signup />,
  },
  {
    path: "/signup/agent",
    element: <Signup />,
  },
  {
    path: "/signup/super-admin",
    element: <Signup />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      {
        path: "property",
        element: <Properties />,
        errorElement: <ErrorBoundary />,
      },
      { path: "service", element: <Services /> },
      { path: "blog", element: <Blogs /> },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export default Routes;
