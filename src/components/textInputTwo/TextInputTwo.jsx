import React from 'react'
import './textInputTwo.css'

const TextInputTwo = (props) => {
    return (
        <div className='nova-input_two_container' >
            <p>{props.title}</p>
            <div className='nova-input_two_container_input'>
                {props.textarea ?
                    <textarea disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                    :
                    <input pla disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                }
            </div>
        </div>
    )
}

export default TextInputTwo

