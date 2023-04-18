import React, { useState } from "react";
import { back, next, roundTick, tick } from "../../assets";
import Button from "../button/Button";
import "./bookingMyInfoComp.css";

const BookingMyInfoComp = (props) => {
  const [terms, setTerms] = useState(true);

  return (
    <div className="nova-booking-my_info_comp_top_view">
      <h1>Enter Your Information</h1>
      <div className="nova-booking-my_info_comp_inputs_top_view">
        <div className="nova-booking-my_info_comp_first_name_input_top_view">
          <div className="nova-booking-my_info_comp_first_name_input_view">
            <h5>First Name*</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <input placeholder="eg: abc123" />
            </div>
          </div>
          <div className="nova-booking-my_info_comp_first_name_input_view">
            <h5>Last Name</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <input placeholder="eg: abc123" />
            </div>
          </div>
          <div className="nova-booking-my_info_comp_first_name_input_view">
            <h5>Mobile*</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <input placeholder="+1 591269 65151" />
            </div>
          </div>
          <div className="nova-booking-my_info_comp_first_name_input_view">
            <h5>Email</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <input placeholder="+1 591269 65151" />
            </div>
          </div>
          <div className="nova-booking-my_info_comp_address_input_view">
            <h5>Address</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <input placeholder="Address" />
            </div>
          </div>
          <div className="nova-booking-my_info_comp_address_input_view">
            <h5>Comments</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <textarea placeholder="Write here" />
            </div>
          </div>
        </div>
        <div
          onClick={() => setTerms(!terms)}
          className="nova-booking-my_info_comp_radia_button_view"
        >
          <div>{terms && <img src={tick} />}</div>
          <h4>
            By submitting this form, you agree to receive appointment
            notifications from NOVA threading & Waxing
          </h4>
        </div>
        <Button onClick={() => props.setModal(true)}>Confirm</Button>
      </div>
    </div>
  );
};

export default BookingMyInfoComp;
