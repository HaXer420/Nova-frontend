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
  const [footer, setFooter] = useState([]);

  ///////////
  const [services, setServices] = useState([]);

  const getService = () => {
    let getRes = (res) => {
      console.log("res of get response", res);
      setServices(res?.data?.data);
      // setShowModal(false);
    };

    callApi("GET", routes.getSchedule, null, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });
  };

  const weekSchedule = services.filter((item) => item.scheduleType === "week");
  const daySchedule = services.filter((item) => item.scheduleType === "day");

  // console.log("weekSchedule", weekSchedule);
  ////////////////

  const getFooter = () => {
    let getRes = (res) => {
      console.log("res of get response", res);
      setFooter(res?.data?.data);
      // setShowModal(false);
    };

    callApi(
      "GET",
      routes.getFooterDetail,
      null,
      setIsLoading,
      getRes,
      (error) => {
        console.log("error", error);
      }
    );
  };
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
    getService();
    getFooter();
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
                  {weekSchedule.length > 0 && (
                    <span>
                      {weekSchedule[1].startDay}-{weekSchedule[1].endDay}
                    </span>
                  )}
                </span>
              )}
            </p>
            <h1>
              {services.length > 0 && (
                <span>
                  {weekSchedule.length > 0 && (
                    <span>
                      {weekSchedule[1].startTime}-{weekSchedule[1].endTime}
                    </span>
                  )}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="clock-view">
          <img src={clock1} alt="" />
          <div className="clock-view-container">
            <p>
              {services.length > 0 && (
                <span>
                {console.log('services',services)}

                  {weekSchedule.length > 0 && (
                    <span>
                      {weekSchedule[0].startDay}-{weekSchedule[0].endDay}
                    </span>
                  )}
                </span>
              )}
            </p>
            <h1>
              {services.length > 0 && (
                <span>
                  {weekSchedule.length > 0 && (
                    <span>
                      {weekSchedule[0].startTime}-{weekSchedule[0].endTime}
                    </span>
                  )}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div style={{ marginLeft: "4rem" }} className="clock-view">
          <img src={clock1} alt="" />
          <div className="clock-view-container">
            <p>
              {services.length > 0 && (
                <span>
                  {daySchedule.length > 0 && (
                    <span>
                      {daySchedule[0].startDay}
                      {/* {daySchedule[0].startDay}-{daySchedule[0].endDay} */}
                    </span>
                  )}
                </span>
              )}
            </p>
            {/* <h1>
            {services.length > 0 && (
              <span>
                {services[1].startTime}-{services[1].endTime}
              </span>
            )}
            </h1> */}
            <h1>
              {services.length > 0 && (
                <span>
                  {daySchedule.length > 0 && (
                    <span>
                      {daySchedule[0].startTime}-{daySchedule[0].endTime}
                    </span>
                  )}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div style={{ marginLeft: "4rem" }} className="clock-view">
          <img src={phone1} alt="" />
          <div className="clock-view-container">
            <p>Call Now</p>
            <h2>
              {footer.map((item, index) => (
                <span key={index}>{item.contact}</span>
              ))}
            </h2>
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
        <div
          className="nova-top_bar-gallery_button"
          onClick={() => navigate("/gallery")}
          style={{ marginLeft: "4rem" }}
        >
          <img src={gallery} alt="" />
          <h1>Gallery</h1>
        </div>
      </div>
      {/* <div className="nova-top_bar-divider" /> */}
    </div>
  );
};

export default TopBar;
