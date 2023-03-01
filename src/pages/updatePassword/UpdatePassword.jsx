import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import './updatePassword.css'

export default function UpdatePassword() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="nova-login_main_view">
      <h1>Reset Password</h1>
      <div className="nova-login_inputs_view">
        <TextInput eye eyeValue={showPassword} onClickEye={() => setShowPassword(!showPassword)} type={!showPassword ? 'text' : 'password'} title={'New Password'} placeholder={'***************'} />
        <TextInput eye eyeValue={showConfirmPassword} onClickEye={() => setShowConfirmPassword(!showConfirmPassword)} type={!showConfirmPassword ? 'text' : 'password'} title={'Confirm Password'} placeholder={'***************'} />
        <div className="nova-login_forgot_password_text_view">
        </div>
        <Button onClick={() => navigate('/login', { replace: true })}>Reset Password</Button>
        <div className="nova-login_dont_have_account_text_view">
          <h3 onClick={() => navigate('/signup')}>Don’t have an account? <span style={{ fontWeight: 700 }}>Sign Up</span></h3>
        </div>
      </div>
    </div>
  );
}
