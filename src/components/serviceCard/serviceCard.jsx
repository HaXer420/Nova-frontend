import React, { useState } from "react";
import {
  calender,
  calenderIcon,
  clockIcon,
  facial,
  waxing,
} from "../../assets";
import "./serviceCard.css";

const ServiceCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="nova-my-profile-service-card-main_container"
    >
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
      {isHovering && (
        <div className="nova-my-profile-service-card-hover-card-container">
          <div className="nova-profile-upcoming_card-sub-container">
            <div className="nova-profile-upcoming_card-img-container">
              <img src={waxing} alt="image" />
            </div>
            <div className="nova-my-profile-upcoming_card-detail-container">
              <div className="nova-my-profile-upcoming_card-type-text">
                <p>{"waxing"} | Full Body | 20mins</p>
              </div>
              <div
                style={{ flexDirection: "column" }}
                className="nova-my-profile-upcoming_card-detail-icon-container"
              >
                <div className="nova-my-profile-upcoming_card-calender-icon-container">
                  <img src={calenderIcon} alt="calender-icon" />
                  <p>Mon, Feb, 25, 2023</p>
                </div>
                <div
                  style={{ marginLeft: "0rem" }}
                  className="nova-my-profile-upcoming_card-time-icon-container"
                >
                  <div className="nova-my-profile-upcoming_card-calender-icon-container">
                    <img src={clockIcon} alt="calender-icon" />
                    <p>6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
