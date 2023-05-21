import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { camIcon, profileBackground, profileImage } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import CancelServiceModal from "../../components/cancelServiceModal/cancelServiceModal";
import Myprofile from "../../components/myProfile/myprofile";
import MyReward from "../../components/myReward/myReward";
import MyServices from "../../components/myServices/myServices";
import PaymentInfo from "../../components/paymentInfo/paymentInfo";
import "./Profile.css";
import Loader from "../../components/loader/loader";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { Navigate } from "react-router-dom";
import { GreenNotify } from "../../helper/utility";

const btnArr = [
  {
    id: 1,
    text: "My Profile",
  },
  {
    id: 2,
    text: "Services",
  },
  {
    id: 3,
    text: "Rewards",
  },
  {
    id: 4,
    text: "Payment Info",
  },
];

const Profile = () => {
  const [isloading, setIsLoading] = useState(false);
  const modal = useSelector((data) => data.showModal.showModal);
  const [pastServices, setPastServices] = useState([]);
  const [cancelServices, setCancelServices] = useState([]);
  const [upcomingServices, setUpcomingServices] = useState([]);
  const [select, setSelected] = useState({
    id: 1,
    text: "My Profile",
  });
  const getMyServices = () => {
    let getRes = (res) => {
      console.log("res of my get Services", res);
      setPastServices(res?.mypastservices);
      setCancelServices(res?.myupcanceledservices);
      setUpcomingServices(res?.myupcomonigservices);
    };
    callApi(
      "GET",
      routes.myServices,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const cancelBooking = (id1, id2) => {
    let getRes = (res) => {
      console.log("res of my deleService", res);
      GreenNotify("You have successfully canceled service");
      Navigate("/");
    };
    callApi(
      "PATCH",
      `${routes.bookingRefund}/${id1}/${id2}`,
      null,
      setIsLoading,
      getRes,
      (error) => {
        console.log("error", error);
      }
    );
  };

  //console.log("userData", userData);

  useEffect(() => {
    getMyServices();
  }, []);
  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      {modal && <CancelServiceModal />}
      <div className="nova-dashboard-container">
        <div className="nova-profile-container">
          <div style={{ position: "relative" }}>
            <div className="nova-profile-back_ground-image">
              <img src={profileBackground} alt="background-image" />
            </div>
            <div className="nova-profile-update-profile-image">
              <img src={camIcon} alt="cam-icon" />
            </div>
            <div className="nova-profile-picture-main-container">
              <div className="nova-profile-picture-container">
                <div className="nova-profile-image-container">
                  <img src={profileImage} alt="profile-image" />
                </div>
                <div className="nova-profile-profile_name-container">
                  <h1>Profile Name</h1>
                  <p>Update our photo and personal details</p>
                </div>
              </div>
              {/* <div className="nova-profile-message-btn">
                <div className="nova-profile-message-count">
                  <p>3</p>
                </div>
                <p>Messages</p>
              </div> */}
            </div>
          </div>
          <div className="nova-profile-pink-main-container">
            <div className="nova-profile-pink-top-container">
              {btnArr.map((item) => (
                <div
                  style={{
                    backgroundColor:
                      item.text == select.text ? "#ee509c" : "#ffc9e3",
                  }}
                  onClick={() => setSelected(item)}
                  className="nova-profile-pink-box-btn"
                >
                  <p
                    style={{
                      color: item.text == select.text ? "#fff" : "#292929",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            {select.id == 1 ? (
              <Myprofile setIsLoading={setIsLoading} />
            ) : select.id == 2 ? (
              <MyServices
                pastServices={pastServices}
                cancelServices={cancelServices}
                upcomingServices={upcomingServices}
                setIsLoading={setIsLoading}
                cancelBooking={cancelBooking}
              />
            ) : select.id == 3 ? (
              <MyReward />
            ) : (
              <PaymentInfo />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
