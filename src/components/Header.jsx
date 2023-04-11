import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center default-container mt-4 md:mt-0 ">
      <div className="">
        <h3 className="font-extrabold text-2xl">
          <Link to="/">
            Circle<span className="primary-text">Job</span>s
          </Link>
        </h3>
      </div>
      <ul className="flex gap-4 flex-col md:flex-row bg-gray-800 p-8 text-white md:bg-transparent md:text-black font-bold text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "primary-text" : "text-black"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "primary-text" : "text-black"
          }
          to="/statistic"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "primary-text" : "text-black"
          }
          to="/applied"
        >
          Applied Jobs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "primary-text" : "text-black"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <Link to="/">
          <button className="primary-btn md:hidden w-[50%]">
            Start Applying
          </button>
        </Link>
      </ul>
      <Link to="/">
        <button className="primary-btn hidden md:inline-block">
          Start Applying
        </button>
      </Link>
    </div>
  );
};

export default Header;
