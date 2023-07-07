import React, { useState, useEffect } from "react";
import "./checkout.css";
import { Button, Footer, NavBar, TopBar } from "../../components";
import {
  addIcon,
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
import { useSelector, useDispatch } from "react-redux";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import Loader from "../../components/loader/loader";
import { RedNotify } from "../../helper/utility";

const Checkout = () => {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  const [serviceAmount, setServiceAmount] = useState(0);
  const productsStore = useSelector((data) => data.userDataSlice.products);
  const serviceStore = useSelector((data) => data.userDataSlice.services);
  const [selectRedeemPoint, setSelectRedeemPoint] = useState(false);
  const [services, setServices] = useState([]);
  const [customTip, setCustomTip] = useState("");
  const [customRedeem, setCustomRedeem] = useState("");
  const [amount, setAmount] = useState(0);
  const [availableAward, setAvailableAward] = useState(0);
  const [fixedAvailableAward, setFixedAvailableAward] = useState(0);
  const [productArr, setProductArr] = useState([]);
  const [tipArr, setTipArr] = useState([
    {
      id: 1,
      value: 10,
      label: "10%",
      per: true,
    },
    {
      id: 2,
      value: 15,
      label: "15%",
      per: true,
    },
    {
      id: 3,
      value: 20,
      label: "20%",
      per: true,
    },
    {
      id: 4,
      value: 25,
      label: "25%",
      per: true,
    },
    {
      id: 5,
      value: 30,
      label: "30%",
      per: true,
    },
  ]);

  const [tipSelect, setTipSelect] = useState({
    id: 1,
    value: 10,
    label: "10%",
    per: true,
  });

  let productTotalPrice = productsStore
    ?.map((ob) => ob.price)
    ?.reduce((a, b) => a + b, 0);
  let servicesTotalPrice = serviceStore
    ?.map((obj) => obj.amount)
    ?.reduce((a, b) => a + b, 0);

  let totalPrice = productTotalPrice + servicesTotalPrice;

  const customAddRedeem = () => {
    if (customRedeem > fixedAvailableAward)
      return RedNotify("Select value under your available redeem points");
    setCustomRedeem("");
    setAvailableAward(customRedeem);
  };

  const customTipAdd = () => {
    if (customTip == "") return RedNotify("Enter custom tip");
    let arr = [
      ...tipArr,
      {
        id: tipArr.length + 1,
        value: customTip,
        label: `$${customTip}`,
        per: false,
      },
    ];
    setTipArr(arr);
    setCustomTip("");
  };

  // const getMyCart = () => {
  //   let getRes = (res) => {
  //     // console.log("res of my cart", res);
  //     setProductArr(
  //       res?.data?.mycart?.products?.map((item) => {
  //         return { ...item, select: true };
  //       })
  //     );
  //     setProductAmount(res?.data?.mycart?.productsamount);
  //     setServiceAmount(res?.data?.mycart?.servicesamount);
  //     setAmount(
  //       res?.data?.mycart?.productsamount + res?.data?.mycart?.servicesamount
  //     );
  //     setServices(
  //       res?.data?.mycart?.services?.map((item) => {
  //         return { ...item, select: true };
  //       })
  //     );
  //   };
  //   callApi("GET", routes.myCart, null, setIsLoading, getRes, (error) => {});
  // };

  const getMyRewards = () => {
    let getRes = (res) => {
      setAvailableAward(res?.credits?.availablecredit);
      setFixedAvailableAward(res?.credits?.availablecredit);
      console.log("res of reward", res);
    };
    callApi("GET", routes.myRewards, null, setIsLoading, getRes, (error) => {});
  };

  let tip = tipSelect.per
    ? servicesTotalPrice * (tipSelect.value / 100)
    : parseInt(tipSelect.value);
  let serviceTax =
    selectRedeemPoint && servicesTotalPrice != 0
      ? (servicesTotalPrice - availableAward) * 0.1
      : servicesTotalPrice * 0.1;
  let productTax =
    selectRedeemPoint && productTotalPrice != 0
      ? (productTotalPrice - availableAward) * 0.1
      : productTotalPrice * 0.1;
  let discount = 10;
  let myAwards = (servicesTotalPrice + productTotalPrice) * 0.05;
  // console.log("serviceTax", serviceTax.toFixed(2));
  let totalServiceAmount = servicesTotalPrice + serviceTax + tip;
  let totalProductsAmount = productTotalPrice + productTax;

  let finalAmount = selectRedeemPoint
    ? totalProductsAmount + totalServiceAmount - availableAward
    : totalProductsAmount + totalServiceAmount;

  const confirmPay = () => {
    navigate("/paymentpage", {
      state: {
        productArr: productsStore,
        services: serviceStore,
        tip: tip,
        subtotal: totalPrice,
        discount: myAwards,
        redeempoints: selectRedeemPoint ? availableAward * 20 : 0,
        amount: finalAmount,
      },
    });
  };

  useEffect(() => {
    getMyRewards();
    // getMyCart();
  }, []);

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
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
            {serviceStore.length !== 0 ? (
              serviceStore?.map((item, index) => {
                return <ServiceInCart item={item} index={index} />;
              })
            ) : (
              <div className="empty-data-message">
                <h2 style={{ marginTop: 0 }}>No Service is selected </h2>
              </div>
            )}
            <div className="nova-checkout-pink-heading">
              <p>Product Information</p>
            </div>
            {productsStore.length !== 0 ? (
              productsStore?.map((item, index) => <ProductInCart item={item} />)
            ) : (
              <div className="empty-data-message">
                <h2 style={{ marginTop: 0 }}>No Product is selected </h2>
              </div>
            )}
            <div className="nova-booking-confirm_comp_tip_top_view">
              <div>
                <h2>Sub Total</h2>
                <h4>You can pay for one or multiple services at a time.</h4>
              </div>
              <h3>${totalPrice}</h3>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />

            {serviceStore.length != 0 && (
              <>
                <div className="nova-booking-confirm_comp_tip_top_view">
                  <h2>
                    Tip{" "}
                    <span style={{ fontSize: "1.6rem" }}>(For Service)</span>{" "}
                  </h2>

                  <div className="nova-booking-confirm-drop-down-container">
                    <div className="nova-booking-add-custom-tip-container">
                      <input
                        value={customTip}
                        onChange={(e) => setCustomTip(e.target.value)}
                        placeholder="Custom tip"
                        type="number"
                      />
                      <img
                        onClick={customTipAdd}
                        src={addIcon}
                        alt="add-icon"
                      />
                    </div>

                    <TipDropDown
                      options={tipArr}
                      selected={tipSelect}
                      setSelected={setTipSelect}
                    />
                  </div>
                </div>
                <div className="nova-booking-confirm_comp_service_detail_divider" />
              </>
            )}

            {serviceStore.length !== 0 && (
              <>
                <div className="nova-booking-confirm_comp_tip_top_view">
                  <h2>Service Tax</h2>
                  <h3>{`10% ($${serviceTax.toFixed(2)})`}</h3>
                </div>
                <div className="nova-booking-confirm_comp_service_detail_divider" />
              </>
            )}
            {productsStore.length !== 0 && (
              <>
                <div className="nova-booking-confirm_comp_tip_top_view">
                  <h2>Product Tax</h2>
                  <h3>{`10% ($${productTax.toFixed(2)})`} </h3>
                </div>
                <div className="nova-booking-confirm_comp_service_detail_divider" />
              </>
            )}
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>
                Redeem Points{" "}
                <span style={{ fontSize: "1.6rem" }}>
                  (${fixedAvailableAward})
                </span>{" "}
              </h2>
              <div className="nova-booking-confirm_comp_service_price_view">
                <div
                  style={{ marginRight: "2rem" }}
                  className="nova-booking-add-custom-tip-container"
                >
                  <input
                    value={customRedeem}
                    onChange={(e) => setCustomRedeem(e.target.value)}
                    placeholder="Redeem "
                    type="number"
                    id="839"
                  />
                  <img onClick={customAddRedeem} src={addIcon} alt="add-icon" />
                </div>
                {selectRedeemPoint ? (
                  <img
                    onClick={() => setSelectRedeemPoint(!selectRedeemPoint)}
                    src={squareTick}
                  />
                ) : (
                  <img
                    onClick={() => setSelectRedeemPoint(!selectRedeemPoint)}
                    src={uncheck}
                  />
                )}
                <h5>${availableAward}</h5>
              </div>
            </div>
            <div className="nova-booking-confirm_comp_service_detail_divider" />
            <div className="nova-booking-confirm_comp_tip_top_view">
              <h2>Final</h2>
              <h3>${finalAmount}</h3>
            </div>
            <Button onClick={confirmPay}>Confirm</Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
