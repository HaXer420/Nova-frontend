import React from "react";
import "./afterConfirmModal.css";
import { useNavigate } from "react-router-dom";
import { boxSearch } from "../../assets";
import Button from "../button/Button";

const AfterConfirmModal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/products");
    setModal(false);
  };
  const checkOut = () => {
    navigate("/checkout");
    setModal(false);
  };
  return (
    <div className="nova-after-confirm-modal-mainContainer">
      <div className="nova-after-confirm-modal-container">
        <img src={boxSearch} alt="box-icon" />
        <p>Want to add Products</p>
        <div className="nova-after-proceed-to-check-out-container">
          <h5 onClick={checkOut}>Proceed to CheckOut</h5>
          <Button onClick={addProduct}>Add Products</Button>
        </div>
      </div>
    </div>
  );
};

export default AfterConfirmModal;
