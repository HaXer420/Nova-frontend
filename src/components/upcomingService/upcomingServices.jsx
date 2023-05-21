import React from "react";
import { facial, waxing } from "../../assets";
import UpcomingServiceCard from "../upcomingServiceCard/upcomingServiceCard";
import "./upcomingService.css";

const upcomingService = [
  {
    id: 1,
    title: "Waxing",
    image: waxing,
  },
  {
    id: 2,
    title: "Facial",
    image: facial,
  },
  {
    id: 3,
    title: "Facial",
    image: facial,
  },
];
const UpcomingServices = ({
  upcomingServices,
  setIsLoading,
  cancelBooking,
}) => {
  return (
    <div className="nova-my-profile-my_service-upcoming-service-main-container">
      {upcomingService?.length != 0 ? (
        upcomingServices.map((item) => (
          <UpcomingServiceCard
            setIsLoading={setIsLoading}
            item={item}
            cancelBooking={cancelBooking}
          />
        ))
      ) : (
        <div className="cart-product-information-heading">
          <h2>There is no coming services</h2>
        </div>
      )}
    </div>
  );
};

export default UpcomingServices;
