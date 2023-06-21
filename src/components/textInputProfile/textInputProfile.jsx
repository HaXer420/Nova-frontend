import React from "react";
import "./textInputProfile.css";
import { errorIcon } from "../../assets";

const TextInputProfile = ({
  type,
  title,
  id,
  onChange,
  onBlur,
  value,
  disabled,
  error,
}) => {
  return (
    <div className="nova-text_input-profile">
      <p>{title}</p>
      <div className="nova-text_input-container">
        <input
          disabled={disabled}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
        />
        {error && (
          <div className="nova-input-error-container">
            <img src={errorIcon} alt="error" />
            <h5>{error}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInputProfile;
