import React from "react";
import { errorIcon } from "../../assets";

const TextInputMyInfo = (props) => {
  return (
    <div className="nova-booking-my_info_comp_first_name_input_view">
      <h5>{props.title}</h5>
      <div className="nova-booking-my_info_comp_input_view">
        <input
          disabled={props.disabled}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          type={props.type}
        />
      </div>
      {props.error && (
        <div className="nova-input-error-container">
          <img src={errorIcon} alt="error" />
          <h5>{props.error}</h5>
        </div>
      )}
    </div>
  );
};

export default TextInputMyInfo;
