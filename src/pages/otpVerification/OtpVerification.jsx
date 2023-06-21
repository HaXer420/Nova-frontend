import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DeviceUUID } from "device-uuid";

import { Button, TextInput } from "../../components";
import "./otpVerification.css";
import Loader from "../../components/loader/loader";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify, RedNotify } from "../../helper/utility";
import { accessToken, refreshToken, userData } from "../../redux/userDataSlice";

export default function OtpVerification() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);

  const OTPHit = (otp) => {
    if (state.type == "emailVerify") {
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        let id = new DeviceUUID().get();
        localStorage.setItem("deviceId", id);
        deviceId = id;
      }
      let body = {
        email: state?.email,
        otp: otp,
        device: { id: deviceId, deviceToken: "angg" },
      };
      let getRes = (res) => {
        if (res.status == 200) {
          dispatch(userData(res?.data?.user));
          dispatch(accessToken(res?.data?.token));
          dispatch(refreshToken(res?.data?.refreshToken));
          GreenNotify(res.message);
          navigate("/", { replace: true });
        } else {
          RedNotify(res.message);
        }
      };
      callApi(
        "POST",
        routes.verifyOTP,
        body,
        setIsLoading,
        getRes,
        (error) => {}
      );
    } else {
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        let id = new DeviceUUID().get();
        localStorage.setItem("deviceId", id);
        deviceId = id;
      }
      let body = {
        email: state?.email,
        otp: otp,
        device: { id: deviceId, deviceToken: "angg" },
      };
      let getRes = (res) => {
        if (res.status == 200) {
          GreenNotify(res.message);
          navigate("/updatepassword", {
            state: {
              email: state.email,
              otp: otp,
            },
          });
        } else {
          RedNotify(res.message);
        }
      };
      callApi(
        "POST",
        routes.verifyOTP,
        body,
        setIsLoading,
        getRes,
        (error) => {}
      );
    }
  };

  const resendOTP = () => {
    let getRes = (res) => {
      console.log("res of send otp", res);
      if (res.status == 200) {
        GreenNotify("OTP send successfully");
      } else {
        RedNotify(res.message);
      }
    };
    callApi(
      "POST",
      routes.sendOTP,
      { email: state?.email },
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.number()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid mobile number')
        .required("OTP is required.")
        .positive()
        .integer()
        .max(9999, "OTP limit is 4")
        .typeError("OTP must be a number."),
    }),
    onSubmit: (val) => {
      OTPHit(val.otp);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Loader loading={isloading} />
      <div className="nova-forgot_main_view">
        <h1>OTP Verification</h1>
        <h4>
          Please enter the OTP sent at{" "}
          <span style={{ fontWeight: 700 }}>{state?.email}</span>
        </h4>

        <div className="nova-forgot_inputs_view">
          <TextInput
            type={"number"}
            title={"OTP"}
            placeholder={"Enter OTP"}
            id="otp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.otp}
            error={
              formik.touched.otp && formik.errors.otp ? formik.errors.otp : null
            }
          />
          <div className="nova-forgot_dont_have_account_text_view">
            <h3 onClick={() => resendOTP()}>
              Resend
              <span style={{ fontWeight: 700 }}> OTP</span>
            </h3>
          </div>
          <div className="nova-forgot_button_view">
            <Button
            // onClick={() =>
            //   state?.screen === "signup"
            //     ? navigate("/", { replace: true })
            //     : navigate("/updatepassword")
            // }
            >
              Confirm
            </Button>
          </div>
          <div className="nova-forgot_dont_have_account_text_view">
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
