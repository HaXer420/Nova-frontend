import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./guestModal.css";
import TextInput from "../textInput/TextInput";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";

const GuestModal = ({ open, handleClose, login, asGuest }) => {
  const [email, setEmail] = useState("");
  const [isloading, setIsLoading] = useState(false);

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
      <div className="signIn-container">
        <div onClick={login} className="login-continue">
          <h3> Continue to Login</h3>
        </div>
        <p className="Or-style">Or</p>
        <div onClick={asGuest} className="login-continue">
          <h3> Continue with Guest</h3>
        </div>
      </div>
    </Modal>
  );
};

export default GuestModal;
