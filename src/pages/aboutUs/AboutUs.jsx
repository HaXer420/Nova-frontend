import React, { useEffect, useState } from "react";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import {
  aboutDummyFour,
  aboutDummyOne,
  aboutDummyThree,
  aboutDummyTwo,
} from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./aboutUs.css";

export default function AboutUs() {
  const [isloading, setIsLoading] = useState(false);
  const [aboutUs, setAboutUs] = useState([]);
  const novaDiffArray = [
    {
      id: 1,
      title: "Overall Satisfaction",
      value: aboutUs[0]?.satisfaction,
    },
    {
      id: 2,
      title: "Quality",
      value: aboutUs[0]?.quality,
    },
    {
      id: 3,
      title: "Environment",
      value: aboutUs[0]?.environment,
    },
    {
      id: 4,
      title: "Repeat Customers",
      value: aboutUs[0]?.repeat_customers,
    },
  ];

  const getAboutUs = () => {
    let getRes = (res) => {
      setAboutUs(res?.data?.data);
    };
    callApi(
      "GET",
      routes.getAboutUs,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getAboutUs();
  }, []);
  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-about-us_main_view">
          <h1>{aboutUs[0]?.tittle}</h1>
          <h2>{aboutUs[0]?.sub_tittle}</h2>
          <div className="nova-about-us_percantage_view">
            {novaDiffArray.map((item) => {
              return (
                <div>
                  <h3>{item.value}%</h3>
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="nova-about-us_detail_view">
          <div className="nova-about-us_single_item_top_view">
            <img src={aboutDummyOne} />
            <div>
              <h3>Our Mission</h3>
              <h4>{aboutUs[0]?.ourmission}</h4>
            </div>
          </div>
          <div className="nova-about-us_single_item_top_view">
            <div>
              <h3>Background</h3>
              <h4>
                {aboutUs[0]?.background}
                {/* <span style={{ color: "#EE509C" }}>Read more</span> */}
              </h4>
            </div>
            <img src={aboutDummyTwo} />
          </div>
          <div className="nova-about-us_single_item_top_view">
            <img src={aboutDummyThree} />
            <div>
              <h3>Our Values</h3>
              <h4>{aboutUs[0]?.ourvalues}</h4>
            </div>
          </div>
          <div className="nova-about-us_single_item_top_view">
            <div>
              <h3>Our Team</h3>
              <h4>
                {aboutUs[0]?.ourteam}
                {/* <span style={{ color: "#EE509C" }}>Read more</span> */}
              </h4>
            </div>
            <img src={aboutDummyFour} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
