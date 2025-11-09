import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ProductDetail from "../pages/ProductDetail";
import MyProducts from "../pages/MyProducts";
import MyBids from "../pages/MyBids";
import CreateProduct from "../pages/CreateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
        path: "all-products",
        loader: () => fetch("http://localhost:3000/products"),
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
      {
        path: "product-detail/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product-detail/${params.id}`),
        Component: ProductDetail,
      },
      {
        path:"my-products",
        Component:MyProducts
      },
      {
        path:"my-bids",
        Component:MyBids
      },
      {
        path:"create-product",
        element:<PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>
      }
    ],
  },
]);
