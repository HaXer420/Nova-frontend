import React from "react";
import { aboutDummyFour, aboutDummyOne, aboutDummyThree, aboutDummyTwo } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import './aboutUs.css'

export default function AboutUs() {
  const novaDiffArray = [
    {
      id: 1,
      title: 'Overall Satisfaction',
      value: '99%',
    },
    {
      id: 2,
      title: 'Quality',
      value: '99%',
    },
    {
      id: 3,
      title: 'Environment',
      value: '99%',
    },
    {
      id: 4,
      title: 'Repeat Customers',
      value: '95%',
    }
  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-about-us_main_view">
          <h1>Beauty is in the hands of Nova beauticians!</h1>
          <h2>The NOVA Difference</h2>
          <div className="nova-about-us_percantage_view">
            {novaDiffArray.map((item) => {
              return (
                <div>
                  <h3>{item.value}</h3>
                  <h4>{item.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
        <div className="nova-about-us_detail_view">
          <div className="nova-about-us_single_item_top_view">
            <img src={aboutDummyOne} />
            <div>
              <h3>Our Mission</h3>
              <h4>Our mission is to bring your best self to the world. Let the world see your bold and beautiful self. We aim to make your day the best day ever it can be.</h4>
            </div>
          </div>
          <div className="nova-about-us_single_item_top_view">
            <div>
              <h3>Background</h3>
              <h4>Quality doesn't have to be always expensive. Nova was launched to deliver top quality services at competitive prices to everyone. In today's fast changing world, there are thousands of beauty salons with wide range of services with differing quality standards and prices. <span style={{ color: '#EE509C' }}>Read more</span></h4>
            </div>
            <img src={aboutDummyTwo} />
          </div>
          <div className="nova-about-us_single_item_top_view">
            <img src={aboutDummyThree} />
            <div>
              <h3>Our Values</h3>
              <h4>At Nova, customer is the queen. And, we really mean it. We strive for excellence and nothing less.</h4>
            </div>
          </div>
          <div className="nova-about-us_single_item_top_view">
            <div>
              <h3>Our Team</h3>
              <h4>At Nova, we have a great team of experienced beauticians who are not only deliver excellent quality of services but also excellent customer care. Our beauticians are passionate about and love what they do. <span style={{ color: '#EE509C' }}>Read more</span></h4>
            </div>
            <img src={aboutDummyFour} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
