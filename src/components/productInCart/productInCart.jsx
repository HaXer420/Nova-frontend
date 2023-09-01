// import React from "react";
import "./productInCart.css";
import { productOne, removeIcon, squareTick, uncheck } from "../../assets";
import React, { useState } from "react";


const ProductInCart = ({
  onSelect,
  item,
  mainStyle,
  textWidth,
  qty,
  check,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle between full and shortened description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

   // The maximum length at which you want to truncate the description
   const maxDescriptionLength = 100;

   // Create a shortened version of the description
   const shortenedDescription = item?.product?.description?.slice(0, maxDescriptionLength);
  return (
    <>
      <div
        style={mainStyle}
        className="nova-booking-confirm_comp_service_top_view"
      >
        <div className="nova-cart-product-image">
          <img src={item?.product?.image} />
        </div>
        <div className="nova-booking-confirm_comp_service_detail_view">
          <div className="nova-cart-product-info-container">
            <div className="nova-cart-product-name-container">
              <p>{item?.product?.title}</p>
              {qty && (
                <p style={{ marginLeft: "2rem" }}>Qty: {item?.quantity}</p>
              )}
            </div>
            {/* <h3 style={textWidth}>
              {item?.product?.description}
            </h3> */}
            <h3 className="justify-text">
              {showFullDescription
                ? item?.product?.description
                : `${shortenedDescription} ${
                    item?.product?.description?.length > maxDescriptionLength ? "..." : ""
                  }`}
              {item?.product?.description?.length > maxDescriptionLength && (
                <span
                  style={{
                    color: "#F088B8",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                  onClick={toggleDescription}
                >
                  {showFullDescription ? " Read Less" : " Read More"}
                </span>
              )}
            </h3>
          </div>
          <div className="nova-product_in-cart-main-container">
            <div className="nova-booking-confirm_comp_service_price_view">
              {check && (
                <div>
                  {item.select !== true && check ? (
                    <img onClick={onSelect} src={removeIcon} alt="uncheck" />
                  ) : (
                    <img
                      onClick={onSelect}
                      style={{ cursor: "pointer" }}
                      src={removeIcon}
                    />
                  )}
                </div>
              )}

              <h5>${item?.price}</h5>
            </div>
            {/* <div className="nova-product_in_cart-per-container">
              <p>50%OFF</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
    </>
  );
};

export default ProductInCart;
