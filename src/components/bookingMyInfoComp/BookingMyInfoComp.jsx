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
      firstName: "",
      lastName: "",
      mobileNumber2: "",
      email: "",
      address: "",
      Comments: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("First name is required."),
      mobileNumber2: Yup.number()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid mobile number')
        .required("Mobile Number is required.")
        .positive()
        .integer()
        .max(9999999999, "Phone Number limit is 10")
        .typeError("Mobile Number must be a number."),
    }),
    onSubmit: (val) => {
      props.bioInfo(
        val.firstName,
        val.lastName,
        val.email,
        val.mobileNumber2,
        val.address,
        val.Comments
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="nova-booking-my_info_comp_top_view">
        <h1>Enter Your Information</h1>
        <div className="nova-booking-my_info_comp_inputs_top_view">
          <div className="nova-booking-my_info_comp_first_name_input_top_view">
            <TextInputMyInfo
              id="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null
              }
              placeholder={"First Name"}
              title={"First Name*"}
              type={"text"}
            />
            <TextInputMyInfo
              id="lastName"
              type={"text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder={"Last Name"}
              title={"Last Name"}
            />
            <TextInputMyInfo
              id="mobileNumber2"
              type={"number"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobileNumber2}
              placeholder={"+13334324343"}
              title={"Mobile*"}
              error={
                formik.touched.mobileNumber2 && formik.errors.mobileNumber2
                  ? formik.errors.mobileNumber2
                  : null
              }
            />

            <TextInputMyInfo
              id="email"
              type={"text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={"sample@gmail.com"}
              title={"Email"}
            />
            <TextInputMyInfo placeholder={"Address"} title={"Address*"} />

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
