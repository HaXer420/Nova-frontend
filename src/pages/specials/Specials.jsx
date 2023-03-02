import React from "react";
import { sugaring, threadingSpecial, waxingCombo } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import './specials.css'

export default function Specials() {
  const specialsArray = [
    {
      id: 1,
      title: 'Waxing Combo',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: waxingCombo
    },
    {
      id: 2,
      title: 'Threading Specials',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: threadingSpecial
    },
    {
      id: 3,
      title: 'Sugaring Deals',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more',
      price: '$150',
      image: sugaring
    },

  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Specials</h1>
          <div className="nova-services-top_view">
            {specialsArray.map((item) => {
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
