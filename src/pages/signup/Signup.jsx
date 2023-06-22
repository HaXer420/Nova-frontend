import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { edit } from "../../assets";
import { Button, TextInput } from "../../components";
import "./signup.css";
import moment from "moment/moment";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import Loader from "../../components/loader/loader";
import { GreenNotify, notify, RedNotify, upload } from "../../helper/utility";

export default function Signup() {
  const navigate = useNavigate();
  const [image, setImage] = useState(
    "https://novathreadbucket.s3.amazonaws.com/nova-app-1685176470232-dummy.PNG"
  );
  const [isloading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let faqDummy =
    "https://novathreadbucket.s3.amazonaws.com/nova-app-1685176470232-dummy.PNG";

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

  const signUpData = (
    profileName,
    email,
    firstName,
    lastName,
    mobileNumber,
    dateOfBirth,
    password
  ) => {
    let body = {
      firstname: firstName,
      lastname: lastName,
      username: profileName,
      email: email,
      dob: dateOfBirth,
      image: image,
      number: mobileNumber,
      password: password,
    };

    let getData = (res) => {
      if (res.status == 200) {
        let getRes = (res) => {
          console.log("res of send otp", res);
          if (res.status == 200) {
            GreenNotify("OTP send successfully");
            navigate("/otpverification", {
              state: {
                email: email,
                type: "emailVerify",
              },
            });
          } else {
            RedNotify(res.message);
          }
        };
        callApi(
          "POST",
          routes.sendOTP,
          { email: email },
          setIsLoading,
          getRes,
          (error) => {}
        );

        //GreenNotify("Sign up successfully!");
      } else if (res.message) {
        RedNotify(res.message);
      }
    };

    callApi("POST", routes.signUp, body, setIsLoading, getData, (error) => {});
  };

  const formik = useFormik({
    initialValues: {
      profileName: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      dateOfBirth: "",
    },
    validationSchema: Yup.object({
      profileName: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("Profile name is required."),
      firstName: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("First name is required."),
      lastName: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("Last name is required."),
      mobileNumber: Yup.number()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid mobile number')
        .required("Mobile Number is required.")
        .positive()
        .integer()
        .max(9999999999, "Phone Number limit is 10")
        .typeError("Mobile Number must be a number."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      password: Yup.string()
        .max(15, "Must be long 15 characters or less")
        .min(
          6,
          ({ min }) => `Password must be at least ${min} characters long.`
        )
        .required("Password is required."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match.")
        .required("Confirm password is required.")
        .typeError("Confirm password is not matched."),
      dateOfBirth: Yup.string()
        .nullable()
        //
        .required("Please enter your age"),
    }),
    onSubmit: (val) => {
      signUpData(
        val.profileName,
        val.email,
        val.firstName,
        val.lastName,
        val.mobileNumber,
        val.dateOfBirth,
        val.password
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="nova-signup_main_view">
        <Loader loading={isloading} />

        <h1>Sign Up</h1>
        <div className="nova-signup_profile_top_view">
          <div className="nova-signup_profile_border_view" />
          <div
            onClick={() => uploadImage()}
            className="nova-signup_profile_main_view"
          >
            <img
              src={image === "" ? faqDummy : image}
              className={"nova-signup_profile_image"}
            />
            <div className="nova-signup_profile_edit_view">
              <img src={edit} className={"nova-signup_profile_edit_icon"} />
            </div>
            <input
              onChange={upload((url) => setImage(url), setIsLoading)}
              id="selectFile"
              type={"file"}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="nova-signup_inputs_top_view">
          <div className="nova-signup_input_view">
            <TextInput
              title={"Profile Name"}
              type="text"
              id="profileName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profileName}
              placeholder={"eg: abc123"}
              error={
                formik.touched.profileName && formik.errors.profileName
                  ? formik.errors.profileName
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              title={"Email"}
              placeholder={"Your email"}
              type="text"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              title={"First Name"}
              placeholder={"Your name"}
              type="text"
              id="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              title={"Last Name"}
              placeholder={"last name"}
              type="text"
              id="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              title={"Number"}
              placeholder={"eg: +1 7526 55 8 "}
              type="number"
              id="mobileNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobileNumber}
              error={
                formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? formik.errors.mobileNumber
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              title={"Date of Birth"}
              type={"date"}
              placeholder={"Dec 12, 1996"}
              id="dateOfBirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              error={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  ? formik.errors.dateOfBirth
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              eye
              eyeValue={showPassword}
              onClickEye={() => setShowPassword(!showPassword)}
              type={!showPassword ? "text" : "password"}
              title={"Password"}
              placeholder={"***************"}
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />
          </div>
          <div className="nova-signup_input_view">
            <TextInput
              eye
              eyeValue={showConfirmPassword}
              onClickEye={() => setShowConfirmPassword(!showConfirmPassword)}
              type={!showConfirmPassword ? "text" : "password"}
              title={"Confirm Password"}
              placeholder={"***************"}
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : null
              }
            />
          </div>
        </div>
        <Button

        // onClick={() =>
        //   navigate("/otpverification", { state: { screen: "signup" } })
        // }
        >
          Send OTP
        </Button>
      </div>
    </form>
  );
}
