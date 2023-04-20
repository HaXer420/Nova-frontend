import React, { useState } from "react";
import "./checkout.css";
import { Button, Footer, NavBar, TopBar } from "../../components";
import {
  calenderTwo,
  clock,
  productOne,
  productTwo,
  squareTick,
  waxing,
} from "../../assets";
import ProductInCart from "../../components/productInCart/productInCart";
import TipDropDown from "../../components/tipDropDown/tipDropDown";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [serivceArray, setServiceArray] = useState([
    {
      id: 1,
      title: "Waxing  |  Full Body  |  20mins",
      date: "Mon, Jan, 17, 2023",
      time: "6:30 PM",
      price: "$25",
      select: true,
    },
    {
      id: 2,
      title: "Waxing  |  Legs  |  20mins",
      date: "Mon, Feb, 25, 2023",
      time: "6:30 PM",
      price: "$25",
      select: false,
    },
  ]);

  const [productArr, setProductArr] = useState([
    {
      image: productOne,
      title: "Wax",
      des: "Waxing is a method of hair removal that involves applying hot",
      price: "$25",
      select: false,
    },
    {
      image: productTwo,
      title: "Wax",
      des: "Waxing is a method of hair removal that involves applying hot",
      price: "$25",
      select: true,
    },
  ]);

  const tipArr = [
    {
      id: 1,
      value: "10%",
      label: "10%",
    },
    {
      id: 2,
      value: "20%",
      label: "20%",
    },
    {
      id: 3,
      value: "30%",
      label: "30%",
    },
  ];

  const [tipSelect, setTipSelect] = useState({
    id: 1,
    value: "10%",
    label: "10%",
  });

  const onSelect = (index) => {
    let arr = [...serivceArray];
    arr[index].select = !arr[index].select;
    setServiceArray(arr);
  };

  const selectProduct = (index) => {
    let arr = [...productArr];
    arr[index].select = !arr[index].select;
    setProductArr(arr);
  };

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-checkout-main-container">
          <div className="nova-checkout-main-heading">
            <p>Checkout</p>
          </div>
          <div className="nova-checkout-pink-main-container">
            <div className="nova-checkout-pink-heading">
              <p>Service Information</p>
            </div>
            {serivceArray.map((item, index) => {
              return (
                <>
                  <div className="nova-booking-confirm_comp_service_top_view">
                    <div className="nova-booking-confirm_comp_service_image_view">
                      <img src={waxing} />
                    </div>
                    <div className="nova-booking-confirm_comp_service_detail_view">
                      <div className="nova-booking-confirm_comp_service_title_view">
                        <h2>{item.title}</h2>
                        <div className="nova-booking-confirm_comp_service_date_view">
                          <img src={calenderTwo} />
                          <h3>{item.date}</h3>
                          <img src={clock} />
                          <h4>{item.time}</h4>
                        </div>
                      </div>
                      <div className="nova-booking-confirm_comp_service_price_view">
                        {item.select == false ? (
                          <div
                            onClick={() => onSelect(index)}
                            className="nova-uncheck"
                          ></div>
                        ) : (
                          <img
                            onClick={() => onSelect(index)}
                            style={{ cursor: "pointer" }}
                            src={squareTick}
                          />
                        )}
                        <h5>{item.price}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="nova-booking-confirm_comp_service_detail_divider" />
                </>
              );
            })}
            <div className="nova-checkout-pink-heading">
              <p>Product Information</p>
            </div>
            {productArr.map((item, index) => (
              <ProductInCart
                item={item}
                onSelect={() => selectProduct(index)}
              />
            ))}
            <div className="nova-booking-confirm_comp_tip_top_view">
              <div>
                <h2>Sub Total</h2>
                <h4>You can pay for one or multiple services at a time.</h4>
              </div>
              <h3>$42.5</h3>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>
                Tip <span style={{ fontSize: "1.6rem" }}>(For Service)</span>{" "}
              </h2>
              {/* <h3>10%</h3> */}
              <TipDropDown
                options={tipArr}
                selected={tipSelect}
                setSelected={setTipSelect}
              />
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />

            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>Service Tax</h2>
              <h3>10%($0.80) </h3>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>Product Tax</h2>
              <h3>10%($0.80) </h3>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>Redeem Points</h2>
              <div className="nova-booking-confirm_comp_service_price_view">
                <img src={squareTick} />
                <h5>{"$13.5"}</h5>
              </div>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>Final</h2>
              <h3>$28.00</h3>
            </div>
            <Button onClick={() => navigate("/paymentpage")}>Confirm</Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
