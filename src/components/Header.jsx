import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center default-container mt-4 md:mt-0 ">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold text-2xl">
          <Link to="/">
            Circle<span className="primary-text">Job</span>s
          </Link>
        </h3>
        <span onClick={() => setIsOpen(!isOpen)}>
          <span className="md:hidden">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </span>
      </div>
      <ul
        className={`flex absolute md:static gap-4 flex-col md:flex-row bg-blue-50 p-8 md:bg-transparent md:text-black font-bold text-base ${
          isOpen
            ? "top-16 mt-1 z-50 duration-700 left-0"
            : "-top-80 duration-700"
        }`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? "primary-text" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "primary-text" : "")}
          to="/statistic"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "primary-text" : "")}
          to="/applied"
        >
          Applied Jobs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "primary-text" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
        <Link to="/">
          <button className="primary-btn md:hidden ">Start Applying</button>
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
