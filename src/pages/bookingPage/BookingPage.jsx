import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { location } from "../../assets";
import {
  BookingConfirmComp,
  BookingDateComp,
  BookingMyInfoComp,
  BookingServiceComp,
  BookingStaffComp,
  BookingStartComp,
  Footer,
  NavBar,
  TopBar,
} from "../../components";
import "./bookingPage.css";
import AfterConfirmModal from "../../components/afterConfirmModal/afterConfirmModal";

export default function BookingPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerItems, setHeaderItems] = useState([
    {
      id: 1,
      title: "Start",
      active: true,
    },
    {
      id: 2,
      title: "Service",
      active: false,
    },
    {
      id: 3,
      title: "Staff",
      active: false,
    },
    {
      id: 4,
      title: "Date",
      active: false,
    },
    {
      id: 5,
      title: "My Info",
      active: false,
    },
    {
      id: 6,
      title: "Confirm",
      active: false,
    },
  ]);

  const updateValue = () => {
    const body = document.querySelector("#header");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
    if (currentIndex === 5) {
    } else {
      const arr = [...headerItems];
      arr[currentIndex + 1].active = !arr[currentIndex + 1].active;
      setCurrentIndex(currentIndex + 1);
      setHeaderItems(arr);
    }
  };

  const decreaseValue = () => {
    if (currentIndex === 0) {
    } else {
      const arr = [...headerItems];
      arr[currentIndex].active = !arr[currentIndex].active;
      setCurrentIndex(currentIndex - 1);
      setHeaderItems(arr);
    }
  };

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      {modal && <AfterConfirmModal modal={modal} setModal={setModal} />}
      <div className="nova-dashboard-container">
        <div className="nova-booking-banner_view">
          <div className="nova-booking-banner_image_view">
            <h1>Booking</h1>
            <div>
              <img src={location} />
              <h2>Washington DC</h2>
            </div>
          </div>
        </div>
        <div id="header" className="nova-booking-detail_top_view">
          <div className="nova-booking-detail_header_top_view">
            {headerItems.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: item.active ? "#EE509C" : "transparent",
                    borderTopRightRadius: currentIndex + 1 === item.id ? 16 : 0,
                    borderBottomRightRadius:
                      currentIndex + 1 === item.id ? 16 : 0,
                    borderBottomLeftRadius: item.id === 1 ? 16 : 0,
                    borderTopLeftRadius: item.id === 1 ? 16 : 0,
                  }}
                  className="nova-booking-detail_header_view"
                >
                  <h3 style={{ color: item.active ? "#ffffff" : "#292929" }}>
                    {item.title}
                  </h3>
                  <h4 style={{ color: item.active ? "#ffffff" : "#292929" }}>
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
          {currentIndex === 0 ? (
            <BookingStartComp onClickNext={() => updateValue()} />
          ) : currentIndex === 1 ? (
            <BookingServiceComp
              onClickBack={() => decreaseValue()}
              onClickNext={() => updateValue()}
            />
          ) : currentIndex === 2 ? (
            <BookingStaffComp
              onClickBack={() => decreaseValue()}
              onClickNext={() => updateValue()}
            />
          ) : currentIndex === 3 ? (
            <BookingDateComp
              onClickBack={() => decreaseValue()}
              onClickNext={() => updateValue()}
            />
          ) : currentIndex === 4 ? (
            <BookingMyInfoComp
              setModal={setModal}
              // onClickNext={() => updateValue()}
            />
          ) : (
            <BookingConfirmComp onClickNext={() => navigate("/paymentpage")} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
