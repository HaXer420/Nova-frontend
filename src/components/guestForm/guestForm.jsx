import React, { useState } from "react";
import "./guestForm.css";
import Modal from "@mui/material/Modal";
import TextInputMyInfo from "../TextInputMyInfo/textInputMyInfo";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { myInfo } from "../../redux/userDataSlice";
import { useNavigate } from "react-router-dom";
import { RedNotify } from "../../helper/utility";

const GuestForm = ({ open, additionalData, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComments] = useState("");

  const storeInfo = () => {
    if (firstName == "") return RedNotify("Enter your first name");
    if (lastName == "") return RedNotify("Enter your Last name");
    if (mobileno == "") return RedNotify("Enter your Mobile Number");
    if (email == "") return RedNotify("Enter your Email");
    dispatch(
      myInfo({
        firstName: firstName,
        lastName: lastName,
        mobileno: mobileno,
        email: email,
        address: address,
        comment: comment,
      })
    );
    handleClose();
    navigate("/paymentpage", {
      state: additionalData.state
    });
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   style={{ backgroundColor: "red" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClose={handleClose}
    >
      <div className="guest-form-login">
        <h1>Fill Your Information before checkout</h1>
        <div className="nova-booking-my_info_comp_first_name_input_top_view">
          <TextInputMyInfo
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            title={"First Name"}
            id={"First Name g"}
            placeholder={"First Name"}
            type={"text"}
          />
          <TextInputMyInfo
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            title={"Last Name"}
            id={"Last Name g"}
            placeholder={"Last Name"}
            type={"text"}
          />
          <TextInputMyInfo
            value={mobileno}
            onChange={(e) => setMobileNo(e.target.value)}
            id={"mobileNumber"}
            title={"Mobile Number"}
            placeholder={"Mobile Number"}
            type={"number"}
          />
          <TextInputMyInfo
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={"emailg"}
            title={"Email"}
            placeholder={"Email"}
            type={"text"}
          />
          <TextInputMyInfo
            id={"addressg"}
            placeholder={"Address"}
            title={"Address (Optional)"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type={"text"}
          />

          <div className="nova-booking-my_info_comp_address_input_view">
            <h5>Comments</h5>
            <div className="nova-booking-my_info_comp_input_view">
              <textarea
                id="Commentsg"
                value={comment}
                onChange={(e) => setComments(e.target.value)}
                type={"text"}
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
        <div className="center-btn">
          <Button onClick={() => storeInfo()}>Continue</Button>
        </div>
      </div>
    </Modal>
  );
};

export default GuestForm;
