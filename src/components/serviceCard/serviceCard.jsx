import React, { useState } from "react";
import {
  calender,
  calenderIcon,
  clockIcon,
  facial,
  waxing,
} from "../../assets";
import "./serviceCard.css";
import dayjs from "dayjs";

const ServiceCard = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    console.log("item", item),
    (
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="nova-my-profile-service-card-main_container"
      >
        <div className="nov-my-profile-service-card-img-container">
          <img src={waxing} alt="" />
        </div>
        <div className="nova-my_profile-service-card-price-container">
          <p>{item?.service?.title}</p>
          <h3>${item?.amount}</h3>
        </div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        <div className="nova-my-profile-service-card-date-container">
          <img src={calenderIcon} alt="icon" />
          <h4>{dayjs(item?.starttime).format("ddd, MMM, DD, YYYY")}</h4>
        </div>
        {isHovering && (
          <div className="nova-my-profile-service-card-hover-card-container">
            <div className="nova-profile-upcoming_card-sub-container">
              <div className="nova-profile-upcoming_card-img-container">
                <img src={waxing} alt="image" />
              </div>
              <div className="nova-my-profile-upcoming_card-detail-container">
                <div className="nova-my-profile-upcoming_card-type-text">
                  {item?.options?.map((subItem) => (
                    <p>
                      {item?.service?.title} | {subItem?.name} | $
                      {subItem?.price} | 20mins
                    </p>
                  ))}
                </div>
                <div
                  style={{ flexDirection: "column" }}
                  className="nova-my-profile-upcoming_card-detail-icon-container"
                >
                  <div className="nova-my-profile-upcoming_card-calender-icon-container">
                    <img src={calenderIcon} alt="calender-icon" />
                    <p>{dayjs(item?.starttime).format("ddd, MMM, DD, YYYY")}</p>
                  </div>
                  <div
                    style={{ marginLeft: "0rem" }}
                    className="nova-my-profile-upcoming_card-time-icon-container"
                  >
                    <div className="nova-my-profile-upcoming_card-calender-icon-container">
                      <img src={clockIcon} alt="calender-icon" />
                      <p>{dayjs(item?.starttime).format("hh:mm A")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ServiceCard;
