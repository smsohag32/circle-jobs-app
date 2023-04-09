import Lottie from "lottie-react";
import bannerImg from "../assets/jobFind.json";
import React from "react";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <div className="default-container flex items-center  md:justify-between gap-5 flex-col md:flex-row">
      <div className="w-full text-center md:text-start">
        <h1 className="title md:text-6xl font-bold mb-3">
          One Step Closer To Your <br />
          <span className="primary-text">Dream Job</span>
        </h1>
        <p className="mb-6">
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem nemo doloremque perspiciatis enim quo, quos nam odit
            laudantium repellendus sit assumenda blanditiis illo voluptatibus
            optio facilis cupiditate libero quibusdam neque?
          </small>
        </p>
        <Link to="/">
          <button className="primary-btn">Get Started</button>
        </Link>
      </div>
      <div className="bg-transparent">
        <Lottie
          className="bg-transparent"
          animationData={bannerImg}
          loop={true}
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
