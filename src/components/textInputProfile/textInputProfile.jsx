import React from "react";
import "./textInputProfile.css";

const TextInputProfile = ({ type, title, id, onChange, onBlur, value }) => {
  return (
    <div className="nova-text_input-profile">
      <p>{title}</p>
      <div className="nova-text_input-container">
        <input
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
        />
      </div>
    </div>
  );
};

export default TextInputProfile;
