import React, { useState } from 'react'
import { back, circleClose, next } from '../../assets'
import './bookingServiceComp.css'

const BookingServiceComp = (props) => {
    const [selectedValue, setSelectedValue] = useState({ id: 0 })
    const servicesArray = [
        {
            id: 1,
            title: 'Eyebrow + Tint',
            time: '15 mins',
            price: '$15.00'
        },
        {
            id: 2,
            title: 'Tint only',
            time: '20 mins',
            price: '$15.00'
        },
        {
            id: 3,
            title: 'Lash Tint',
            time: '15 mins',
            price: '$20.00'
        },
    ]
    return (
        <div className="nova-booking-service_comp_top_view">
            <h1>Select Service</h1>
            {servicesArray.map((item) => {
                return (
                    <div onClick={() => setSelectedValue(item)} key={item.id} style={{ backgroundColor: item.id === selectedValue.id ? '#EE509C' : '#ffffff' }} className="nova-booking-service_comp_item_view">
                        <h2 style={{ color: item.id === selectedValue.id ? '#ffffff' : '#292929' }}>{item.title}</h2>
                        <h3 style={{ color: item.id === selectedValue.id ? '#ffffff' : '#292929' }}>{item.time}</h3>
                        <h3 style={{ color: item.id === selectedValue.id ? '#ffffff' : '#292929' }}>{item.price}</h3>
                    </div>
                )
            })}
            <div className='nova-booking-service_comp_button_top_view'>
                <div onClick={props.onClickBack} className="nova-booking-service_comp_previous_button_view">
                    <img src={back} />
                    <h3>Prevoious</h3>
                </div>
                <div onClick={props.onClickNext} className="nova-booking-service_comp_previous_button_view">
                    <h3>Next</h3>
                    <img src={next} />
                </div>
            </div>

        </div>
    )
}

export default BookingServiceComp
