import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import Button from "../button/Button";
import TextInputProfile from "../textInputProfile/textInputProfile";
import "./myProfile.css";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import Loader from "../loader/loader";
import { GreenNotify } from "../../helper/utility";
import { userData } from "../../redux/userDataSlice";
import moment from "moment";

const Myprofile = ({ setIsLoading }) => {
  const dispatch = useDispatch();
  const userDataGet = useSelector((data) => data.userDataSlice.userData);

  const upDateApi = (firstName, lastName, profileName, mobileNumber, dob) => {
    let body = {
      firstname: firstName,
      lastname: lastName,
      username: profileName,
      dob: dob,
      number: mobileNumber,
    };
    let getData = (res) => {
      console.log("res of update data", res);
      if (res.status == 200) {
        GreenNotify("Profile is updated successfully");
        dispatch(userData(res?.data?.data));
      }
    };
    callApi(
      "PATCH",
      `${routes.updateUser}/${userDataGet?._id}`,
      body,
      setIsLoading,
      getData,
      (error) => {
        console.log("error", error);
      }
    );
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      profileName: userDataGet?.username,
      firstName: userDataGet?.firstname,
      lastName: userDataGet?.lastname,
      email: userDataGet?.email,
      phoneNumber: userDataGet?.number,
      password: "********",
      date: moment(userDataGet?.dob).format("yyyy-MM-DD"),
      // date: "2023-12-05",
    },
    validate: (values) => {
      const errors = {};
      const maxLength = 10;

      if (values.phoneNumber.length >= maxLength) {
        errors.phoneNumber = `Maximum length is ${maxLength}`;
      }

      return errors;
    },

    onSubmit: (val) => {
      upDateApi(
        val.firstName,
        val.lastName,
        val.profileName,
        val.phoneNumber,
        val.date
      );
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
            disabled={true}
          />
          <TextInputProfile
            title={"Phone Number"}
            type={"number"}
            id="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />

          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div>{formik.errors.phoneNumber}</div>
          )}
          {/* <TextInputProfile
            
            title={"Password"}
            type={"password"}
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          /> */}
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
