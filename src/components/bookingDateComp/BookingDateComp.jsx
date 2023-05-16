import React, { useState } from "react";
import { back, next } from "../../assets";
import "./bookingDateComp.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import TextInput from "../textInput/TextInput";
import TextInputTwo from "../textInputTwo/TextInputTwo";
import dayjs from "dayjs";
import moment from "moment/moment";

const morningSlot = [
  {
    id: 1,
    time: "10:00 AM",
    selected: false,
    type: "morning",
  },
  {
    id: 2,
    time: "10:30 AM",
    selected: false,
    type: "morning",
  },
  {
    id: 3,
    time: "11:00 AM",
    selected: false,
    type: "morning",
  },
  {
    id: 4,
    time: "11:30 AM",
    selected: false,
    type: "morning",
  },
  {
    id: 5,
    time: "11:30 AM",
    selected: false,
    type: "morning",
  },
];

const afternoonSlot = [
  {
    id: 1,
    time: "12:00 PM",
    selected: false,
    type: "afternoon",
  },
  {
    id: 2,
    time: "12:30 PM",
    selected: false,
    type: "afternoon",
  },
  {
    id: 3,
    time: "01:00 PM",
    selected: false,
    type: "afternoon",
  },
  {
    id: 4,
    time: "01:30 PM",
    selected: false,
    type: "afternoon",
  },
  {
    id: 5,
    time: "02:00 PM",
    selected: false,
    type: "afternoon",
  },
  {
    id: 6,
    time: "02:30 PM",
    selected: false,
    type: "afternoon",
  },
];

const eveningSlot = [
  {
    id: 1,
    time: "03:00 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 2,
    time: "03:30 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 3,
    time: "04:30 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 4,
    time: "05:00 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 5,
    time: "06:00 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 6,
    time: "06:30 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 7,
    time: "07:00 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 8,
    time: "07:30 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 9,
    time: "08:00 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 9,
    time: "08:30 PM",
    selected: false,
    type: "evening",
  },
  {
    id: 9,
    time: "09:00 PM",
    selected: false,
    type: "evening",
  },
];

const BookingDateComp = (props) => {
  return (
    <div className="nova-booking-date_comp_top_view">
      <h1>Select Date</h1>
      <div className="nova-booking-date_comp_date_top_view">
        <div className="nova-booking-date_comp_date_view">
          <h2>Select date</h2>
          <h3>{moment(props.selectedDate).format("ddd MMM DD")}</h3>
          <div className="nova-booking-date_comp_divider" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              disablePast={true}
              className="asdfsadfasf"
              onChange={(text) => {
                props.setSelectedDate(text.$d);
                console.log("date", text);
              }}
            />
          </LocalizationProvider>
          <div className=""></div>
          <div className="nova-booking-date_comp_cancel_ok_button_view">
            <h2>Cancel</h2>
            <h2>OK</h2>
          </div>
        </div>
        <div className="nova-booking-date_comp_text_input_view">
          <div>{/* <TextInput type={"date"} title={"Pick date"} /> */}</div>
        </div>
        <div className="nova-booking-date_comp_slots_top_view">
          <div className="nova-booking-date_comp_selected_date_view">
            <img src={back} />
            <h2>{moment(props.selectedDate).format("ddd MMM DD, YYYY")}</h2>
            <img src={next} />
          </div>
          <div className="nova-booking-date_comp_slots_view">
            <div className="nova-booking-date_comp_slots_title_view">
              <h2>Morning</h2>
              <h2>Afternoon</h2>
              <h2>Evening</h2>
            </div>
            <div className="nova-booking-date_comp_single_slot_top_view">
              <div className="nova-booking-date_comp_single_slot_view">
                {morningSlot.map((item, index) => {
                  return (
                    <div
                      style={{
                        borderWidth:
                          item.id == props.morningTimeSlots.id ? 1 : 0,
                        backgroundColor:
                          item.id == props.morningTimeSlots.id
                            ? "transparent"
                            : "#FFC9E3",
                      }}
                      onClick={() => props.updateSlot(item, index)}
                    >
                      <h3>{item.time}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="nova-booking-date_comp_single_slot_view">
                {afternoonSlot.map((item, index) => {
                  return (
                    <div
                      style={{
                        borderWidth:
                          item.id == props.afternoonTimeSlots.id ? 1 : 0,
                        backgroundColor:
                          item.id == props.afternoonTimeSlots.id
                            ? "transparent"
                            : "#FFC9E3",
                      }}
                      onClick={() => props.updateSlot(item, index)}
                    >
                      <h3>{item.time}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="nova-booking-date_comp_single_slot_view">
                {eveningSlot.map((item, index) => {
                  return (
                    <div
                      style={{
                        borderWidth:
                          item.id == props.eveningTimeSlots.id ? 1 : 0,
                        backgroundColor:
                          item.id == props.eveningTimeSlots.id
                            ? "transparent"
                            : "#FFC9E3",
                      }}
                      onClick={() => props.updateSlot(item, index)}
                    >
                      <h3>{item.time}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nova-booking-service_comp_button_top_view">
        <div
          onClick={props.onClickBack}
          className="nova-booking-service_comp_previous_button_view"
        >
          <img src={back} />
          <h3>Prevoious</h3>
        </div>
        <div
          onClick={props.onClickNext}
          className="nova-booking-service_comp_previous_button_view"
        >
          <h3>Next</h3>
          <img src={next} />
        </div>
      </div>
    </div>
  );
};

export default BookingDateComp;
