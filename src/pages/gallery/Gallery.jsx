import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
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
import "./gallery.css";
// import { Gallery } from "..";

export default function Gallery() {
  const [isloading, setIsLoading] = useState(false);
  // const [playing, setPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [readMore, setReadMore] = useState(null);
  const navigate = useNavigate();

  const [selectedFormat, setSelectedFormat] = useState({
    id: 1,
    title: "Photos",
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
  const formatArray = [
    {
      id: 1,
      title: "Photos",
    },
    {
      id: 2,
      title: "Videos",
    },
  ];
  const getServices = () => {
    let getRes = (res) => {
      setServices(res?.data?.data);
    };
    callApi(
      "GET",
      routes.getallGallery,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleThumbnailClick = (index) => {
    if (index === playingIndex) {
      // Clicked on the same thumbnail, toggle play/pause
      setPlayingIndex(null);
    } else {
      // Clicked on a different thumbnail, start playing the video
      setPlayingIndex(index);
    }
  };

  const NestedDescription = ({
    showModalDes,
    setShowModalDes,
    description,
  }) => {
    // Set a minimum height for the modal
    const minHeight = 250;
    const maxHeight = 600;
    const descriptionHeight = 500;
    return (
      <div
        onClick={() => setShowModalDes(false)}
        className="add-product-modal-main-container-video"
      >
        <div
          className="add-product-modal-container-product-description-detail-video"
        >
          {/* <h1>Description</h1> */}
          <h2>
            {
              <video className="video-model"
                // url={currentVideo.photo}
                src={currentVideo.photo}
                playing
                controls
              />
            }
          </h2>
        </div>
      </div>
    );
  };

  const HandleReadMoreClick = ({
    showModalDes,
    setShowModalDes,
    description,
  }) => {
    // Set a minimum height for the modal
    const minHeight = 250;
    const maxHeight = 600;
    const descriptionHeight = 500;
    return (
      <div
        onClick={() => setShowModalDes(false)}
        className="add-product-modal-main-container-desc"
      >
        <div className="add-product-modal-container-product-description-detail-desc">
          <h2>
          {
          readMore?.description
          }
        </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      {/* {console.log("aaaaa", readMore)} */}
      {(readMore && (
        <HandleReadMoreClick
          readMore={readMore}
          setShowModalDes={setReadMore}
          showModalDes={readMore}
        />
      ))}
      {currentVideo && (
        <NestedDescription
          currentVideo={currentVideo}
          setShowModalDes={setCurrentVideo}
          showModalDes={currentVideo}
        />
      )}

      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Gallery</h1>
          <div className="nova-services-gender_view">
            {formatArray.map((item, index) => {
              return (
                <div
                  onClick={() => setSelectedFormat(item)}
                  key={item.id}
                  className="nova-services-single_gender_view"
                >
                  <h2
                    style={{
                      color:
                        item.id === selectedFormat.id ? "#171D1C" : "#8a8e8d",
                    }}
                  >
                    {item.title}
                  </h2>
                  <div
                    className="nova-services-single_gender_divider"
                    style={{
                      borderColor:
                        item.id === selectedFormat.id
                          ? "#EE509C"
                          : "transparent",
                    }}
                  />
                </div>
              );
            })}
          </div>
          {selectedFormat.title === "Photos" ? (
            <div className="nova-services-top_view">
              {services
                ?.filter((item) => item?.type == "photo")
                ?.map((item, index) => {
                  return (
                    <div
                      //   key={item._id}
                      className="nova-services-single_service_view"
                      //   onClick={() =>
                      //     navigate(
                      //       `/Sservicedetail?${setParam({
                      //         product: JSON.stringify(item),
                      //       })}`
                      //     )
                      //   }
                    >
                      <img alt="" src={item?.photo} />
                      <div className="nova-services-single_service_title_view">
                        <h2>{item?.title}</h2>
                      </div>
                      <h4>
                        {/* {item?.description[0]?.title} */}
                        {item?.description}
                        {/* <span style={{ color: "#EE509C", fontWeight: "bold" }}>
                          Read more
                        </span> */}
                      </h4>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="nova-services-top_view">
              {services
                ?.filter((item) => item?.type == "video")
                ?.map((item, index) => {
                  console.log("item", item);
                  return (
                    <div
                      //   key={item._id}
                      className="nova-services-single_service_view"
                      //   onClick={() =>
                      //     navigate(
                      //       `/Sservicedetail?${setParam({
                      //         product: JSON.stringify(item),
                      //       })}`
                      //     )
                      //   }
                    >
                      {/* <video controls src={item?.photo}></video> */}
                      {/* <div key={index} onClick={() => handleThumbnailClick(index)}>
                        {playingIndex === index ? (
                          <ReactPlayer
                            url={item.photo}
                            playing
                            controls
                            width="100%"
                            height="auto"
                          />
                        ) : (
                          <img src={item.thumbnail} alt={`Video Thumbnail ${index}`} />
                        )}
                      </div> */}
                      <div key={index} className="thumbnail-container">
                        {/* {playingIndex === index ? (
                            <ReactPlayer
                              url={item.photo}
                              playing
                              controls
                              width="100%"
                              height="auto"
                            />
                          ) : ( */}
                        <>
                          <img
                            src={item.thumbnail}
                            alt={`Video Thumbnail ${index}`}
                          />
                          <div
                            className="play-button"
                            onClick={() => {
                              handleThumbnailClick(index);
                              setCurrentVideo(item);
                            }}
                            style={{
                              position: "absolute",
                              top: "50%", // Center vertically
                              left: "50%", // Center horizontally
                              transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                              cursor: "pointer", // Add a pointer cursor for interaction
                            }}
                          >
                            <span
                              style={{
                                fontSize: "50px", // Adjust the font size for the play button icon
                                color: "white",
                              }}
                            >
                              &#9654;
                            </span>{" "}
                            {/* Play button icon */}
                          </div>
                        </>
                        {/* ) */}
                        {/* } */}
                      </div>
                      <div className="nova-services-single_service_title_view">
                        <h2>{item.title}</h2>
                      </div>
                      <h4>
                        {/* {item?.description.length > 10 ? ( */}
                          <>
                            {item?.description.substring(0, 50)}
                            <div
                              onClick={() => setReadMore(item)}
                              style={{ cursor: "pointer", color: "blue" }}
                            >
                              Read More
                            </div>
                          </>
                        {/* ) : (
                          item?.description */}
                        {/* )} */}
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

// exports default Gallery
