import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="nova-button_top_view"
    >
      <div className="nova-button_border_view" />
      <div className="nova-button_main_view">
        <h3>{props.children}</h3>
      </div>
    </button>
  );
}
