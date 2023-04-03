import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../api/apiCaller";
import { setParam } from "../../api/params";
import routes from "../../api/routes";
import { sugaring, threadingSpecial, waxingCombo } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./specials.css";

export default function Specials() {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  const specialsArray = [
    {
      id: 1,
      title: "Waxing Combo",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: waxingCombo,
    },
    {
      id: 2,
      title: "Threading Specials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: threadingSpecial,
    },
    {
      id: 3,
      title: "Sugaring Deals",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$150",
      image: sugaring,
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
          <h1>Specials</h1>
          <div className="nova-services-top_view">
            {services
              ?.filter((item) => item?.special == true)
              ?.map((item) => {
                return (
                  <div
                    key={item.id}
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
                        {" "}
                        Read more
                      </span>
                    </h4>
                  </div>
                );
              })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
