import React from "react";
import { errorIcon, hide, show } from "../../assets";
import "./textInput.css";

const TextInput = (props) => {
  return (
    <div className="nova-input_container">
      <p>{props.title}</p>
      <div
        style={{ ...props.style, borderColor: props.error && "red" }}
        className="nova-input_container_input"
      >
        <input
          id={props.id}
          disabled={props.disabled}
          style={props.inputStyle}
          onKeyPress={props.onKeyPress}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
        />
        {props.eye && (
          <img onClick={props.onClickEye} src={props.eyeValue ? hide : show} />
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

export default TextInput;
