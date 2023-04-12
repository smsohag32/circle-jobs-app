import Lottie from "lottie-react";
import bannerImg from "../assets/jobFind.json";
import React from "react";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="default-container pt-16 md:pt-0 flex items-center  md:justify-between gap-5 flex-col md:flex-row"
    >
      <div className="w-full text-center md:text-start">
        <h1 className="title md:text-6xl text-3xl font-bold mb-3">
          <span className="opacity-70">One Step Closer To Your</span> <br />
          <span className="primary-text opacity-100">Dream Job</span>
        </h1>
        <p className="mb-6">
          <small>
            Search and apply for the latest job vacancies in your field. Our
            platform offers a wide range of opportunities for job seekers of all
            levels. Join now and take the first step towards your career goals.
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
