import React, { useState } from "react";
import { calenderIcon, clockIcon, crossIcon, waxing } from "../../assets";
import { useDispatch } from "react-redux";
import CancelServiceModal from "../cancelServiceModal/cancelServiceModal";
import "./upcomingServiceCard.css";
import { showModalValue } from "../../redux/showModalSlice";
import dayjs from "dayjs";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";

const UpcomingServiceCard = ({ item, cancelBooking }) => {
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
              {item?.options?.map((subItem) => (
                <p>
                  {item?.service?.title} | {subItem?.name} | ${subItem?.price} |
                  20mins
                </p>
              ))}
            </div>
            <div className="nova-my-profile-upcoming_card-detail-icon-container">
              <div className="nova-my-profile-upcoming_card-calender-icon-container">
                <img src={calenderIcon} alt="calender-icon" />
                <p>{dayjs(item?.starttime).format("ddd, MMM, DD, YYYY")}</p>
              </div>
              <div className="nova-my-profile-upcoming_card-time-icon-container">
                <div className="nova-my-profile-upcoming_card-calender-icon-container">
                  <img src={clockIcon} alt="calender-icon" />
                  <p>{dayjs(item?.starttime).format("hh:mm A")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => cancelBooking(item?.order?._id, item?._id)}
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
