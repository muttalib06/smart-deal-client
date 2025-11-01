import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
