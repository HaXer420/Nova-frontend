import React from 'react'
import { cross, reward } from '../../assets'
import './congratesModel.css'

export default function CongratesModel(props) {
    return (
        <div className="nova-congrates_model_top_view">
            <div className='nova-congrates_model_view'>
                <div className='nova-congrates_model_close_view'>
                    <img onClick={props.onClick} src={cross} />
                </div>
                <div className='nova-congrates_model_detail_view'>
                    <img src={reward} />
                    <h1>Congratulations</h1>
                    <h2>You have earned</h2>
                    <h3>5 Points</h3>
                    <h2>Do you want to see our products?</h2>
                </div>
            </div>
        </div >
    )
}

