import React from 'react'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='alpha-input_two_container' style={props.style} >
            <p>{props.title}</p>
            <div className='alpha-input_two_container_input' style={props.inputStyle}>
                <input disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
            </div>


        </div>
    )
}

export default TextInput

