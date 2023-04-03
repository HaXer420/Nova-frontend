import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../api/apiCaller";
import { setParam } from "../../api/params";
import routes from "../../api/routes";
import {
  dummyService,
  facial,
  sugaring,
  tattos,
  threading,
  tinting,
  waxing,
} from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./services.css";

export default function Services() {
  const [isloading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState({
    id: 1,
    title: "Female",
  });
  const servicesArray = [
    {
      id: 1,
      title: "Waxing",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: waxing,
    },
    {
      id: 2,
      title: "Threading",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: threading,
    },
    {
      id: 3,
      title: "Sugaring",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: sugaring,
    },
    {
      id: 4,
      title: "Facials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: facial,
    },
    {
      id: 5,
      title: "Vajacials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: dummyService,
    },
    {
      id: 6,
      title: "Tinting",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: tinting,
    },
    {
      id: 7,
      title: "Henna Tattos",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: tattos,
    },
  ];
  const genderArray = [
    {
      id: 1,
      title: "Female",
    },
    {
      id: 2,
      title: "Male",
    },
  ];
  const getServices = () => {
    let getRes = (res) => {
      setServices(res?.data?.data);
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
    getServices();
  }, []);

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Services</h1>
          <div className="nova-services-gender_view">
            {genderArray.map((item) => {
              return (
                <div
                  onClick={() => setSelectedGender(item)}
                  key={item.id}
                  className="nova-services-single_gender_view"
                >
                  <h2
                    style={{
                      color:
                        item.id === selectedGender.id ? "#171D1C" : "#8a8e8d",
                    }}
                  >
                    {item.title}
                  </h2>
                  <div
                    className="nova-services-single_gender_divider"
                    style={{
                      borderColor:
                        item.id === selectedGender.id
                          ? "#EE509C"
                          : "transparent",
                    }}
                  />
                </div>
              );
            })}
          </div>
          {selectedGender.title === "Female" ? (
            <div className="nova-services-top_view">
              {services
                ?.filter((item) => item?.type == "female")
                ?.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="nova-services-single_service_view"
                      onClick={() =>
                        navigate(
                          `/Sservicedetail?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                    >
                      <img alt="" src={item?.photos[1]} />
                      <div className="nova-services-single_service_title_view">
                        <h2>{item?.title}</h2>
                      </div>
                      <h4>
                        {item?.description[0]?.title}
                        <span style={{ color: "#EE509C", fontWeight: "bold" }}>
                          Read more
                        </span>
                      </h4>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="nova-services-top_view">
              {services
                ?.filter((item) => item?.type == "male")
                ?.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="nova-services-single_service_view"
                      onClick={() =>
                        navigate(
                          `/Sservicedetail?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                    >
                      <img alt="" src={item?.photos[1]} />
                      <div className="nova-services-single_service_title_view">
                        <h2>{item.title}</h2>
                      </div>
                      <h4>
                        {item?.description[0]?.title}
                        <span style={{ color: "#EE509C", fontWeight: "bold" }}>
                          Read more
                        </span>
                      </h4>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
