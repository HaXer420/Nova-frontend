import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closIcon, crossIcon, crossIcon2 } from "../../assets";
import { showModalValue } from "../../redux/showModalSlice";
import "./cancelServiceModal.css";

const CancelServiceModal = () => {
  const [toggle, setToggle] = useState({ id: 2 });
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(showModalValue(false));
  };

  return (
    <div className="nova-my-profile-cancel-service-modal-main-container">
      <div className="nova-my-profile-cancel-service-modal-container">
        <div
          onClick={() => closeModal()}
          className="nova-my-profile-cancel-service-modal-main-clos-icon"
        >
          <img src={closIcon} alt="close-icon" />
        </div>
        <img src={crossIcon2} alt="cross-icon" />
        <p>Are you sure you want to cancel the request</p>
        <div className="nova-my-profile-cancel-service-select-option-container">
          <div
            onClick={() => {
              setToggle({ id: 1 });
            }}
            className="nova-my-profile-cancel-service-select-option"
          >
            <p
              style={{
                color: toggle.id == 1 ? "#EE509C" : "#A5A5A5",
                fontWeight: toggle.id == 1 ? "700" : "400",
              }}
            >
              Yes
            </p>
          </div>
          <div className="nova-my-profile-cancel-service-vertical-line"></div>
          <div>
            <div
              onClick={() => {
                setToggle({ id: 2 });
              }}
              className="nova-my-profile-cancel-service-select-option"
            >
              <p
                style={{
                  color: toggle.id == 2 ? "#EE509C" : "#A5A5A5",
                  fontWeight: toggle.id == 2 ? "700" : "400",
                }}
              >
                No
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelServiceModal;
