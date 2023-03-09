import React, { useState } from "react";
import { calenderIcon, clockIcon, crossIcon, waxing } from "../../assets";
import { useDispatch } from "react-redux";
import CancelServiceModal from "../cancelServiceModal/cancelServiceModal";
import "./upcomingServiceCard.css";
import { showModalValue } from "../../redux/showModalSlice";

const UpcomingServiceCard = ({ item }) => {
  const dispatch = useDispatch();

  const setValue = () => {
    // console.log("click");
    dispatch(showModalValue(true));
  };
  return (
    <div className="nova-profile-upcoming_card-main-container">
      <div className="nova-profile-upcoming_car-container">
        <div className="nova-profile-upcoming_card-sub-container">
          <div className="nova-profile-upcoming_card-img-container">
            <img src={item.image} alt="image" />
          </div>
          <div className="nova-my-profile-upcoming_card-detail-container">
            <div className="nova-my-profile-upcoming_card-type-text">
              <p>{item.title} | Full Body | 20mins</p>
            </div>
            <div className="nova-my-profile-upcoming_card-detail-icon-container">
              <div className="nova-my-profile-upcoming_card-calender-icon-container">
                <img src={calenderIcon} alt="calender-icon" />
                <p>Mon, Feb, 25, 2023</p>
              </div>
              <div className="nova-my-profile-upcoming_card-time-icon-container">
                <div className="nova-my-profile-upcoming_card-calender-icon-container">
                  <img src={clockIcon} alt="calender-icon" />
                  <p>6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setValue()}
          className="nova-my-profile-upcoming_card-cancel-main-container"
        >
          <div className="nova-my-profile-upcoming_card-cancel-btn-container">
            <img src={crossIcon} alt="" />
            <p>Cancel</p>
          </div>
          <h2>$25</h2>
        </div>
      </div>
      <div className="nova-profile-upcoming_card-bottom-line"></div>
    </div>
  );
};

export default UpcomingServiceCard;
