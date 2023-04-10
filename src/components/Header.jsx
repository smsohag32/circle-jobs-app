import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center default-container mt-4 md:mt-0 ">
      <div className="">
        <h3 className="font-extrabold text-xl">
          <Link to="/">
            Circle<span className="primary-text">Job</span>s
          </Link>
        </h3>
      </div>
      <ul className="flex gap-4 flex-col md:flex-row bg-gray-800 p-8 text-white md:bg-transparent md:text-black">
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/statistic"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/applied"
        >
          Applied Jobs
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "primary-text"}
          to="/blog"
        >
          Blog
        </NavLink>
        <button className="primary-btn md:hidden w-[50%]">
          Start Applying
        </button>
      </ul>
      <button className="primary-btn hidden md:inline-block">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
