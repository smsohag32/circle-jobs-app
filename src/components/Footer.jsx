import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer grid grid-cols-2 divide-y-2 md:grid-cols-4 p-10 default-container bg-base-200 mx-auto gap-3 text-base-content">
        <div>
          <span className="footer-title text-xl lowercase">CircleJobs</span>
          <p>
            {" "}
            One Step Closer To <br /> Your Dream Job
          </p>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer flex justify-between px-14 py-4 default-container border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>
            &copy; <span className="font-semibold">circleJobs</span> All Rights
            Reserved
          </p>
        </div>
        <div className="">
          <div className="grid grid-flow-col gap-4">
            <p className="text-gray-700">Powered by circleJobs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
