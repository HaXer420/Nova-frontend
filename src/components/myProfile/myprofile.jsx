import React from "react";
import { useFormik } from "formik";

import Button from "../button/Button";
import TextInputProfile from "../textInputProfile/textInputProfile";
import "./myProfile.css";
//PK93ABPA0010045931390016
const Myprofile = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      profileName: "Olivia Stephen",
      firstName: "Olivia",
      lastName: "Stephen",
      email: "olivia321@gmail.com",
      phoneNumber: +1687259259,
      password: "********",
      date: "2023-03-10",
    },

    onSubmit: (val) => {
      console.log(val);
    },
  });
  return (
    <div className="nova-comp-my_profile-main-main-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="nova-comp-my_profile-main-container">
          <TextInputProfile
            title={"Profile Name"}
            type={"text"}
            id="profileName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profileName}
          />
          <TextInputProfile
            title={"First Name"}
            type={"text"}
            id="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <TextInputProfile
            title={"Last Name"}
            type={"text"}
            id="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <TextInputProfile
            title={"Email"}
            type={"email"}
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <TextInputProfile
            title={"Phone Number"}
            type={"number"}
            id="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          <TextInputProfile
            title={"Password"}
            type={"password"}
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <TextInputProfile
            title={"Date of Birth"}
            type={"date"}
            id="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          <div style={{ marginTop: "4rem" }}>
            <Button>Update</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Myprofile;
