import React from "react";
import { getAllParams } from "../../api/params";
import { serviceDetailOne, serviceDetailTwo } from "../../assets";
import { Button, Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./serviceDetail.css";
import { useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { product } = getAllParams();
  const navigate = useNavigate();
  let item = JSON.parse(product);

  //console.log("item", item);

  const itemArray = [
    {
      id: 1,
      title: "Brazilian – Sugar Gel !",
      price: "$40",
      type: 1,
    },
    {
      id: 2,
      title: "Bikini",
      price: "$30",
      type: 2,
    },
    {
      id: 3,
      title: "Legs",
      price: "$45",
      type: 1,
    },
    {
      id: 4,
      title: "Half Legs",
      price: "$30",
      type: 2,
    },
    {
      id: 5,
      title: "Arms",
      price: "$30",
      type: 1,
    },
    {
      id: 6,
      title: "Half Arms",
      price: "$20",
      type: 2,
    },
    {
      id: 7,
      title: "Underarms",
      price: "$12",
      type: 1,
    },
    {
      id: 8,
      title: "Stomach",
      price: "$20",
      type: 2,
    },
    {
      id: 9,
      title: "Half Stomach",
      price: "$15",
      type: 1,
    },
    {
      id: 10,
      title: "Back Wax",
      price: "$25",
      type: 2,
    },
    {
      id: 11,
      title: "Lower Back",
      price: "$15",
      type: 1,
    },
    {
      id: 12,
      title: "Butt Cheeks",
      price: "$20",
      type: 2,
    },
    {
      id: 13,
      title: "Breast",
      price: "$20",
      type: 1,
    },
    {
      id: 14,
      title: "Happy Trail",
      price: "$5",
      type: 2,
    },
    {
      id: 15,
      title: "Feet",
      price: "$10",
      type: 1,
    },
    {
      id: 16,
      title: "Mens Underarms",
      price: "$40",
      type: 2,
    },
    {
      id: 17,
      title: "Mens Back",
      price: "$40",
      type: 1,
    },
    {
      id: 18,
      title: "Mens Chest",
      price: "$35",
      type: 2,
    },
    {
      id: 19,
      title: "Mens Arms",
      price: "$15",
      type: 1,
    },
  ];
  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div
          style={{
            backgroundImage: `url(${item.backgroundphoto})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="nova-service_detail-banner_view"
        >
          <div>
            <h1 style={{ color: "#000" }}>{item.title}</h1>
          </div>
        </div>
        <div
          style={{ marginTop: "2rem" }}
          className="nova-service_detail-detail_view"
        >
          <h1>{item?.description[0]?.title}</h1>
          <div className="nova-service_detail-images_top_view">
            <h2>{item?.description[0]?.decription}</h2>
            <div>
              <img src={item?.photos[0]} />
            </div>
          </div>
          {item?.photos?.length == 2 && (
            <div className="nova-service_detail-images_top_view_two">
              <div className="nova-service_detail-images_top_view_two_image">
                <img src={item?.photos[1]} />
              </div>
              <div className="nova-service_detail-images_top_view_two_text">
                <h3>{item?.description[1]?.title}</h3>
                <h4>{item?.description[1]?.decription}</h4>
              </div>
            </div>
          )}
          <div className="nova-service_detail-items_top_view">
            {item?.options?.map((item, index) => {
              return (
                <div
                  style={{
                    backgroundColor: index % 2 === 0 ? "#EE509C" : "#FFEFF7",
                  }}
                  key={index}
                >
                  <h5
                    style={{ color: index % 2 === 0 ? "#FFFFFF" : "#3D3D3D" }}
                  >
                    {item.name}
                  </h5>
                  <h5
                    style={{ color: index % 2 === 0 ? "#FFFFFF" : "#3D3D3D" }}
                  >
                    ${item.price}
                  </h5>
                </div>
              );
            })}
          </div>
          <Button onClick={() => navigate("/locationpage")}>Book Now</Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
