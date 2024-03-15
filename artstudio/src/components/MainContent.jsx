import React from "react";
import "./homePage.css";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/carbon_final.png";
import Navbar from "./Navbar";

const  MainContent=() => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Every action counts and every footprint matters!!
          </h1>
          <p className="primary-text">
          {/* Join us in the journey towards a greener, cleaner planet. Discover how small changes in your daily life can make a big difference for our environment.  */}
          Carbon footprints measure greenhouse gases emitted by human activities, indicating environmental impact and climate change contribution. Reducing them is vital for sustainability and combating global warming.
          </p>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;