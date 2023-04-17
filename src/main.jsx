import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Family from "./components/Family";
import AuthInfoProvider from "./components/Providers/AuthInfoProvider";
import SecureRoute from "./SecureRoute/SecureRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <SecureRoute>
            <Profile />
          </SecureRoute>
        ),
      },
      {
        path: "/family",
        element: (
          <SecureRoute>
            <Family />
          </SecureRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthInfoProvider>
      <RouterProvider router={router} />
    </AuthInfoProvider>
  </React.StrictMode>
);
