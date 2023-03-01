import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Dashboard />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.Signup />} />
      <Route path="/forgotpassword" element={<Pages.ForgotPassword />} />
      <Route path="/otpverification" element={<Pages.OtpVerification />} />
      <Route path="/updatepassword" element={<Pages.UpdatePassword />} />

    </Routes>
  );
};

export default Navigation;
