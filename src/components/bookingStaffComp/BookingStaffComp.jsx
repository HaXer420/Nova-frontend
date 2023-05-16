import React, { useState } from "react";
import { back, circleClose, next } from "../../assets";
import "./bookingStaffComp.css";

const BookingStaffComp = ({
  onClickBack,
  onClickNext,
  selectedGender,
  setSelectedGender,
}) => {
  const genderArray = [
    {
      id: 0,
      title: "Male",
      value: "male",
    },
    {
      id: 1,
      title: "Female",
      value: "female",
    },
    {
      id: 2,
      title: "Any",
      value: "any",
    },
  ];
  return (
    <div className="nova-booking-service_comp_top_view">
      <h1>Select Staff</h1>
      {genderArray.map((item) => {
        return (
          <div
            onClick={() => setSelectedGender(item)}
            key={item.id}
            style={{
              backgroundColor:
                item.id === selectedGender.id ? "#EE509C" : "#ffffff",
            }}
            className="nova-booking-service_comp_item_view"
          >
            <h3
              style={{
                color: item.id === selectedGender.id ? "#ffffff" : "#292929",
              }}
            >
              {item.title}
            </h3>
          </div>
        );
      })}
      <div className="nova-booking-service_comp_button_top_view">
        <div
          onClick={onClickBack}
          className="nova-booking-service_comp_previous_button_view"
        >
          <img src={back} />
          <h3>Prevoious</h3>
        </div>
        <div
          onClick={onClickNext}
          className="nova-booking-service_comp_previous_button_view"
        >
          <h3>Next</h3>
          <img src={next} />
        </div>
      </div>
    </div>
  );
};

export default BookingStaffComp;
