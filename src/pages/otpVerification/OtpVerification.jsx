import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import './otpVerification.css'

export default function OtpVerification() {
  const { state } = useLocation();
  const navigate = useNavigate()

  return (
    <div className="nova-forgot_main_view">
      <h1>OTP Verification</h1>
      <h5>Please enter the OTP sent at <span style={{ fontWeight: 700 }}>ase123@gmail.com</span></h5>
      <div className="nova-forgot_inputs_view">
        <TextInput title={'OTP'} placeholder={'Enter OTP'} />
        <div className="nova-forgot_button_view">
          <Button onClick={() => state?.screen === 'signup' ? navigate('/', { replace: true }) : navigate('/updatepassword')}>Confirm</Button>
        </div>
        <div className="nova-forgot_dont_have_account_text_view">
          <h3>Don’t have an account?<span style={{ fontWeight: 700 }}> Sign Up</span></h3>
        </div>
      </div>
    </div>
  );
}
