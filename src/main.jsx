import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import Instructors from "./pages/Instructors/Instructors";
import Classes from "./pages/Classes/Classes";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./layout/Dashboard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MyProfile from "./pages/MyProfile/MyProfile";
import SingleInstructorsClasses from "./pages/SingleInstructorsClasses/SingleInstructorsClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructor/:id",
        element: <PrivateRoute><SingleInstructorsClasses></SingleInstructorsClasses></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/instructor/${params.id}`)
      }
    ],
  },
  {
    path: "/dashboard/profile",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthProvider>
  </React.StrictMode>
);
