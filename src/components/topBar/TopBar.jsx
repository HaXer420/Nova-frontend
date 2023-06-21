import React, { useState } from "react";
import "./topBar.css";
import { logoTheme } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginState } from "../../redux/loginSlice";
import { productInCart, storId, userData } from "../../redux/userDataSlice";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify, RedNotify } from "../../helper/utility";
import Loader from "../loader/loader";

const TopBar = () => {
  const showlogOut = useSelector((data) => data.userDataSlice.userData);
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    let getRes = (res) => {
      if (res.status == 200) {
        GreenNotify(res?.message);
        dispatch(userData(null));
        dispatch(productInCart(0));
        dispatch(storId(""));
      } else {
        RedNotify(res?.message);
      }
    };

    let body = {
      device: {
        id: localStorage.getItem("deviceId"),
        deviceToken: "xyz",
      },
    };

    callApi("POST", routes.logOut, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });
  };
  return (
    <div className="nova-top_bar-main_view">
      <Loader loading={isloading} />
      <div className="nova-top_bar-data_view">
        <img alt="" src={logoTheme} />
        <h2>Mon - Sat 10 Am to 8 Pm</h2>
        <div className="nova-top_bar-small_divider" />
        <h2>Sun 11 Am to 6 Pm</h2>
        <div className="nova-top_bar-small_divider" />
        <h2>+1 5654 4658 23</h2>
        <div className="nova-top_bar-buttons_view">
          {!showlogOut ? (
            <>
              <div
                onClick={() => navigate("/login")}
                className="nova-top_bar-login_button"
              >
                <h3>Login</h3>
              </div>
              <div
                onClick={() => navigate("/signup")}
                className="nova-top_bar-signup_button"
              >
                <h3>Sign Up</h3>
              </div>{" "}
            </>
          ) : (
            <div
              onClick={() => logOut()}
              className="nova-top_bar-signup_button"
            >
              <h3>Logout</h3>
            </div>
          )}
        </div>
      </div>
      <div className="nova-top_bar-divider" />
    </div>
  );
};

export default TopBar;
