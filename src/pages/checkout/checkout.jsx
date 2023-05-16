import React, { useState, useEffect } from "react";
import "./checkout.css";
import { Button, Footer, NavBar, TopBar } from "../../components";
import {
  calenderTwo,
  clock,
  productOne,
  productTwo,
  squareTick,
  uncheck,
  waxing,
} from "../../assets";
import ProductInCart from "../../components/productInCart/productInCart";
import TipDropDown from "../../components/tipDropDown/tipDropDown";
import { useNavigate } from "react-router-dom";
import ServiceInCart from "../../components/serviceInCart/serviceInCart";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";

const Checkout = () => {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [services, setServices] = useState([]);

  const [productArr, setProductArr] = useState([]);

  const tipArr = [
    {
      id: 1,
      value: 10,
      label: "10%",
    },
    {
      id: 2,
      value: 20,
      label: "20%",
    },
    {
      id: 3,
      value: 20,
      label: "30%",
    },
  ];

  const [tipSelect, setTipSelect] = useState({
    id: 1,
    value: 10,
    label: "10%",
  });

  const selectService = (item, index) => {
    let arr = [...services];
    arr[index].select = !arr[index].select;
    setServices(arr);
    if (arr[index].select) {
      setAmount(amount + item?.amount);
    } else {
      setAmount(amount - item?.amount);
    }
  };

  const selectProduct = (item, index) => {
    let arr = [...productArr];
    arr[index].select = !arr[index].select;
    setProductArr(arr);
    if (arr[index].select) {
      setAmount(amount + item?.amount);
    } else {
      setAmount(amount - item?.amount);
    }
  };

  const getMyCart = () => {
    let getRes = (res) => {
      // console.log("res of my cart", res);
      setProductArr(
        res?.data?.mycart?.products?.map((item) => {
          return { ...item, select: true };
        })
      );
      setAmount(res?.data?.mycart?.amount);
      setServices(
        res?.data?.mycart?.services?.map((item) => {
          return { ...item, select: true };
        })
      );
    };
    callApi("GET", routes.myCart, null, setIsLoading, getRes, (error) => {});
  };

  useEffect(() => {
    getMyCart();
  }, []);

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
            {services?.map((item, index) => {
              return (
                <ServiceInCart
                  item={item}
                  index={index}
                  onSelect={() => selectService(item, index)}
                />
              );
            })}
            <div className="nova-checkout-pink-heading">
              <p>Product Information</p>
            </div>
            {productArr?.map((item, index) => (
              <ProductInCart
                item={item}
                onSelect={() => selectProduct(item, index)}
              />
            ))}
            <div className="nova-booking-confirm_comp_tip_top_view">
              <div>
                <h2>Sub Total</h2>
                <h4>You can pay for one or multiple services at a time.</h4>
              </div>
              <h3>${amount}</h3>
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
