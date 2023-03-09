import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyService, facial, sugaring, tattos, threading, tinting, waxing } from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import './services.css'

export default function Services() {
  const navigate = useNavigate()
  const [selectedGender, setSelectedGender] = useState({ id: 1 })
  const servicesArray = [
    {
      id: 1,
      title: 'Waxing',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: waxing
    },
    {
      id: 2,
      title: 'Threading',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: threading
    },
    {
      id: 3,
      title: 'Sugaring',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: sugaring
    },
    {
      id: 4,
      title: 'Facials',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: facial
    },
    {
      id: 5,
      title: 'Vajacials',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: dummyService
    },
    {
      id: 6,
      title: 'Tinting',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: tinting
    },
    {
      id: 7,
      title: 'Henna Tattos',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$150',
      image: tattos
    },
  ]
  const genderArray = [
    {
      id: 1,
      title: 'Female'
    },
    {
      id: 2,
      title: 'Male'
    },
  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Services</h1>
          <div className="nova-services-gender_view">
            {genderArray.map((item) => {
              return (
                <div onClick={() => setSelectedGender(item)} key={item.id} className="nova-services-single_gender_view">
                  <h2 style={{ color: item.id === selectedGender.id ? '#171D1C' : '#8a8e8d' }}>{item.title}</h2>
                  <div className="nova-services-single_gender_divider" style={{ borderColor: item.id === selectedGender.id ? '#EE509C' : 'transparent' }} />
                </div>
              )
            })}
          </div>
          <div className="nova-services-top_view">
            {servicesArray.map((item) => {
              return (
                <div key={item.id} className="nova-services-single_service_view">
                  <img onClick={() => navigate('/Sservicedetail')} alt='' src={item.image} />
                  <div onClick={() => navigate('/Sservicedetail')} className="nova-services-single_service_title_view">
                    <h2>{item.title}</h2>
                  </div>
                  <h4 onClick={() => navigate('/Sservicedetail')} >{item.des}<span style={{ color: '#EE509C', fontWeight: 'bold' }}> Read more</span></h4>
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
