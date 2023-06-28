import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { DeviceUUID } from "device-uuid";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginState } from "../../redux/loginSlice";
import Loader from "../../components/loader/loader";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify, RedNotify } from "../../helper/utility";
import { accessToken, refreshToken, userData } from "../../redux/userDataSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector((data) => data.userDataSlice.userData);

  const signInHit = (email, password) => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      let id = new DeviceUUID().get();
      localStorage.setItem("deviceId", id);
      deviceId = id;
    }
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
    let body = {
      email: email.toLowerCase(),
      password: password,
      device: { id: deviceId, deviceToken: "angg" },
    };
    callApi("POST", routes.signIn, body, setIsLoading, getRes, (error) => {});
  };

  const loginAsguest = () => {
    let getRes = (res) => {
      console.log("res of guestUser", res);
    };
    callApi(
      "POST",
      routes.guestUser,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    auth ? navigate("/") : navigate("/login");
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (val) => {
      signInHit(val.email, val.password);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Loader loading={isloading} />
      <div className="nova-login_main_view">
        {/* <Loader /> */}
        <h1>Login</h1>
        <div className="nova-login_inputs_view">
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
          <div className="nova-login_forgot_password_text_view">
            <h2 onClick={() => navigate("/")}>Go to Home?</h2>
            <h2 onClick={() => navigate("/forgotpassword")}>
              Forget Password?
            </h2>
          </div>
          <Button>Login</Button>
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
