import React from "react";
import { masterLogo, payPalLogo, visaLogo } from "../../assets";
import "./paymenentInfo.css";

const cardDetail = [
  {
    id: 1,
    title: "Visa",
    logo: visaLogo,
  },
  {
    id: 2,
    title: "Master Card",
    logo: masterLogo,
  },
  {
    id: 3,
    title: "PayPal",
    logo: payPalLogo,
  },
];

const PaymentInfo = () => {
  return (
    <div className="nova-payment-info-main-container">
      <div className="nova-payment-info-title">
        <h1>Payment Info:</h1>
      </div>
      <div className="nova-payment-info-card-details-main-container">
        {cardDetail.map((item) => (
          <div className="nova-payment-info-card-details-container">
            <div className="nova-payment-info-card-name-container">
              <h3>{item.title}</h3>
              <div className="nova-payment-info-card-name-edit-name">
                <p>Edit</p>
              </div>
            </div>
            <div className="nova-payment-info-card-card-type-container">
              <img src={item.logo} alt="visa-logo" />
              <p>**** 4089</p>
            </div>
            <div className="nova-payment-info-card-details-bottom-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
