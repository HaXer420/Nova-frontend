import React, { useState, useEffect } from "react";
import { masterLogo, payPalLogo, visaLogo } from "../../assets";
import "./paymenentInfo.css";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify } from "../../helper/utility";

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

const PaymentInfo = ({ setIsLoading }) => {
  // const [isloading, setIsLoading] = useState(false);
  const [apiUpdate, setApiUpdate] = useState(false);
  const [cards, setCards] = useState([]);

  const deleteCard = (id) => {
    setApiUpdate(false);
    let getRes = (res) => {
      console.log("res of my get Card", res);
      if (res.status == 200) {
        GreenNotify("Payment Card is deleted successfully");
      }
      setApiUpdate(true);
    };
    callApi(
      "DELETE",
      `${routes.deleteCard}/${id}`,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };
  const getMyCards = () => {
    let getRes = (res) => {
      setCards(res.mycards.data);
      console.log("res of my get Card", res);
    };
    callApi(
      "GET",
      routes.getMyCards,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getMyCards();
  }, [apiUpdate]);
  return (
    <div className="nova-payment-info-main-container">
      <div className="nova-payment-info-title">
        <h1>Payment Info:</h1>
      </div>
      <div className="nova-payment-info-card-details-main-container">
        {cards.length !== 0 ? (
          cards?.map((item) => (
            <div className="nova-payment-info-card-details-container">
              <div className="nova-payment-info-card-name-container">
                <h3>{item?.brand}</h3>
                <div
                  onClick={() => deleteCard(item?.id)}
                  className="nova-payment-info-card-name-edit-name"
                >
                  <p>Delete</p>
                </div>
              </div>
              <div className="nova-payment-info-card-card-type-container">
                {/* <img src={item.logo} alt="visa-logo" /> */}
                <p>**** {item?.last4}</p>
              </div>
              <div className="nova-payment-info-card-details-bottom-border"></div>
            </div>
          ))
        ) : (
          <div className="nova-payment-info-card-name-edit-name">
            <p>No card is Saved</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentInfo;
