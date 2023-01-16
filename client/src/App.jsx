import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import UserName from "./components/UserName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/page-not-found",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
