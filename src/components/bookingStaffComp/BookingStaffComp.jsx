import React, { useState } from 'react'
import { back, circleClose, next } from '../../assets'
import './bookingStaffComp.css'

const BookingStaffComp = (props) => {
    const [selectedValue, setSelectedValue] = useState({ id: 0 })
    const genderArray = [
        {
            id: 1,
            title: 'Male',
        },
        {
            id: 2,
            title: 'Female',
        },
        {
            id: 3,
            title: 'Any',
        },
    ]
    return (
        <div className="nova-booking-service_comp_top_view">
            <h1>Select Staff</h1>
            {genderArray.map((item) => {
                return (
                    <div onClick={() => setSelectedValue(item)} key={item.id} style={{ backgroundColor: item.id === selectedValue.id ? '#EE509C' : '#ffffff' }} className="nova-booking-service_comp_item_view">
                        <h3 style={{ color: item.id === selectedValue.id ? '#ffffff' : '#292929' }}>{item.title}</h3>
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

export default BookingStaffComp
