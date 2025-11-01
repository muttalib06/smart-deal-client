import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <div className="text-center space-y-2">
          {" "}
          <h4 className="text-3xl font-semibold">Login</h4>
          <p className="text-[.8rem]">
            Don't have an Account? <NavLink className="text-primary">Register Now</NavLink>
          </p>
        </div>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 primary-btn">
                Sign In
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
