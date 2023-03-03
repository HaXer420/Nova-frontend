import React from "react";
import { serviceDetailOne, serviceDetailTwo } from "../../assets";
import { Button, Footer, NavBar, TopBar } from "../../components";
import './serviceDetail.css'

export default function ServiceDetail() {
  const itemArray = [
    {
      id: 1,
      title: 'Brazilian – Sugar Gel !',
      price: '$40',
      type: 1,
    },
    {
      id: 2,
      title: 'Bikini',
      price: '$30',
      type: 2,
    },
    {
      id: 3,
      title: 'Legs',
      price: '$45',
      type: 1,
    },
    {
      id: 4,
      title: 'Half Legs',
      price: '$30',
      type: 2,
    },
    {
      id: 5,
      title: 'Arms',
      price: '$30',
      type: 1,
    },
    {
      id: 6,
      title: 'Half Arms',
      price: '$20',
      type: 2,
    },
    {
      id: 7,
      title: 'Underarms',
      price: '$12',
      type: 1,
    },
    {
      id: 8,
      title: 'Stomach',
      price: '$20',
      type: 2,
    },
    {
      id: 9,
      title: 'Half Stomach',
      price: '$15',
      type: 1,
    },
    {
      id: 10,
      title: 'Back Wax',
      price: '$25',
      type: 2,
    },
    {
      id: 11,
      title: 'Lower Back',
      price: '$15',
      type: 1,
    },
    {
      id: 12,
      title: 'Butt Cheeks',
      price: '$20',
      type: 2,
    },
    {
      id: 13,
      title: 'Breast',
      price: '$20',
      type: 1,
    },
    {
      id: 14,
      title: 'Happy Trail',
      price: '$5',
      type: 2,
    },
    {
      id: 15,
      title: 'Feet',
      price: '$10',
      type: 1,
    },
    {
      id: 16,
      title: 'Mens Underarms',
      price: '$40',
      type: 2,
    },
    {
      id: 17,
      title: 'Mens Back',
      price: '$40',
      type: 1,
    },
    {
      id: 18,
      title: 'Mens Chest',
      price: '$35',
      type: 2,
    },
    {
      id: 19,
      title: 'Mens Arms',
      price: '$15',
      type: 1,
    },

  ]
  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-service_detail-banner_view">
          <div>
            <h1>Waxing</h1>
          </div>
        </div>
        <div className="nova-service_detail-detail_view">
          <h1>We use the best and highest quality wax !</h1>
          <div className="nova-service_detail-images_top_view">
            <h2>At unique we prioritize client comfort. Our clean and comfortable rooms allow you to relax while we get rid of unwanted hair. Our exclusive organic body wax and Sugar gel are formulated to ensure hair removal is as painlessly as possible.</h2>
            <div>
              <img src={serviceDetailOne} />
            </div>
          </div>
          <div className="nova-service_detail-images_top_view_two">
            <div className="nova-service_detail-images_top_view_two_image">
              <img src={serviceDetailTwo} />
            </div>
            <div className="nova-service_detail-images_top_view_two_text">
              <h3>This is why we ONLY sugar the bikini!</h3>
              <h4>Best Brazilian Sugar Experience! ( Because Sugar-gel is better than wax!)
                If you want a Brazilian, Unique is the place! With over 20 years of experience and thousands of clients, we take pride as a leader in the industry. A Brazilian sugar removes all pubic hair from to back.
                Your Sugarista will explain the process and always performs the service according to your comfort and pace. Our organic sugar is a non-wax hair removal system that is 100% organic– no chemicals, no resin, no wax, and an only rich paste made of sugar lemon, and water. Our unique sugar gel removes the entire bulb and hair shaft. It only sticks to hair not to skin. Also know to reduce hair growth and density.</h4>
            </div>

          </div>
          <div className="nova-service_detail-items_top_view">
            {itemArray.map((item) => {
              return (
                <div style={{ backgroundColor: item.type === 1 ? '#EE509C' : '#FFEFF7' }} key={item.id}>
                  <h5 style={{ color: item.type === 1 ? '#FFFFFF' : '#3D3D3D' }}>{item.title}</h5>
                  <h5 style={{ color: item.type === 1 ? '#FFFFFF' : '#3D3D3D' }}>{item.price}</h5>
                </div>
              )
            })}
          </div>
          <Button>Book Now</Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
