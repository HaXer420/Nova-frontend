import React from "react";
import "./afterConfirmModal.css";
import { useNavigate } from "react-router-dom";
import { boxSearch, cross } from "../../assets";
import Button from "../button/Button";

const AfterConfirmModal = ({ addProduct, checkOut }) => {
  const navigate = useNavigate();

  return (
    <div className="nova-after-confirm-modal-mainContainer">
      <div className="nova-after-confirm-modal-container">
        <div className="cross-button">
        <h1><img src={cross} onClick={() => navigate("/")} alt="cross" /></h1>
        </div>
        <img src={boxSearch} alt="box-icon" />
        <p>Want to add Products</p>
        <div className="nova-after-proceed-to-check-out-container">
          <div className="nova-after-proceed-to-check-out">
            <h5 onClick={checkOut}>Proceed to CheckOut</h5>
          </div>
          <Button onClick={addProduct}>Add Products</Button>
        </div>
      </div>
    </div>
  );
};

export default AfterConfirmModal;


