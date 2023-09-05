import React, { useState, useEffect } from "react";
import "./topBar.css";
import { clock1, gallery, logoTheme, mainLogo, phone1 } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginState } from "../../redux/loginSlice";
import {
  accessToken,
  cartProducts,
  cartServices,
  myInfo,
  productInCart,
  refreshToken,
  storId,
  userData,
} from "../../redux/userDataSlice";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify, RedNotify } from "../../helper/utility";
import Loader from "../loader/loader";

const TopBar = () => {
  const showlogOut = useSelector((data) => data.userDataSlice.userData);
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


    ///////////
    const [services, setServices] = useState([]);


    const getService = () => {
      let getRes = (res) => {
        console.log("res of get response", res);
        setServices(res?.data?.data);
        // setShowModal(false);
      };
  
      callApi(
        "GET",
        routes.getSchedule,
        null,
        setIsLoading,
        getRes,
        (error) => {
          console.log("error", error);
        }
      );
    }
    ////////////////

  const logOut = () => {
    // localStorage.clear();
    let getRes = (res) => {
      if (res.status == 200) {
        GreenNotify(res?.message);
        dispatch(cartProducts([]));
        dispatch(cartServices([]));
        dispatch(userData(null));
        dispatch(accessToken(""));
        dispatch(refreshToken(""));
        dispatch(storId(""));
        dispatch(myInfo(null));
      } else {
        RedNotify(res?.message);
      }
    };

    let body = {
      device: {
        id: localStorage.getItem("deviceId"),
        deviceToken: "angg",
      },
    };

    callApi("POST", routes.logOut, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });
  };

  useEffect(() => {
    getService(); // Ensure this is being executed
  }, []);
  return (
    <div className="nova-top_bar-main_view">
      <Loader loading={isloading} />
      <div className="nova-top_bar-data_view">
        <div className="nova-top-bar-logo-view">
          <img src={mainLogo} />
        </div>

        <div className="clock-view">
          <img src={clock1} alt="" />
          <div className="clock-view-container">
          <p>
            {services.length > 0 && (
              <span>
                {services[1].startDay}-{services[1].endDay}
              </span>
            )}
          </p>
            <h1>{services.length > 0 && (
              <span>
                {services[1].startTime}-{services[1].endTime}
              </span>
            )}</h1>
          </div>
        </div>
        <div style={{ marginLeft: "4rem" }} className="clock-view">
          <img src={clock1} alt="" />
          <div className="clock-view-container">
          <p>
            {services.length > 0 && (
              <span>
                {services[0].startDay}
              </span>
            )}
          </p>
          <h1>{services.length > 0 && (
              <span>
                {services[0].startTime}-{services[0].endTime}
              </span>
            )}</h1>
          </div>
        </div>
        <div style={{ marginLeft: "4rem" }} className="clock-view">
          <img src={phone1} alt="" />
          <div className="clock-view-container">
            <p>Call Now</p>
            <h1>678-404-5580</h1>
          </div>
        </div>

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
              </div>
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
        <div className='nova-top_bar-gallery_button' onClick={() => navigate("/gallery")} style={{ marginLeft: "4rem"}}>
          <img src={gallery} alt=""/>
            <h1>Gallery</h1>
        </div>
      </div>
      {/* <div className="nova-top_bar-divider" /> */}
    </div>
  );
};

export default TopBar;
