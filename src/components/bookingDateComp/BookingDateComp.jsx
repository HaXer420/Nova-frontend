import React, { useState } from 'react'
import { back, next } from '../../assets'
import './bookingDateComp.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TextInput from '../textInput/TextInput';
import TextInputTwo from '../textInputTwo/TextInputTwo';

const BookingDateComp = (props) => {
    const [selectedDate, setSelectedDate] = useState('Thu Jan 15 2088 00:00:00 GMT+0500 (Pakistan Standard Time)')
    const [morningTimeSlots, setMorningTimeSlots] = useState([
        {
            id: 1,
            time: '10:00 AM',
            selected: false
        },
        {
            id: 2,
            time: '10:15 AM',
            selected: false
        },
        {
            id: 3,
            time: '10:30 AM',
            selected: false
        },
        {
            id: 4,
            time: '10:45 AM',
            selected: false
        },
        {
            id: 5,
            time: '11:00 AM',
            selected: false
        },
        {
            id: 6,
            time: '11:15 AM',
            selected: false
        },
        {
            id: 7,
            time: '11:30 AM',
            selected: false
        },
        {
            id: 8,
            time: '11:45 AM',
            selected: false
        },
    ])
    const [afternoonTimeSlots, setAfternoonTimeSlots] = useState([
        {
            id: 1,
            time: '12:00 AM',
            selected: false
        },
        {
            id: 2,
            time: '12:15 AM',
            selected: false
        },
        {
            id: 3,
            time: '12:30 AM',
            selected: false
        },
        {
            id: 4,
            time: '12:45 AM',
            selected: false
        },
        {
            id: 5,
            time: '01:00 AM',
            selected: false
        },
        {
            id: 6,
            time: '01:15 AM',
            selected: false
        },
        {
            id: 7,
            time: '01:30 AM',
            selected: false
        },
        {
            id: 8,
            time: '01:45 AM',
            selected: false
        },
        {
            id: 9,
            time: '02:00 AM',
            selected: false
        },
    ])
    const [eveningTimeSlots, setEveningTimeSlots] = useState([
        {
            id: 1,
            time: '03:00 AM',
            selected: false
        },
        {
            id: 2,
            time: '03:15 AM',
            selected: false
        },
        {
            id: 3,
            time: '03:30 AM',
            selected: false
        },
        {
            id: 4,
            time: '03:45 AM',
            selected: false
        },
        {
            id: 5,
            time: '04:00 AM',
            selected: false
        },
        {
            id: 6,
            time: '04:15 AM',
            selected: false
        },
        {
            id: 7,
            time: '04:30 AM',
            selected: false
        },
        {
            id: 8,
            time: '04:45 AM',
            selected: false
        },
        {
            id: 9,
            time: '05:00 AM',
            selected: false
        },
    ])

    const updateSlot = (array, index) => {
        const arr = [...array]
        arr[index].selected = !arr[index].selected
        array === morningTimeSlots ? setMorningTimeSlots(arr) : array === afternoonTimeSlots ? setAfternoonTimeSlots(arr) : setEveningTimeSlots(arr)
    }

    return (
        <div className="nova-booking-date_comp_top_view">
            <h1>Select Date</h1>
            <div className='nova-booking-date_comp_date_top_view'>
                <div className='nova-booking-date_comp_date_view'>
                    <h2>Select date</h2>
                    <h3>{selectedDate.toString().slice(0, 11)}</h3>
                    <div className='nova-booking-date_comp_divider' />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar className='asdfsadfasf' onChange={(text) => setSelectedDate(text.$d)} />
                    </LocalizationProvider>
                    <div className=''></div>
                    <div className='nova-booking-date_comp_cancel_ok_button_view'>
                        <h2>Cancel</h2>
                        <h2>OK</h2>
                    </div>

                </div>
                <div className='nova-booking-date_comp_text_input_view'>
                    <div>
                        <TextInput type={'date'} title={'Pick date'} />
                    </div>
                </div>
                <div className='nova-booking-date_comp_slots_top_view'>
                    <div className='nova-booking-date_comp_selected_date_view'>
                        <img src={back} />
                        <h2>{selectedDate.toString().slice(0, 15)}</h2>
                        <img src={next} />
                    </div>
                    <div className='nova-booking-date_comp_slots_view'>
                        <div className='nova-booking-date_comp_slots_title_view'>
                            <h2>Morning</h2>
                            <h2>Afternoon</h2>
                            <h2>Evening</h2>
                        </div>
                        <div className='nova-booking-date_comp_single_slot_top_view'>
                            <div className='nova-booking-date_comp_single_slot_view'>
                                {morningTimeSlots.map((item, index) => {
                                    return (
                                        <div style={{ borderWidth: item.selected ? 1 : 0, backgroundColor: item.selected ? 'transparent' : '#FFC9E3' }} onClick={() => updateSlot(morningTimeSlots, index)}>
                                            <h3>{item.time}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='nova-booking-date_comp_single_slot_view'>
                                {afternoonTimeSlots.map((item, index) => {
                                    return (
                                        <div style={{ borderWidth: item.selected ? 1 : 0, backgroundColor: item.selected ? 'transparent' : '#FFC9E3' }} onClick={() => updateSlot(afternoonTimeSlots, index)}>
                                            <h3>{item.time}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='nova-booking-date_comp_single_slot_view'>
                                {eveningTimeSlots.map((item, index) => {
                                    return (
                                        <div style={{ borderWidth: item.selected ? 1 : 0, backgroundColor: item.selected ? 'transparent' : '#FFC9E3' }} onClick={() => updateSlot(eveningTimeSlots, index)}>
                                            <h3>{item.time}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default BookingDateComp
