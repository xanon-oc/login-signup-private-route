import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Providers/AuthInfoProvider";

const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // context

  const { createUserHandler, emailCheck, auth } = useContext(DataContext);

  const handleRegisterFormSubmit = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setError("Password doesn't match");
      return;
    } else if (password.length < 8) {
      setError("Password must be  8 characters");
      return;
    }

    createUserHandler(email, password)
      .then((result) => {
        const loggedUser = result.user;
        emailCheck(auth, email).then(() => {
          alert("please verify your email");
        });

        console.log(loggedUser);
        setSuccess("Account created successfully");
        setError("");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold">Sign up here !</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleRegisterFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
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
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    name="confirm"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="text-center">
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{success}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>

              <div className="flex justify-center items-center">
                <Link to="/signIn" className="btn btn-link lowercase">
                  Have a account-Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
