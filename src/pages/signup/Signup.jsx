import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { edit, faqDummy } from "../../assets";
import { Button, TextInput } from "../../components";
import './signup.css'

export default function Signup() {
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const uploadImage = () => {
    document.getElementById("selectFile").click();
  };

  const onChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  return (
    <div className="nova-signup_main_view">
      <h1>Sign Up</h1>
      <div className='nova-signup_profile_top_view'>
        <div className='nova-signup_profile_border_view' />
        <div onClick={() => uploadImage()} className='nova-signup_profile_main_view'>
          <img src={image === "" ? faqDummy : image} className={'nova-signup_profile_image'} />
          <div className="nova-signup_profile_edit_view">
            <img src={edit} className={'nova-signup_profile_edit_icon'} />
          </div>
          <input
            onChange={(e) => onChange(e.target.files[0])}
            id="selectFile"
            type={"file"}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="nova-signup_inputs_top_view">
        <div className="nova-signup_input_view">
          <TextInput title={'Profile Name'} placeholder={'eg: abc123'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput title={'Email'} placeholder={'Your email'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput title={'First Name'} placeholder={'Your name'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput title={'Last Name'} placeholder={'last name'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput title={'Number'} placeholder={'eg: +1 7526 55 8 '} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput title={'Date of Birth'} type={'date'} placeholder={'Dec 12, 1996'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput eye eyeValue={showPassword} onClickEye={() => setShowPassword(!showPassword)} type={!showPassword ? 'text' : 'password'} title={'Password'} placeholder={'***************'} />
        </div>
        <div className="nova-signup_input_view">
          <TextInput eye eyeValue={showConfirmPassword} onClickEye={() => setShowConfirmPassword(!showConfirmPassword)} type={!showConfirmPassword ? 'text' : 'password'} title={'Confirm Password'} placeholder={'***************'} />
        </div>
      </div>
      <Button onClick={() => navigate('/otpverification', { state: { screen: 'signup' } })}>Send OTP</Button>
    </div>
  );
}
