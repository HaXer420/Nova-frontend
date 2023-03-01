import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import './login.css'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="nova-login_main_view">
      <h1>Login</h1>
      <div className="nova-login_inputs_view">
        <TextInput title={'Email'} placeholder={'Your email'} />
        <TextInput type={!showPassword ? 'text' : 'password'} title={'Password'} eye eyeValue={showPassword} onClickEye={() => setShowPassword(!showPassword)} placeholder={'***********'} />
        <div className="nova-login_forgot_password_text_view">
          <h2 onClick={() => navigate('/forgotpassword')}>Forget Password?</h2>
        </div>
        <Button onClick={() => navigate('/', { replace: true })}>Login</Button>
        <div className="nova-login_dont_have_account_text_view">
          <h3 onClick={() => navigate('/signup')}>Don’t have an account? <span style={{ fontWeight: 700 }}>Sign Up</span></h3>
        </div>
      </div>
    </div>
  );
}
