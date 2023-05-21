import React from "react";
import Button from "../button/Button";
import ServiceCard from "../serviceCard/serviceCard";
import "./postServices.css";

const serviceCardData = [
  {
    id: 1,
    title: "Waxing",
    Price: "$150",
    date: "26 Dec 2022",
  },
  {
    id: 2,
    title: "Waxing",
    Price: "$150",
    date: "26 Dec 2022",
  },
  {
    id: 3,
    title: "Waxing",
    Price: "$150",
    date: "26 Dec 2022",
  },
  {
    id: 4,
    title: "Waxing",
    Price: "$150",
    date: "26 Dec 2022",
  },
];

const PosstService = ({ pastServices }) => {
  return (
    <div className="nova-my-profile-my_services-post_services-main-container">
      <div className="nova-my-profile-my_services-post_services-card-container">
        {pastServices?.length != 0 ? (
          pastServices?.map((item) => <ServiceCard item={item} />)
        ) : (
          <div className="cart-product-information-heading">
            <h2>No past services available</h2>
          </div>
        )}
      </div>
      <div style={{ marginTop: "6.7rem", marginBottom: "6rem" }}>
        <Button> Load more</Button>
      </div>
    </div>
  );
};

export default PosstService;
