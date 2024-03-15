import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import "./homePage.css";
import { FiArrowRight } from "react-icons/fi";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Products</p>
        <h1 className="primary-heading">Shop These Eco-</h1>
        <h1 className="primary-heading">Friendly Products</h1>
        <p className="primary-text">
        Discover a curated selection of sustainable alternatives that help minimize your environmental impact.Start shopping and make a positive difference today!
        </p>
        <button className="secondary-button">
            Shop now <FiArrowRight />{" "}
        </button>
      </div>
      
    </div>
  );
};

export default Testimonial;