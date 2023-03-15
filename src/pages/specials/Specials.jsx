import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sugaring, threadingSpecial, waxingCombo } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import "./specials.css";

export default function Specials() {
  const navigate = useNavigate();
  const specialsArray = [
    {
      id: 1,
      title: "Waxing Combo",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: waxingCombo,
    },
    {
      id: 2,
      title: "Threading Specials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: threadingSpecial,
    },
    {
      id: 3,
      title: "Sugaring Deals",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: sugaring,
    },
  ];

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Specials</h1>
          <div className="nova-services-top_view">
            {specialsArray.map((item) => {
              return (
                <div
                  key={item.id}
                  className="nova-services-single_service_view"
                >
                  <img
                    onClick={() => navigate("/Sservicedetail")}
                    alt=""
                    src={item.image}
                  />
                  <div
                    onClick={() => navigate("/Sservicedetail")}
                    className="nova-services-single_service_title_view"
                  >
                    <h2>{item.title}</h2>
                  </div>
                  <h4 onClick={() => navigate("/Sservicedetail")}>
                    {item.des}
                    <span style={{ color: "#EE509C", fontWeight: "bold" }}>
                      {" "}
                      Read more
                    </span>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
