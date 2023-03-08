import React from 'react'
import { hide, show } from '../../assets'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='nova-input_container' >
            <p>{props.title}</p>
            <div style={props.style} className='nova-input_container_input'>
                <input disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                {props.eye &&
                    <img onClick={props.onClickEye} src={props.eyeValue ? hide : show} />
                }
            </div>
        </div>
    )
}

export default TextInput

