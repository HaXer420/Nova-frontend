import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { Button, Footer, NavBar, TextInputTwo, TopBar } from "../../components";
import "./contactPage.css";
import { GreenNotify } from "../../helper/utility";
import Loader from "../../components/loader/loader";

export default function ContactPage() {
  const [isloading, setIsLoading] = useState(false);
  const contactUsApi = (email, message, phone) => {
    // console.log("data", email, message, phone);
    let getRes = (res) => {
      console.log("res of contact us", res);
      if (res.status == 201) {
        GreenNotify("Your form is submitted successfully");
      }
    };
    callApi(
      "POST",
      routes.contactUs,
      { mail: email, message: message, phone: phone },
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      phone: "",
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
      contactUsApi(val.email, val.message, val.phone);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Loader loading={isloading} />
      <div className="nova-dashboard-main_container">
        <TopBar />
        <NavBar />
        <div className="nova-dashboard-container">
          <div className="nova-contact_page-main_view">
            <h1>Contact</h1>
            <div className="nova-contact_page_inputs_top_view">
              <TextInputTwo
                title={"Email"}
                placeholder={"Your email"}
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
              <TextInputTwo
                type="number"
                title={"Phone(Optional)"}
                placeholder={"Your Phone number"}
                id="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <TextInputTwo
                textarea
                title={"Message"}
                placeholder={"Message"}
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                error={
                  formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : null
                }
              />
              <div className="nova-contact_page_inputs_button_view">
                <Button>Send</Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </form>
  );
}
