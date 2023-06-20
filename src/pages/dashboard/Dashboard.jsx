import React, { useState, useEffect } from "react";
import {
  aboutMe,
  facial,
  faqDummy,
  homePageBanner,
  memberOne,
  memberThree,
  memberTwo,
  minus,
  plus,
  reviewDummy,
  sugaring,
  threading,
  threadingSpecial,
  waxing,
  waxingCombo,
} from "../../assets";
// import Carousel from "react-simply-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";

import { Footer, NavBar, ServiceView, TopBar } from "../../components";
import "./dashboard.css";

import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../redux";
import { showModalValue } from "../../redux/showModalSlice";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import Loader from "../../components/loader/loader";
import { setParam } from "../../api/params";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [activeSlide3, setActiveSlide3] = useState(0);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const novaDiffArray = [
    {
      id: 1,
      title: "Overall Satisfaction",
      value: "99%",
    },
    {
      id: 2,
      title: "Quality",
      value: "99%",
    },
    {
      id: 3,
      title: "Environment",
      value: "99%",
    },
    {
      id: 4,
      title: "Repeat Customers",
      value: "95%",
    },
  ];
  const ourServicesArray = [
    {
      id: 1,
      title: "Waxing",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: waxing,
    },
    {
      id: 2,
      title: "Threading",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: threading,
    },
    {
      id: 3,
      title: "Sugaring",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: sugaring,
    },
    {
      id: 4,
      title: "Facials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: facial,
    },
  ];
  const ourSpecialsArray = [
    {
      id: 1,
      title: "Waxing Combo",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: waxingCombo,
    },
    {
      id: 2,
      title: "Threading Specials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: threadingSpecial,
    },
    {
      id: 3,
      title: "Sugaring Deals",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: sugaring,
    },
    {
      id: 4,
      title: "Facials",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more",
      price: "$150",
      image: facial,
    },
  ];
  const reviewArray = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.",
      image: reviewDummy,
      type: "(Sugaring)",
      reviewBy: "Sarah Smith",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.",
      image: reviewDummy,
      type: "(Facials)",
      reviewBy: "Naomi Turner",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.",
      image: reviewDummy,
      type: "(Waxing)",
      reviewBy: "James Vegas",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.",
      image: reviewDummy,
      type: "(Waxing)",
      reviewBy: "James Vegas",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Caroline Kao",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis. adipiscing ipsum loreym.",
      image: memberOne,
    },
    {
      id: 2,
      name: "Alicia Grene",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis. adipiscing ipsum loreym.",
      image: memberTwo,
    },
    {
      id: 3,
      name: "Rayes Gem",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis. adipiscing ipsum loreym.",
      image: memberThree,
    },
    {
      id: 4,
      name: "Rayes Gem",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis. adipiscing ipsum loreym.",
      image: memberOne,
    },
  ];
  const [questionsArray, setQuestionArray] = useState([
    {
      id: 1,
      question: "Is the services refundable?",
      ans: "Yes, You can pay using cryptocurrencies, We accept only BNB from smartchain",
      open: false,
    },
    {
      id: 2,
      question: "Can I pay using Cryptcurrency?",
      ans: "Yes, You can pay using cryptocurrencies, We accept only BNB from smartchain",
      open: false,
    },
    {
      id: 3,
      question: "How long does it take for curly hairs?",
      ans: "Yes, You can pay using cryptocurrencies, We accept only BNB from smartchain",
      open: false,
    },
    {
      id: 4,
      question: "Is the services refundable?",
      ans: "Yes, You can pay using cryptocurrencies, We accept only BNB from smartchain",
      open: false,
    },
  ]);
  const defaultProps = {
    center: {
      lat: 31.52037,
      lng: 74.358749,
    },
  };
  const viewQuestion = (index) => {
    const arr = [...questionsArray];
    arr[index]["open"] = !arr[index]["open"];
    setQuestionArray(arr);
  };
  const getQuestion = () => {
    let getRes = (res) => {
      setQuestionArray(res?.data?.data);
    };
    callApi("GET", routes.getFAQ, null, setIsLoading, getRes, (error) => {});
  };
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

  const getReviews = () => {
    let getRes = (res) => {
      //console.log("res of review", res);
      setReviews(res?.data?.data);
    };
    callApi(
      "GET",
      routes.getallReviews,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };
  useEffect(() => {
    getQuestion();
    getServices();
    getReviews();
    // dispatch(showModalValue(false));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-dashboard-banner_top_view">
          <div className="nova-dashboard-banner_detail_view">
            <h1>
              Be Bold! Be<span style={{ color: "#EE509C" }}> Beautiful!</span>
            </h1>
            <h5>
              We aim to bring the best out of you - your bold and beautiful
              self. Trust us once and it will be for all. Nothing matters to us
              more when it comes to your care. With us, you will be sexier and
              ever confident like never before! We can't wait to see you!
            </h5>
            <h3>The NOVA Difference</h3>
            <div className="nova-dashboard-banner_percantages_view">
              {novaDiffArray.map((item) => {
                return (
                  <div key={item.id}>
                    <h2>{item.value}</h2>
                    <h4>{item.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="nova-dashboard-banner_image_view">
            <img alt="" src={homePageBanner} />
          </div>
        </div>
        <div className="nova-dashboard-our_services_and_specials_top_view">
          <div className="nova-dashboard-our_services_top_view">
            <h1>Our Services</h1>

            <Carousel
              containerClass="custom-carousel-container"
              responsive={responsive}
              // customRightArrow={<button>ht</button>}
            >
              {services
                ?.filter((item) => item?.special == false)
                .map((item) => {
                  return (
                    <ServiceView
                      onClick={() =>
                        navigate(
                          `/Sservicedetail?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                      item={item}
                    />
                  );
                })}
            </Carousel>
            {/* <Carousel
              containerClass="custom-carousel-container"
              responsive={responsive}
              // customRightArrow={<button>ht</button>}
            >
              {services
                ?.filter((item) => item?.special == false)
                .map((item) => {
                  return (
                    <ServiceView
                      onClick={() =>
                        navigate(
                          `/Sservicedetail?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                      item={item}
                    />
                  );
                })}
            </Carousel> */}

            <h1>Specials</h1>
            {/* <div className="nova-dashboard-our_services_view"> */}
            <Carousel
              containerClass="custom-carousel-container"
              responsive={responsive}
              // customRightArrow={<button>ht</button>}
            >
              {services
                ?.filter((item) => item?.special == true)
                .map((item) => {
                  return (
                    <ServiceView
                      onClick={() =>
                        navigate(
                          `/Sservicedetail?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                      item={item}
                    />
                  );
                })}
            </Carousel>
            {/* </div> */}
          </div>
        </div>
        <div className="nova-dashboard-location_text_view">
          <h6>Location</h6>
        </div>
        <div className="nova-dashboard-map_top_view">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDN7lHPbUtmCz0cO3Ln0Ync6uKPokXGe5E",
            }}
            defaultCenter={defaultProps.center}
            zoom={11}
          />
        </div>
        <div className="nova-dashboard-about_me_top_view">
          <div className="nova-dashboard-about_me_detail_view">
            <div className="nova-dashboard-about_me_know_text">
              <h1>
                Know us <span>Well</span>
              </h1>
            </div>
            <div className="nova-dashboard-about_me_dont_find_text">
              <h2>
                “Don’t find fault,
                <br /> find a <span>remedy.”</span>
              </h2>
            </div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
              ut facilisis rhoncus morbi. Lorem ultrices blandit quam quam.
              Sagittis, faucibus sit gravida cursus nunc sed vestibulum sed.
              Tellus, porttitor pellentesque posuere diam nisi,{" "}
            </h3>
            <div className="nova-dashboard-about_me_clients_top_view">
              <div>
                <h4>5000+</h4>
                <h5>Clients</h5>
              </div>
              <div>
                <h4>4+</h4>
                <h5>Ratings</h5>
              </div>
              <div>
                <h4>100%</h4>
                <h5>Satisfaction</h5>
              </div>
            </div>
          </div>
          <div className="nova-dashboard-about_me_image_view">
            <img alt="" src={aboutMe} />
          </div>
        </div>
        <div className="nova-dashboard-reviews_top_view">
          <h1>Reviews</h1>
          {/* <div className="nova-dashboard-reviews_view"> */}
          <Carousel
            containerClass="custom-carousel-container"
            responsive={responsive}
            // customRightArrow={<button>ht</button>}
          >
            {reviews?.map((item) => {
              return (
                <div key={item.id} className="nova-dashboard-single_review">
                  <img alt="" src={item?.creator?.image} />
                  <div>
                    <p>
                      {item?.review}
                      {/* <span
                          style={{
                            color: "#F088B8",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          Read More
                        </span> */}
                    </p>
                    <p style={{ marginTop: 10 }}>
                      {item?.name}
                      {/* <span style={{ color: "#F088B8", fontWeight: "bold" }}>
                          {" "}
                          {item.type}
                        </span> */}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
          {/* </div> */}
        </div>
        <div className="nova-dashboard-questions_top_view">
          <div className="nova-dashboard-questions_view">
            <h1>Got Questions?</h1>
            {questionsArray?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="nova-dashboard-single_question_view"
                >
                  <div className="nova-dashboard-single_question_title_view">
                    <h3>{item.question}</h3>
                    <img
                      alt=""
                      onClick={() => viewQuestion(index)}
                      src={item.open ? minus : plus}
                    />
                  </div>
                  <div
                    className={
                      item.open && "nova-dashboard-single_question_view-h4"
                    }
                  >
                    {item.open && <h4>{item.answer}</h4>}
                  </div>

                  <div className="nova-dashboard-single_question_divider" />
                </div>
              );
            })}
          </div>
          <div className="nova-dashboard-questions_image_view">
            <img alt="" src={faqDummy} />
          </div>
        </div>
        <div className="nova-dashboard-team_members_top_view">
          <h1>Our Teams </h1>
          <div className="nova-dashboard-team_members_view">
            <p>
              At Nova, we have a great team of experienced beauticians who are
              not only deliver excellent quality of services but also excellent
              customer care. Our beauticians are passionate about and love what
              they do
            </p>
            {/* {teamMembers.map((item) => {
              return (
                <div
                  key={item.id}
                  className="nova-dashboard-single_member_view"
                >
                  <img alt="" src={item.image} />
                  <div className="nova-dashboard-single_member_detail_view">
                    <div className="nova-dashboard-single_member_detail_view_divider" />
                    <div className="">
                      <h2>{item.name}</h2>
                      <h3>{item.des}</h3>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
        <Footer setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
