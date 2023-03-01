import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <div className='nova-button_top_view' >
            <div className='nova-button_border_view' />
            <div onClick={props.onClick} className='nova-button_main_view'>
                <h3>{props.children}</h3>
            </div>
        </div>
    )
}
