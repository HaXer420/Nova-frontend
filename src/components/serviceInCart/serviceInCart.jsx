import React from "react";
import { calenderTwo, clock, squareTick, uncheck, waxing } from "../../assets";
import dayjs from "dayjs";

const ServiceInCart = ({ item, index, onSelect, check }) => {
  return (
    <>
      <div className="nova-booking-confirm_comp_service_top_view">
        <div className="nova-booking-confirm_comp_service_image_view">
          <img src={item?.service?.photos[0]} />
        </div>
        <div className="nova-booking-confirm_comp_service_detail_view">
          <div className="nova-booking-confirm_comp_service_title_view">
            {item?.options?.map((val) => (
              <h2>
                {item?.service?.title} | {val?.name} | {val?.time} minute
              </h2>
            ))}
            <div className="nova-booking-confirm_comp_service_date_view">
              <img src={calenderTwo} />
              <h3>{dayjs(item?.starttime).format("ddd, MMM, DD, YYYY")}</h3>
              <img src={clock} />
              <h4>{dayjs(item?.starttime).format("hh:mm A")}</h4>
            </div>
          </div>
          <div className="nova-booking-confirm_comp_service_price_view">
            {check && (
              <div>
                {item.select == false ? (
                  <img onClick={onSelect} src={uncheck} alt="uncheck-icon" />
                ) : (
                  <img
                    onClick={onSelect}
                    style={{ cursor: "pointer" }}
                    src={squareTick}
                  />
                )}
              </div>
            )}

            <h5>${item.amount}</h5>
          </div>
        </div>
      </div>
      <div className="nova-booking-confirm_comp_service_detail_divider" />
    </>
  );
};

export default ServiceInCart;
