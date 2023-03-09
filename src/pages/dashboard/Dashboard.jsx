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
import { useDispatch } from "react-redux";
import { Footer, NavBar, ServiceView, TopBar } from "../../components";
import "./dashboard.css";
import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../redux";
import { showModalValue } from "../../redux/showModalSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.',
      image: reviewDummy,
      type: '(Sugaring)',
      reviewBy: 'Sarah Smith'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.',
      image: reviewDummy,
      type: '(Facials)',
      reviewBy: 'Naomi Turner'

    }, {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.',
      image: reviewDummy,
      type: '(Waxing)',
      reviewBy: 'James Vegas'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi.',
      image: reviewDummy,
      type: '(Waxing)',
      reviewBy: 'James Vegas'

    }
  ]
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

  useEffect(() => {
    dispatch(showModalValue(false));
  });

  return (
    <div className="nova-dashboard-main_container">
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
            <div className="nova-dashboard-our_services_view">
              {ourServicesArray.map((item) => {
                return (
                  <ServiceView
                    onClick={() => navigate("/Sservicedetail")}
                    item={item}
                  />
                );
              })}
            </div>
            <h1>Specials</h1>
            <div className="nova-dashboard-our_services_view">
              {ourSpecialsArray.map((item) => {
                return (
                  <ServiceView
                    onClick={() => navigate("/Sservicedetail")}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="nova-dashboard-location_text_view">
          <h6>Location</h6>
        </div>
        <div className="nova-dashboard-map_top_view">
          <div>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDN7lHPbUtmCz0cO3Ln0Ync6uKPokXGe5E",
              }}
              defaultCenter={defaultProps.center}
              zoom={11}
            />
          </div>
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
          <div className="nova-dashboard-reviews_view">
            {reviewArray.map((item) => {
              return (
                <div key={item.id} className="nova-dashboard-single_review">
                  <img alt='' src={item.image} />
                  <div>
                    <p>{item.title}<span style={{ color: '#F088B8', cursor: 'pointer' }}> Read More</span></p>
                    <p style={{ marginTop: 10 }}>{item.reviewBy} <span style={{ color: '#F088B8', fontWeight: 'bold', }}> {item.type}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="nova-dashboard-questions_top_view">
          <div className="nova-dashboard-questions_view">
            <h1>Got Questions?</h1>
            {questionsArray.map((item, index) => {
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
                  {item.open && <h4>{item.ans}</h4>}
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
          <h1>Meet Our Team Members</h1>
          <div className="nova-dashboard-team_members_view">
            {teamMembers.map((item) => {
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
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
