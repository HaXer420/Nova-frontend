import React from "react";
import "./serviceView.css";

const ServiceView = (props) => {
  const { item } = props;

  return (
    <div
      onClick={props.onClick}
      key={item?.id}
      className="nova-dashboard-single_service_view"
    >
      <img src={item?.photos[0]} />
      <div className="nova-dashboard-single_service_title_view">
        <h2>{item?.title}</h2>
        {/* <h3>{item?.price}</h3> */}
      </div>
      <h4>{item?.description[0]?.title}</h4>
      <h3 style={{ paddingLeft: 10, cursor: "pointer" }}>Book Now</h3>
      <div className="nova-dashboard-single_service_border_view" />
    </div>
  );
};

export default ServiceView;
