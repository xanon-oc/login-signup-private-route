import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "./Providers/AuthInfoProvider";

const Header = () => {
  //  context  //

  const { user, logOut } = useContext(DataContext);

  //  logout Handler  //

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex header">
      <div className=" navbar bg-base-300 text-black opacity-95 flex justify-around items-center font-bold ">
        <div className="flex gap-8">
          <Link to="/">
            <img src="art.png" className="w-10" alt="" />
          </Link>
          <NavLink to="/">Home</NavLink>
          {user && (
            <div className="flex gap-6">
              <NavLink to="/family">Family</NavLink>
            </div>
          )}
          {!user && (
            <div className="flex gap-6">
              <NavLink to="/signIn">Sign in</NavLink>
              <NavLink to="/signUp">Sign up</NavLink>
            </div>
          )}
          {user && (
            <div className="flex gap-6">
              <NavLink to="/profile">Profile</NavLink>
            </div>
          )}
        </div>
        <div>
          {user && (
            <div className="flex justify-center items-center gap-4">
              <span>{user.email}</span>
              <button
                onClick={handleLogOut}
                className="btn btn-warning hover:btn-error hover:text-white"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
