import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
