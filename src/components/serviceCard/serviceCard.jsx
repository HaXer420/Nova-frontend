import React from "react";
import { calender, calenderIcon, facial, waxing } from "../../assets";
import "./serviceCard.css";

const ServiceCard = () => {
  return (
    <div className="nova-my-profile-service-card-main_container">
      <div className="nov-my-profile-service-card-img-container">
        <img src={waxing} alt="" />
      </div>
      <div className="nova-my_profile-service-card-price-container">
        <p>Waxing</p>
        <h3>$150</h3>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="nova-my-profile-service-card-date-container">
        <img src={calenderIcon} alt="icon" />
        <h4>10 Dec 2022</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
