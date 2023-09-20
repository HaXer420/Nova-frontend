import React, { useState } from "react";
import CanceledService from "../canceledService/canceledService";
import CancelServiceModal from "../cancelServiceModal/cancelServiceModal";
import PosstService from "../postService/posstService";
import UpcomingServices from "../upcomingService/upcomingServices";
import "./myProducts.css";

const serviceArr = [
  {
    id: 1,
    text: "Delivered Products",
  },
  {
    id: 2,
    text: "Cancelled Products",
  },
  {
    id: 3,
    text: "Pending Products",
  },
];

const MyProducts = ({
  pastServices,
  cancelServices,
  upcomingServices,
  setIsLoading,
  cancelBooking,
}) => {
  const [select, setselect] = useState({
    id: 1,
    text: "Delivered Products",
  });
  return (
    <div className="nove-my_profile-my_rewards-main_container">
      <div className="nova-my_profile-my_reward-select-container">
        {serviceArr.map((item) => (
          <div
            onClick={() => setselect(item)}
            className="nova-my_profile-my_reward-select-view"
          >
            <p style={{ color: select.id == item.id ? "#EE509C" : "#000" }}>
              {item.text}
            </p>
            <div
              style={{ display: select.id == item.id ? "flex" : "none" }}
              className="nova-my_profile-my_reward-select-border"
            ></div>
          </div>
        ))}
      </div>
      {select.id == 1 ? (
        <PosstService pastServices={pastServices} />
      ) : select.id == 2 ? (
        <CanceledService cancelServices={cancelServices} />
      ) : (
        <UpcomingServices
          setIsLoading={setIsLoading}
          upcomingServices={upcomingServices}
          cancelBooking={cancelBooking}
        />
      )}
    </div>
  );
};

export default MyProducts;
