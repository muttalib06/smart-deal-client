import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = [
    <li key="home">
      <NavLink
        className={({ isActive }) => (isActive ? "md:border-b pb-1 border-primary" : "")}
        to="/"
      >
        Home
      </NavLink>
    </li>,
    <li key="all-products">
      <NavLink
        className={({ isActive }) => (isActive ? "md:border-b pb-1 border-primary" : "")}
        to="/all-products"
      >
        All Products
      </NavLink>
    </li>,
    <li key="my-products">
      <NavLink
        className={({ isActive }) => (isActive ? "md:border-b pb-1 border-primary" : "")}
        to="/my-products"
      >
        My Products
      </NavLink>
    </li>,
    <li key="my-bids">
      <NavLink
        className={({ isActive }) => (isActive ? "md:border-b pb-1 border-primary" : "")}
        to="/my-bids"
      >
        My Bids
      </NavLink>
    </li>,
    <li key="create-product">
      <NavLink
        className={({ isActive }) => (isActive ? "border-b pb-1" : "")}
        to="/create-product"
      >
        Create Product
      </NavLink>
    </li>,
  ];

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">
            Smart <span className="text-primary">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn border border-primary"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn border border-primary">
              Login
            </NavLink>
          )}
          <NavLink to="/register" className="btn border primary-btn text-white">
            Register
          </NavLink>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Navbar;
