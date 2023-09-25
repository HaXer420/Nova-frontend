import React from "react";
import "./serviceView.css";
import { useNavigate } from "react-router-dom";

const ServiceView = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  console.log('aaaaa',item);

  return (
    <div key={item?.id} className="nova-dashboard-single_service_view">
      <div onClick={props.onClick}>
        <img src={item?.photos[0]} />
        <div className="nova-dashboard-single_service_title_view">
          <h2>{item?.title}</h2>
          {/* <h2>{item?.price}</h2> */}
        </div>
        <h4>{item?.description[0]?.title}... Read More</h4>
      </div>

      <div onClick={() => navigate("/locationpage")}>
        <h3 style={{ paddingLeft: 10, cursor: "pointer" }}>Book Now</h3>
        <div className="nova-dashboard-single_service_border_view" />
      </div>
    </div>
  );
};

export default ServiceView;
