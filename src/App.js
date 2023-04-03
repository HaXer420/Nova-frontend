import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation/Navigation";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
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
