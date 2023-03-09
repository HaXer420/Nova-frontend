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
const UpcomingServices = () => {
  return (
    <div className="nova-my-profile-my_service-upcoming-service-main-container">
      {upcomingService.map((item) => (
        <UpcomingServiceCard item={item} />
      ))}
    </div>
  );
};

export default UpcomingServices;
