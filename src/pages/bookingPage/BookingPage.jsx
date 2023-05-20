import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import moment from "moment";
import { useDispatch } from "react-redux";
import { myInfo } from "../../redux/userDataSlice";
import { GreenNotify, RedNotify } from "../../helper/utility";
import Loader from "../../components/loader/loader";

export default function BookingPage() {
  const navigate = useNavigate();
  const getLocation = useLocation();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [terms, setTerms] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log("store id", location.state.item);
  const currentTime = moment().unix() * 1000;
  const [headerItems, setHeaderItems] = useState([
    {
      id: 1,
      title: "Start",
      active: true,
    },
    // {
    //   id: 2,
    //   title: "Service",
    //   active: false,
    // },
    {
      id: 2,
      title: "Staff",
      active: false,
    },
    {
      id: 3,
      title: "Date",
      active: false,
    },
    {
      id: 4,
      title: "My Info",
      active: false,
    },
    {
      id: 5,
      title: "Confirm",
      active: false,
    },
  ]);
  const [appointmentItems, setAppointmentItems] = useState([
    {
      id: 1,
      title: "Face Threading ( BROWS SERVICE IS WALK-IN FIRST COME BASES )",
      active: false,
    },
    {
      id: 2,
      title: "Face Wax",
      active: false,
    },
    {
      id: 3,
      title: "Tint",
      active: false,
    },
    {
      id: 4,
      title: "Waxing",
      active: false,
    },
    {
      id: 5,
      title: "Sugaring",
      active: false,
    },
    {
      id: 6,
      title: "Mens Waxing",
      active: false,
    },
    {
      id: 7,
      title: "Mens Sugaring",
      active: false,
    },
    {
      id: 8,
      title: "Facial",
      active: false,
    },
    {
      id: 9,
      title: "Heena Tattoos",
      active: false,
    },
    {
      id: 10,
      title: "VAJACIAL",
      active: false,
    },
  ]);
  const [selectServices, setSelectServices] = useState({});
  const [selectedGender, setSelectedGender] = useState({
    id: 0,
    title: "Male",
    value: "male",
  });
  const [selectedDate, setSelectedDate] = useState(currentTime);
  const [morningTimeSlots, setMorningTimeSlots] = useState({ id: 0 });
  const [afternoonTimeSlots, setAfternoonTimeSlots] = useState({ id: 0 });
  const [eveningTimeSlots, setEveningTimeSlots] = useState({ id: 0 });
  const [selectTimeSlot, setSelectTimeSlot] = useState("");

  const addProduct = () => {
    navigate("/products");
    setModal(false);
  };
  const checkOut = () => {
    navigate("/checkout");
    setModal(false);
  };

  const bioInfo = (
    firstName,
    lastName,
    email,
    mobileNumber,
    address,
    Comments
  ) => {
    dispatch(
      myInfo({
        firstName: firstName,
        lastName: lastName,
        mobileno: mobileNumber,
        email: email,
        address: address,
        comment: Comments,
      })
    );
    let time = moment(selectedDate).format("YYYY-MM-DD");
    let concatStartTime =
      moment(time + " " + selectTimeSlot, "YYYY-MM-DD hh:mm a").unix() * 1000;
    console.log("time", concatStartTime);

    let serviceArr = Object.entries(selectServices).map(
      ([service, options]) => {
        return { service, options };
      }
    );
    let newArr = serviceArr.map((item, i) => {
      return {
        ...item,
        staff: selectedGender.value,
        starttime: concatStartTime + i * 30 * 60 * 60 * 1000,
        BookedTime: time,
        store: getLocation.state.item?._id,
      };
    });

    let body = {
      services: newArr,
    };

    let getRes = (res) => {
      if (res?.status == 201) {
        GreenNotify("Your selected Services is add to Cart");
        setModal(true);
      } else {
        RedNotify(res?.message);
      }
      console.log("res of create cart", res);
    };
    callApi(
      "POST",
      routes.createCart,
      body,
      setIsLoading,
      getRes,
      (error) => {}
    );

    console.log("services", newArr, selectServices.entries);
  };
  const updateSlot = (item, index) => {
    setSelectTimeSlot(item.time);
    if (item.type == "morning") {
      setMorningTimeSlots(item);
      setAfternoonTimeSlots({});
      setEveningTimeSlots({});
    } else if (item.type == "afternoon") {
      setAfternoonTimeSlots(item);
      setMorningTimeSlots({});
      setEveningTimeSlots({});
    } else {
      setAfternoonTimeSlots({});
      setMorningTimeSlots({});
      setEveningTimeSlots(item);
    }

    // const arr = [...array];
    // arr[index].selected = !arr[index].selected;
    // array === morningTimeSlots
    //   ? setMorningTimeSlots(arr)
    //   : array === afternoonTimeSlots
    //   ? setAfternoonTimeSlots(arr)
    //   : setEveningTimeSlots(arr);
  };

  const getallServices = () => {
    let getRes = (res) => {
      //console.log("get all services", JSON.stringify(res?.data?.data));
      setAppointmentItems(res?.data?.data);
    };
    callApi(
      "GET",
      routes.getallServices,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getallServices();
  }, []);

  const selectValue = (parentItem, childItem, mainIndex) => {
    const newObj = { ...selectServices };

    if (newObj[parentItem._id]?.find((x) => x._id == childItem._id)) {
      newObj[parentItem._id] = newObj[parentItem._id].filter((x) => {
        return x._id !== childItem._id;
      });
      if (!newObj[parentItem._id].length) delete newObj[parentItem._id];
    } else {
      if (newObj[parentItem._id]) newObj[parentItem._id].push(childItem);
      else newObj[parentItem._id] = [childItem];
    }
    setSelectServices(newObj);
  };

  const updateValue = () => {
    if (Object.keys(selectServices).length == 0)
      return RedNotify("You have not select service");
    if (currentIndex == 2 && selectTimeSlot == "") {
      return RedNotify("You have not select time slot");
    }
    console.log("current index", currentIndex);
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
      <Loader loading={isloading} />
      {modal && (
        <AfterConfirmModal
          modal={modal}
          addProduct={addProduct}
          checkOut={checkOut}
          setModal={setModal}
        />
      )}
      <div className="nova-dashboard-container">
        <div className="nova-booking-banner_view">
          <div className="nova-booking-banner_image_view">
            <h1>{getLocation.state.item?.name}</h1>
            <div>
              <img src={location} />
              <h2>{getLocation.state.item?.location?.address}</h2>
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
            <BookingStartComp
              appointmentItems={appointmentItems}
              selectValue={selectValue}
              onClickNext={() => updateValue()}
              selectServices={selectServices}
            />
          ) : //  : currentIndex === 1 ? (
          //   <BookingServiceComp
          //     onClickBack={() => decreaseValue()}
          //     onClickNext={() => updateValue()}
          //   />
          // )
          currentIndex === 1 ? (
            <BookingStaffComp
              onClickBack={() => decreaseValue()}
              onClickNext={() => updateValue()}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          ) : currentIndex === 2 ? (
            <BookingDateComp
              onClickBack={() => decreaseValue()}
              onClickNext={() => updateValue()}
              morningTimeSlots={morningTimeSlots}
              setMorningTimeSlots={setMorningTimeSlots}
              afternoonTimeSlots={afternoonTimeSlots}
              eveningTimeSlots={eveningTimeSlots}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              updateSlot={updateSlot}
            />
          ) : currentIndex === 3 ? (
            <BookingMyInfoComp
              setModal={setModal}
              terms={terms}
              setTerms={setTerms}
              bioInfo={bioInfo}
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
