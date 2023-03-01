import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import './forgotPassword.css'

export default function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <div className="nova-forgot_main_view">
      <h1>Forgot Password</h1>
      <h5>Please enter your Email. An OTP will be sent to your email.</h5>
      <div className="nova-forgot_inputs_view">
        <TextInput title={'Email'} placeholder={'Your email'} />
        <div className="nova-forgot_button_view">
          <Button onClick={() => navigate('/otpverification', { state: { screen: 'forgotpassword' } })}>Send Code</Button>
        </div>
        <div className="nova-forgot_dont_have_account_text_view">
          <h3>Don’t have an account?<span style={{ fontWeight: 700 }}> Sign Up</span></h3>
        </div>
      </div>
    </div>
  );
}
