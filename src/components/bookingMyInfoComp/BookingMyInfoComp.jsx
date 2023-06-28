import React, { useState } from "react";
import { back, next, roundTick, tick } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";
import "./bookingMyInfoComp.css";
import TextInput from "../textInput/TextInput";
import TextInputMyInfo from "../TextInputMyInfo/textInputMyInfo";
import { RedNotify } from "../../helper/utility";
import { useSelector } from "react-redux";

const BookingMyInfoComp = (props) => {
  const userDataGet = useSelector((data) => data.userDataSlice.userData);
  const formik = useFormik({
    initialValues: {
      address: "",
      Comments: "",
    },

    onSubmit: (val) => {
      // if (val.address == "") return RedNotify("Address is not entered");
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
              title={"First Name"}
              disabled={true}
              id={"First Name"}
              value={userDataGet?.firstname}
            />
            <TextInputMyInfo
              title={"Last Name"}
              disabled={true}
              id={"Last Name"}
              value={userDataGet?.lastname}
            />
            <TextInputMyInfo
              id={"mobileNumber"}
              disabled={true}
              value={userDataGet?.number}
              title={"Mobile Number"}
            />
            <TextInputMyInfo
              disabled={true}
              id={"email"}
              value={userDataGet?.email}
              title={"Email"}
            />
            <TextInputMyInfo
              id={"address"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder={"Address"}
              title={"Address (Optional)"}
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
