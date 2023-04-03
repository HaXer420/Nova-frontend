import React from "react";
import { errorIcon } from "../../assets";
import "./textInputTwo.css";

const TextInputTwo = (props) => {
  return (
    <div className="nova-input_two_container">
      <p>{props.title}</p>
      <div className="nova-input_two_container_input">
        {props.textarea ? (
          <textarea
            id={props.id}
            disabled={props.disabled}
            style={props.inputStyle}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
          />
        ) : (
          <input
            pla
            id={props.id}
            disabled={props.disabled}
            style={props.inputStyle}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
          />
        )}
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

export default TextInputTwo;
