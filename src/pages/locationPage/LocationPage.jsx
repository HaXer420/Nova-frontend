import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { dummyMap } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./locationPage.css";

export default function LocationPage() {
  const [isloading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const [storeLocation, setStoreLocation] = useState([]);
  const locationArray = [
    {
      id: 1,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 2,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 3,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 4,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 5,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 6,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 7,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 8,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 9,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 10,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 11,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
    {
      id: 12,
      title: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
      image: dummyMap,
    },
  ];
  const navigateTo = () => {
    Navigate("/bookingpage");
  };
  const defaultProps = {
    center: {
      lat: 31.52037,
      lng: 74.358749,
    },
  };

  const getStoreLocation = () => {
    let getRes = (res) => {
      console.log("res of location", res);
      setStoreLocation(res?.data?.data);
    };
    callApi(
      "GET",
      `${routes.getStoreLocation}100`,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getStoreLocation();
  }, []);

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-locations_main_view">
          <h1>Locations</h1>
          <div className="nova-locations_data_top_view">
            {storeLocation?.map((item) => {
              return (
                <div className="nova-locations_single_location_view">
                  {/* <img src={dummyMap} /> */}
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyDN7lHPbUtmCz0cO3Ln0Ync6uKPokXGe5E",
                    }}
                    // defaultCenter={item?.location?.address?.coordinates}
                    defaultCenter={item?.location?.center}
                    zoom={11}
                  />
                  <h2>{item?.name}</h2>
                  <h3>{item?.location?.address}</h3>
                  <div className="nova-location_button_top_view">
                    <div className="nova-location_button_border_view" />
                    <div
                      onClick={() => navigateTo()}
                      className="nova-location_button_main_view"
                    >
                      <h5>Book Now</h5>
                    </div>
                  </div>
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
