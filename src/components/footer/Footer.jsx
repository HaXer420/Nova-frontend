import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { logo, tiktok, instagram, facebook, twitter } from "../../assets";
import "./footer.css";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import { GreenNotify, RedNotify } from "../../helper/utility";
import Loader from "../loader/loader";

export default function Footer({ setIsLoading }) {
  const navigate = useNavigate();

  const contactUsApi = (email, message) => {
    if (email == "") {
      return RedNotify("Enter email");
    }
    if (message == "") {
      return RedNotify("Write Message");
    }

    let getRes = (res) => {
      console.log("res of contact  us", res);
      if (res.status == 201) {
        GreenNotify("Your form is submitted successfully");
      }
    };
    callApi(
      "POST",
      routes.contactUs,
      { mail: email, message: message },
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      message: Yup.string()
        .min(5, "Should not accept less than 5 characters")
        .required("First name is required."),
    }),
    onSubmit: (val) => {
      contactUsApi(val.email, val.message);
    formik.resetForm();
    },
  });
  return (
    <div className="nova-footer_top_view">
      {/* {window.location.href === "http://localhost:3000/" && ( */}
      { (
        <form onSubmit={formik.handleSubmit}>
          <div className="nova-footer_contact_us-top_view">
            <div className="nova-footer_contact_us_view">
              <h1>Contact Us</h1>
              <h2>Did you got confused at anything?</h2>
              <h3>Please fill the form and just click&nbsp;
                <span style={{fontWeight: "bold"}}>"Send!"</span>
                {/* <span>!</span> */}
              </h3>
            </div>
            <div className="nova-footer_contact_us_form_top_view">
              <input placeholder="Enter your full name" />
              <input
                placeholder="Enter your e-mail address *"
                type="text"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <input placeholder="Enter your phone number" />
              <textarea
                placeholder="Enter your message *"
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <div className="nova-footer_contact_us_form_button_top_view">
                <div className="nova-footer_contact_us_form_button_border_view" />
                <button
                  type="submit"
                  className="nova-footer_contact_us_form_button_main_view"
                >
                  <h3>Send Message</h3>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      <div className="nova-footer_detail_top_view">
        <div className="nova-footer_detail_logo_top_view">
          <img alt="" src={logo} />
          <h1>Body that shines so bright! So Bright!!</h1>
          <h2>
            We wish the whole lot of different experience with NOVA threading &
            Waxing.
          </h2>
        </div>
        <div className="nova-footer_detail_links_top_view">
          <h1>Quick Links</h1>
          <h2 onClick={() => navigate("/")}>Home</h2>
          <h2 onClick={() => navigate("/services")}>Services</h2>
          <h2 onClick={() => navigate("/specials")}>Specials</h2>
          <h2 onClick={() => navigate("/aboutus")}>About</h2>
          <h2 onClick={() => navigate("/contactpage")}>Contact</h2>
        </div>
        <div className="nova-footer_detail_socials_top_view">
          <h1>Social</h1>
          <h2>
            <a href="https://www.instagram.com/novawaxing1/" target="_blank">
            <img src={instagram} alt="" />
            <span> Instagram</span>
            {/* <h1>Instagram</h1> */}
            </a>
          </h2>

          <h2>
            <a
              href="https://www.facebook.com/profile.php?id=100092507547391&mibextid=ZbWKwL"
              target="_blank"
            >
            <img src={facebook} alt="" />
            <span> Facebook</span>
            {/* <h1>Facebook</h1> */}
            </a>
          </h2>

          <h2>
            <a href="https://twitter.com/novawaxing1" target="_blank">
            <img src={twitter} alt="" />
            <span> Twitter</span>
            {/* <h1>Twitter</h1> */}
            </a>
          </h2>
          <h2>
            <a href="https://www.tiktok.com/@novawaxing1" target="_blank">
            <img src={tiktok} alt="" />
            <span> Tiktok</span>
            {/* <h1>Tiktok</h1> */}
            </a>
          </h2>
        </div>
        <div className="nova-footer_detail_contacts_top_view">
          <h1>Contacts</h1>
          <h2>
            <span>E-mail:</span> novawaxing1@gmail.com
          </h2>
          <h2>
            <span>Phone :</span> 678-404-5580
          </h2>
          <h2>
          <span>Address :</span> 875 Lawrenceville Suwanee Rd, #580 Lawrenceville, GA 30043
            {/* <span>Address :</span> 875 Lawrenceville-Suwanee Rd, Auburn GA 30011 */}
            {/* California, USA. */}
          </h2>
        </div>
      </div>
      <div className="nova-footer_divider" />
      <div className="nova-footer_bottom_view">
        <p>© 2022-2023 All rights reserved | Designed by Nova</p>
      </div>
    </div>
  );
}
