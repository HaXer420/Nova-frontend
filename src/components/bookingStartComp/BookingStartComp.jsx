import React, { useState } from 'react'
import { circleClose, next } from '../../assets'
import './bookingStartComp.css'

const BookingStartComp = (props) => {
    const [appointmentItems, setAppointmentItems] = useState([
        {
            id: 1,
            title: 'Face Threading ( BROWS SERVICE IS WALK-IN FIRST COME BASES )',
            active: false,
        },
        {
            id: 2,
            title: 'Face Wax',
            active: false,
        },
        {
            id: 3,
            title: 'Tint',
            active: false,
        },
        {
            id: 4,
            title: 'Waxing',
            active: false,
        },
        {
            id: 5,
            title: 'Sugaring',
            active: false,
        },
        {
            id: 6,
            title: 'Mens Waxing',
            active: false,
        },
        {
            id: 7,
            title: 'Mens Sugaring',
            active: false,
        },
        {
            id: 8,
            title: 'Facial',
            active: false,
        },
        {
            id: 9,
            title: 'Heena Tattoos',
            active: false,
        },
        {
            id: 10,
            title: 'VAJACIAL',
            active: false,
        },
    ])
    const selectValue = (index) => {
        const arr = [...appointmentItems]
        arr[index].active = !arr[index].active
        setAppointmentItems(arr)
    }
    return (
        <div className="nova-booking-start_comp_top_view">
            <h1>What is your appointment for?</h1>
            {appointmentItems.map((item, index) => {
                return (
                    <div onClick={() => selectValue(index)} key={item.id} style={{ backgroundColor: item.active ? '#EE509C' : '#ffffff' }} className="nova-booking-start_comp_item_view">
                        <h2 style={{ color: item.active ? '#ffffff' : '#292929' }}>{item.title}</h2>
                        {item.active && <img src={circleClose} />}
                    </div>
                )
            })}
            <div onClick={props.onClickNext} className="nova-booking-start_comp_next_button_view">
                <h3>Next</h3>
                <img src={next} />
            </div>
        </div>
    )
}

export default BookingStartComp
