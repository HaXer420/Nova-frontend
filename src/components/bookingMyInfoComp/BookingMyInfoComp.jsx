import React, { useState } from "react";
import { back, next, roundTick, tick } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";
import "./bookingMyInfoComp.css";
import TextInput from "../textInput/TextInput";
import TextInputMyInfo from "../TextInputMyInfo/textInputMyInfo";

const BookingMyInfoComp = (props) => {
  const formik = useFormik({
    initialValues: {
      address: "",
      Comments: "",
    },

    onSubmit: (val) => {
      props.bioInfo(val.address, val.Comments);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="nova-booking-my_info_comp_top_view">
        <h1>Enter Your Information</h1>
        <div className="nova-booking-my_info_comp_inputs_top_view">
          <div className="nova-booking-my_info_comp_first_name_input_top_view">
            <TextInputMyInfo
              id={"address"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder={"Address"}
              title={"Address*"}
            />

            <div className="nova-booking-my_info_comp_address_input_view">
              <h5>Comments</h5>
              <div className="nova-booking-my_info_comp_input_view">
                <textarea
                  id="Comments"
                  type={"text"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Comments}
                  placeholder="Write here"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => props.setTerms(!props.terms)}
            className="nova-booking-my_info_comp_radia_button_view"
          >
            <div>{props.terms && <img src={tick} />}</div>
            <h4>
              By submitting this form, you agree to receive appointment
              notifications from NOVA threading & Waxing
            </h4>
          </div>
          <Button>Confirm</Button>
        </div>
      </div>
    </form>
  );
};

export default BookingMyInfoComp;
