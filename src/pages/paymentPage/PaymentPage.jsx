import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { back, next, roundTick } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  CongratesModel,
  Footer,
  NavBar,
  TextInput,
  TopBar,
} from "../../components";
import "./paymentPage.css";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { useDispatch, useSelector } from "react-redux";
import { GreenNotify, RedNotify } from "../../helper/utility";
import { productInCart } from "../../redux/userDataSlice";
import Loader from "../../components/loader/loader";
export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((data) => data.userDataSlice);
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [selected, setSelected] = useState({ id: 4 });
  const [expvalue, setExpValue] = useState("");
  const paymentMethodArray = [
    // {
    //   id: 1,
    //   title: "Paypal",
    // },
    // {
    //   id: 2,
    //   title: "Venmo",
    // },
    // {
    //   id: 3,
    //   title: "CashApp",
    // },
    {
      id: 4,
      title: "Debit Card",
    },
    {
      id: 5,
      title: "Credit Card",
    },
    // {
    //   id: 6,
    //   title: "Zelle",
    // },
    // {
    //   id: 7,
    //   title: "Pay at Store",
    // },
  ];

  // console.log(
  //   "redeempoints",

  //   location?.state?.redeempoints
  // );

  const confirmToPay = (firstName, lastName, cvc, cardNumber, expryDate) => {
    if (expvalue == "") return RedNotify("Enter expiry date");
    console.log("jjsd", firstName, lastName, cardNumber, cvc, expryDate);
    // setShowModel(true);
    let body = {
      store: "6468aef24b84762f11bdc623",
      products: location?.state?.productArr,
      services: location?.state?.services,
      client: {
        firstname: userData?.userData?.firstname,
        lastname: userData?.userData?.lastname,
        mobileno: userData?.userData?.number,
        email: userData?.userData?.email,
        address: userData?.myInfo?.address ? userData?.myInfo?.address : "",
        comment: userData?.myInfo?.comment ? userData?.myInfo?.comment : "",
      },
      tip: location?.state?.tip,
      subtotal: location?.state?.subtotal,
      discount: location?.state?.discount,
      redeempoints: location?.state?.redeempoints,
      amount: location?.state?.amount,
      cardnumber: cardNumber,
      expmonth: `${parseInt(expvalue.split("/")[0])}`,
      expyear: `${parseInt(expvalue.split("/")[1])}`,
      // expmonth: 11,
      // expyear: 2024,
      cvc: cvc,
    };
    console.log("body", body);
    let getRes = (res) => {
      if (res?.status == 201) {
        dispatch(productInCart(0));
        GreenNotify("Your Booking is created successfully");
        setShowModel(true);
      } else {
        RedNotify(res?.message);
      }
      console.log("get res of booking", res);
    };
    callApi("POST", routes.booking, body, setIsLoading, getRes, (error) => {
      console.log("eror", error);
      RedNotify(error);
    });
  };

  const onchangeVale = (ev) => {
    const erasing =
      expvalue.split("/").join("").length >
      ev.target.value.split("/").join("").length;
    if (ev.target.value.length > 7) return;
    setExpValue(
      ev.target.value
        ?.split("/")
        ?.join("")
        ?.split("")
        ?.map((x, i) => {
          if (erasing && ev.target.value.length == 5) return `${x}`;
          if (i !== 2) return `${x}`;
          return `/${x}`;
        })
        ?.join("")
    );
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      cardNumber: "",
      cvc: "",
      expryDate: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("First name is required."),
      cvc: Yup.string()
        .max(3, "Must be long 3 characters or less")
        .required("CVC is required."),
      // expryDate: Yup.string().required("Expiry date is required."),

      cardNumber: Yup.number()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid mobile number')
        .required("Card number is required.")
        .positive()
        .integer()
        .max(9999999999999999, "Card Number limit is 16")
        .typeError("Card number must be a number."),
    }),
    onSubmit: (val) => {
      confirmToPay(
        val.firstname,
        val.lastname,
        val.cvc,
        val.cardNumber,
        val.expryDate
      );
    },
  });
  return (
    console.log(
      "date",
      typeof parseInt(expvalue.split("/")[0]),
      expvalue.split("/")[1]
    ),
    (
      <form onSubmit={formik.handleSubmit}>
        <div className="nova-dashboard-main_container">
          <TopBar />
          <NavBar />
          <Loader loading={isloading} />
          {showModel && (
            <CongratesModel
              redeempoints={location?.state?.amount}
              onClick={() => navigate("/", { replace: true })}
            />
          )}
          <div className="nova-dashboard-container">
            <div className="nova-payment-main_container">
              <h1>Choose Payment Method</h1>
              <div className="nova-payment_container">
                <div className="nova-payment_payment_methods_view">
                  <h2>Select Payment Method</h2>
                  {paymentMethodArray.map((item) => {
                    return (
                      <div
                        onClick={() => setSelected(item)}
                        className="nova-payment_payment_single_method_view"
                      >
                        {item.id === selected.id ? (
                          <img src={roundTick} />
                        ) : (
                          <div />
                        )}
                        <h5>{item.title}</h5>
                      </div>
                    );
                  })}
                </div>
                <div className="nova-payment_inputs_top_view">
                  <div className="nova-payment_inputs_divider_view">
                    <div className="nova-payment_inputs_divider_one" />
                    <div className="nova-payment_inputs_divider_arrow_view">
                      <img src={next} />
                    </div>
                    <div className="nova-payment_inputs_divider_two" />
                  </div>
                  <div className="nova-payment_inputs_view">
                    <TextInput
                      id="firstname"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                      error={
                        formik.touched.firstname && formik.errors.firstname
                          ? formik.errors.firstname
                          : null
                      }
                      style={{ borderColor: "#EE509C" }}
                      placeholder={"First Name"}
                      title={"First Name"}
                    />
                    <TextInput
                      id="lastname"
                      type={"text"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                      style={{ borderColor: "#EE509C" }}
                      placeholder={"Last Name"}
                      title={"Last Name"}
                    />
                    <TextInput
                      id="cardNumber"
                      type={"number"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardNumber}
                      style={{ borderColor: "#EE509C" }}
                      placeholder={"----- ---- ---- ----"}
                      title={"Card Number"}
                      error={
                        formik.touched.cardNumber && formik.errors.cardNumber
                          ? formik.errors.cardNumber
                          : null
                      }
                    />
                    <div className="nova-payment_small_inputs_top_view">
                      <div className="nova-payment_small_inputs_view">
                        <TextInput
                          style={{ borderColor: "#EE509C" }}
                          placeholder={"mm/yy"}
                          title={"Exp. Date"}
                          value={expvalue}
                          onChange={(e) => onchangeVale(e)}
                        />
                      </div>
                      <div className="nova-payment_small_inputs_view">
                        <TextInput
                          id="cvc"
                          type={"number"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cvc}
                          style={{ borderColor: "#EE509C" }}
                          placeholder={"xyz"}
                          title={"CVC"}
                          error={
                            formik.touched.cvc && formik.errors.cvc
                              ? formik.errors.cvc
                              : null
                          }
                        />
                      </div>
                    </div>
                    <Button>Pay Now</Button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </form>
    )
  );
}
