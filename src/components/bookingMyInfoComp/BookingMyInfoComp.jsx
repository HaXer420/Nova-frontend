import React, { useState } from "react";
import { back, next, roundTick, tick } from "../../assets";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";
import "./bookingMyInfoComp.css";
import TextInput from "../textInput/TextInput";
import TextInputMyInfo from "../TextInputMyInfo/textInputMyInfo";
import { RedNotify } from "../../helper/utility";
import { useSelector } from "react-redux";

const BookingMyInfoComp = (props) => {
  const userDataGet = useSelector((data) => data.userDataSlice.userData);
  const auth = useSelector((data) => data.userDataSlice.userData);
  console.log("user number", userDataGet?.number);
  const [firstName, setFirstName] = useState(
    auth ? userDataGet?.firstname : ""
  );
  const [lastName, setLastName] = useState(auth ? userDataGet?.lastname : "");
  const [mobileno, setMobileNo] = useState(auth ? userDataGet?.number : "");
  const [email, setEmail] = useState(auth ? userDataGet?.email : "");
  const [address, setAddress] = useState("");
  const [comment, setComments] = useState("");
  // console.log("userTemp", userDataGet.isTemp);

  const onSubmit = () => {
    if (firstName == "") return RedNotify("Enter your first name");
    if (lastName == "") return RedNotify("Enter your Last name");
    if (mobileno == "" || mobileno == undefined)
      return RedNotify("Enter your Mobile Number");
    if (email == "") return RedNotify("Enter your Email");
    // if (val.address == "") return RedNotify("Address is not entered");
    props.bioInfo(firstName, lastName, email, mobileno, address, comment);
  };
  return (
    <div className="nova-booking-my_info_comp_top_view">
      <h1>Enter Your Information</h1>
      <div className="nova-booking-my_info_comp_inputs_top_view">
        <div className="nova-booking-my_info_comp_first_name_input_top_view">
          <TextInputMyInfo
            title={"FirstName"}
            // disabled={auth ? true : false}
            id={"FirstName"}
            placeholder={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
          />
          <TextInputMyInfo
            title={"Last Name"}
            placeholder={"Last Name"}
            // disabled={auth ? true : false}
            id={"Last Nameb"}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
          />
          <TextInputMyInfo
            id={"mobileNumberb"}
            placeholder={"Mobile Number"}
            // disabled={auth ? true : false}
            onChange={(e) => setMobileNo(e.target.value)}
            value={mobileno}
            title={"Mobile Number"}
            type="number"
          />
          <TextInputMyInfo
            // disabled={auth ? true : false}
            id={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            title={"Email"}
            placeholder={"Email"}
          />
          <TextInputMyInfo
            id={"addressb"}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder={"Address"}
            title={"Address (Optional)"}
            type="text"
          />

          <div className="nova-booking-my_info_comp_address_input_view">
            <h5>Comments</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <textarea
                id="Comments"
                type={"text"}
                onChange={(e) => setComments(e.target.value)}
                value={comment}
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
        <Button onClick={onSubmit}>Confirm</Button>
      </div>
    </div>
  );
};

export default BookingMyInfoComp;
