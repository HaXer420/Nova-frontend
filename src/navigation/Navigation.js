import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages";
import PrivateRoute from "./protected-route";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Dashboard />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.Signup />} />
      <Route path="/forgotpassword" element={<Pages.ForgotPassword />} />
      <Route path="/otpverification" element={<Pages.OtpVerification />} />
      <Route path="/updatepassword" element={<Pages.UpdatePassword />} />
      <Route path="/aboutus" element={<Pages.AboutUs />} />
      <Route path="/locationpage" element={<Pages.LocationPage />} />
      <Route path="/services" element={<Pages.Services />} />
      <Route path="/specials" element={<Pages.Specials />} />
      <Route path="/contactpage" element={<Pages.ContactPage />} />
      <Route path="/reviewspage" element={<Pages.ReviewsPage />} />
      <Route path="/Sservicedetail" element={<Pages.ServiceDetail />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Pages.Profile />
          </PrivateRoute>
        }
      />

      <Route path="/bookingpage" element={<Pages.BookingPage />} />
      <Route
        path="/paymentpage"
        element={
          <PrivateRoute>
            <Pages.PaymentPage />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<Pages.Products />} />
      <Route path="/product" element={<Pages.Product />} />
      <Route path="/checkout" element={<Pages.Checkout />} />
    </Routes>
  );
};

export default Navigation;
