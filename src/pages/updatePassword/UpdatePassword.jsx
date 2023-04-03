import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from "../../components";
import "./updatePassword.css";
import { GreenNotify, RedNotify } from "../../helper/utility";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import Loader from "../../components/loader/loader";

export default function UpdatePassword() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const passwordRestHit = (password) => {
    let getRes = (res) => {
      console.log("res of update password", res);
      if (res.status == 200) {
        GreenNotify(res.message);
        navigate("/login");
      } else {
        RedNotify(res.message);
      }
    };

    let body = {
      email: state.email,
      password: password,
      otp: state.otp,
    };
    callApi(
      "PATCH",
      routes.verifyOTPresetPassword,
      body,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (val) => {
      passwordRestHit(val.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Loader loading={isloading} />
      <div className="nova-login_main_view">
        <h1>Reset Password</h1>
        <div className="nova-login_inputs_view">
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
          <div className="nova-login_forgot_password_text_view"></div>
          <Button>Reset Password</Button>
          <div className="nova-login_dont_have_account_text_view">
            <h3 onClick={() => navigate("/signup")}>
              Don’t have an account?{" "}
              <span style={{ fontWeight: 700 }}>Sign Up</span>
            </h3>
          </div>
        </div>
      </div>
    </form>
  );
}
