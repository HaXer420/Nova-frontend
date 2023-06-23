import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { Button, TextInput } from "../../components";
import { GreenNotify, RedNotify } from "../../helper/utility";
import "./forgotPassword.css";
import Loader from "../../components/loader/loader";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);

  const apiHit = (email) => {
    let getRes = (res) => {
      if (res.status == 200) {
        GreenNotify("OTP send successfully");
        navigate("/otpverification", {
          state: {
            email: email,
            type: "passwordRest",
          },
        });
      } else {
        RedNotify(res.message);
      }
    };
    callApi(
      "POST",
      routes.forgotPassword,
      { email: email },
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
    }),
    onSubmit: (val) => {
      apiHit(val.email);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Loader loading={isloading} />
      <div className="nova-forgot_main_view">
        <h1>Forgot Password</h1>
        <h4>Please enter your Email. An OTP will be sent to your email.</h4>
        <div className="nova-forgot_inputs_view">
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
          <div className="nova-forgot_button_view">
            <Button>Send Code</Button>
          </div>
          <div
            onClick={() => navigate("/signup")}
            className="nova-forgot_dont_have_account_text_view"
          >
            <h3>
              Don’t have an account?
              <span style={{ fontWeight: 700 }}> Sign Up</span>
            </h3>
          </div>
        </div>
      </div>
    </form>
  );
}
