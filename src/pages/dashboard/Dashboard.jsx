import React from "react";
import { Footer, NavBar, } from "../../components";
import './dashboard.css'

export default function Dashboard() {
  return (
    <div className="cactus-dashboard-main_container">
      <NavBar />
      <div className="cactus-dashboard-container">
        <Footer />
      </div>
    </div>
  );
}
