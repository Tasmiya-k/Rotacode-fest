import React from "react";
import "./homePage.css";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Calculate Carbon Footprints</p> 
        <h1 className="primary-heading">Calculate Your Carbon</h1>
        <h1 className="primary-heading">Footprints</h1>
        <p className="primary-text">
        Explore our carbon footprint calculator to understand your impact, and discover practical tips and resources to lighten your ecological load. 
        </p>
        <button className="secondary-button">
            Calculate Now <FiArrowRight />{" "}
        </button>
      </div>
      

      
    </div>
  );
};

export default Work;