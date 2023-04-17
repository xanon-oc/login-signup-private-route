import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Providers/AuthInfoProvider";

const SignIn = () => {
  //  states  //

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //  context  //

  const { userLoginHandler, setUser } = useContext(DataContext);

  const handleLoginFormSubmit = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLoginHandler(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
        setError("");
        setSuccess("Login Successful");
        form.reset();
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">login here !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="text-center">
                <p className="text-red-600">{error}</p>
                <p className="text-green-600">{success}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex justify-center items-center">
              <Link to="/signUp" className="btn btn-link lowercase">
                Don't have a account-Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
