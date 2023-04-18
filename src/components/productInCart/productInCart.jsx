import React from "react";
import "./productInCart.css";
import { productOne, squareTick } from "../../assets";

const ProductInCart = ({ onSelect, item, mainStyle, textWidth, qty }) => {
  return (
    <>
      <div
        style={mainStyle}
        className="nova-booking-confirm_comp_service_top_view"
      >
        <div className="nova-cart-product-image">
          <img src={item.image} />
        </div>
        <div className="nova-booking-confirm_comp_service_detail_view">
          <div className="nova-cart-product-info-container">
            <div className="nova-cart-product-name-container">
              <p>{item.title}</p>
              {qty && <p style={{ marginLeft: "2rem" }}>Qty: 3</p>}
            </div>
            <h3 style={textWidth}>
              {item?.des}
              <span style={{ color: "#EE509C" }}> Read More </span>
            </h3>
          </div>
          <div className="nova-product_in-cart-main-container">
            <div className="nova-booking-confirm_comp_service_price_view">
              {item.select !== true ? (
                <div onClick={onSelect} className="nova-uncheck"></div>
              ) : (
                <img
                  onClick={onSelect}
                  style={{ cursor: "pointer" }}
                  src={squareTick}
                />
              )}
              <h5>{"$25"}</h5>
            </div>
            <div className="nova-product_in_cart-per-container">
              <p>50%OFF</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
    </>
  );
};

export default ProductInCart;
