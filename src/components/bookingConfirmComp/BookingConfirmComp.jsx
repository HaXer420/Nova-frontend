import React, { useState } from "react";
import { calenderTwo, clock, squareTick, waxing } from "../../assets";
import Button from "../button/Button";
import TipDropDown from "../tipDropDown/tipDropDown";
import "./bookingConfirmComp.css";

const BookingConfirmComp = (props) => {
  const serivceArray = [
    {
      id: 1,
      title: "Waxing  |  Full Body  |  20mins",
      date: "Mon, Jan, 17, 2023",
      time: "6:30 PM",
      price: "$25",
    },
    {
      id: 2,
      title: "Waxing  |  Legs  |  20mins",
      date: "Mon, Feb, 25, 2023",
      time: "6:30 PM",
      price: "$25",
    },
  ];

  const tipArr = [
    {
      id: 1,
      value: "10%",
      label: "10%",
    },
    {
      id: 2,
      value: "20%",
      label: "20%",
    },
    {
      id: 3,
      value: "30%",
      label: "30%",
    },
  ];

  const [tipSelect, setTipSelect] = useState({
    id: 1,
    value: "10%",
    label: "10%",
  });

  return (
    <div className="nova-booking-confirm_comp_top_view">
      <h1>Service Information</h1>
      {serivceArray.map((item) => {
        return (
          <>
            <div className="nova-booking-confirm_comp_service_top_view">
              <div className="nova-booking-confirm_comp_service_image_view">
                <img src={waxing} />
              </div>
              <div className="nova-booking-confirm_comp_service_detail_view">
                <div className="nova-booking-confirm_comp_service_title_view">
                  <h2>{item.title}</h2>
                  <div className="nova-booking-confirm_comp_service_date_view">
                    <img src={calenderTwo} />
                    <h3>{item.date}</h3>
                    <img src={clock} />
                    <h4>{item.time}</h4>
                  </div>
                </div>
                <div className="nova-booking-confirm_comp_service_price_view">
                  <img src={squareTick} />
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
          </>
        );
      })}
      <div className="nova-booking-confirm_comp_tip_top_view">
        <h2>Tip</h2>
        {/* <h3>10%</h3> */}
        <TipDropDown
          options={tipArr}
          selected={tipSelect}
          setSelected={setTipSelect}
        />
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
      <div className="nova-booking-confirm_comp_tip_top_view">
        <div>
          <h2>Sub Total</h2>
          <h4>You can pay for one or multiple services at a time.</h4>
        </div>
        <h3>$42.5</h3>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
      <div className="nova-booking-confirm_comp_tip_top_view">
        <h2>Discount</h2>
        <h3>10%</h3>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
      <div className="nova-booking-confirm_comp_tip_top_view">
        <h2>Redeem Points</h2>
        <div className="nova-booking-confirm_comp_service_price_view">
          <img src={squareTick} />
          <h5>{"$13.5"}</h5>
        </div>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
      <div className="nova-booking-confirm_comp_tip_top_view">
        <h2>Final</h2>
        <h3>$28.00</h3>
      </div>
      <Button onClick={props.onClickNext}>Confirm</Button>
    </div>
  );
};

export default BookingConfirmComp;
