import React from "react";
import { dummyService, facial, sugaring, tattos, threading, tinting, waxing } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import './services.css'

export default function Services() {
  const servicesArray = [
    {
      id: 1,
      title: 'Waxing',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: waxing
    },
    {
      id: 2,
      title: 'Threading',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: threading
    },
    {
      id: 3,
      title: 'Sugaring',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: sugaring
    },
    {
      id: 4,
      title: 'Facials',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: facial
    },
    {
      id: 5,
      title: 'Vajacials',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: dummyService
    },
    {
      id: 6,
      title: 'Tinting',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: tinting
    },
    {
      id: 7,
      title: 'Henna Tattos',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: tattos
    },
  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Services</h1>
          <div className="nova-services-top_view">
            {servicesArray.map((item) => {
              return (
                <div key={item.id} className="nova-services-single_service_view">
                  <img alt='' src={item.image} />
                  <div className="nova-services-single_service_title_view">
                    <h2>{item.title}</h2>
                    <h3>{item.price}</h3>
                  </div>
                  <h4>{item.des}</h4>
                  <h3 style={{ paddingLeft: 10, cursor: 'pointer' }}>Book Now</h3>
                  <div className="nova-services-single_service_border_view" />
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
