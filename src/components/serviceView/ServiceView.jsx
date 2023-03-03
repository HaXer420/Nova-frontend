import React from 'react'
import './serviceView.css'

const ServiceView = (props) => {
    const { item } = props
    return (
        <div key={item?.id} className="nova-dashboard-single_service_view">
            <img onClick={props.onClick} alt='' src={item?.image} />
            <div onClick={props.onClick} className="nova-dashboard-single_service_title_view">
                <h2>{item?.title}</h2>
                <h3>{item?.price}</h3>
            </div>
            <h4 onClick={props.onClick}>{item?.des}</h4>
            <h3 style={{ paddingLeft: 10, cursor: 'pointer' }}>Book Now</h3>
            <div className="nova-dashboard-single_service_border_view" />
        </div>
    )
}

export default ServiceView
