import React, { Children, useState } from "react";
import { circleClose, next } from "../../assets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./bookingStartComp.css";

const BookingStartComp = ({
  appointmentItems,
  selectValue,
  onClickNext,
  selectServices,
}) => {
  return (
    <div className="nova-booking-start_comp_top_view">
      <h1>What is your appointment for?</h1>

      {appointmentItems.map((parentItem, mainIndex) => (
        <Accordion className="accordion-main-container">
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <h5>{parentItem?.title}</h5>
          </AccordionSummary>

          <AccordionDetails className="accordion-detail-container">
            {parentItem?.options?.map((childItem, index) => (
              <div
                onClick={() => selectValue(parentItem, childItem, mainIndex)}
                key={childItem.id}
                style={{
                  backgroundColor: selectServices[parentItem?._id]?.find(
                    (item) => item?._id == childItem?._id
                  )
                    ? "#EE509C"
                    : "#ffffff",
                }}
                className="nova-booking-start_comp_item_view"
              >
                <h2
                  style={{
                    color: selectServices[parentItem?._id]?.find(
                      (item) => item?._id == childItem?._id
                    )
                      ? "#ffffff"
                      : "#292929",
                  }}
                >
                  {childItem.name}
                </h2>
                {childItem?.time && (
                  <h2
                    style={{
                      color: selectServices[parentItem?._id]?.find(
                        (item) => item?._id == childItem?._id
                      )
                        ? "#ffffff"
                        : "#292929",
                    }}
                  >
                    {childItem?.time} minute
                  </h2>
                )}
                {childItem?.price !== undefined && (
                  <h2
                    style={{
                      color: selectServices[parentItem?._id]?.find(
                        (item) => item?._id == childItem?._id
                      )
                        ? "#ffffff"
                        : "#292929",
                    }}
                  >
                    ${childItem?.price}
                  </h2>
                )}
                {selectServices[parentItem?._id]?.find(
                  (item) => item?._id == childItem?._id
                ) ? (
                  <img src={circleClose} />
                ) : (
                  <div style={{ width: "2.5rem" }} />
                )}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}

      <div
        onClick={onClickNext}
        className="nova-booking-start_comp_next_button_view"
      >
        <h3>Next</h3>
        <img src={next} />
      </div>
    </div>
  );
};

export default BookingStartComp;
