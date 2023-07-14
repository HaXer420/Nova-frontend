import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation/Navigation";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  accessToken,
  cartProducts,
  cartServices,
  myInfo,
  userData,
} from "./redux/userDataSlice";

const App = () => {
  const dispatch = useDispatch();
  const userDataGet = useSelector((data) => data.userDataSlice.userData);
  window.addEventListener("beforeunload", () => {
    // Clear Redux store state
    if (userDataGet?.isTemp) {
      dispatch(cartProducts([]));
      dispatch(myInfo(null));
      dispatch(cartServices([]));
      dispatch(userData(null));
      dispatch(accessToken(""));
      // dispatch(refreshToken(""));
    }

    // console.log("window is closed");
  });
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <ToastContainer />
      </>
    </BrowserRouter>
  );
};

export default App;
