import React from "react";
import { dummyMap } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import './locationPage.css'

export default function LocationPage() {
  const locationArray = [
    {
      id: 1,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 2,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 3,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 4,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 5,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 6,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 7,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 8,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 9,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 10,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 11,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
    {
      id: 12,
      title: 'Sandy Springs',
      location: '5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328',
      image: dummyMap
    },
  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-locations_main_view">
          <h1>Locations</h1>
          <div className="nova-locations_data_top_view">
            {locationArray.map((item) => {
              return (
                <div className="nova-locations_single_location_view">
                  <img src={item.image} />
                  <h2>{item.title}</h2>
                  <h3>{item.location}</h3>
                  <div className='nova-location_button_top_view' >
                    <div className='nova-location_button_border_view' />
                    <div className='nova-location_button_main_view'>
                      <h5>Book Now</h5>
                    </div>
                  </div>
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
