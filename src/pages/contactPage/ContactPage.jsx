import React from "react";
import { Button, Footer, NavBar, TextInputTwo, TopBar } from "../../components";
import './contactPage.css'

export default function ContactPage() {
  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-contact_page-main_view">
          <h1>Contact</h1>
          <div className="nova-contact_page_inputs_top_view">
            <TextInputTwo title={'Phone/Email'} placeholder={'Your email'} />
            <TextInputTwo textarea title={'Message'} placeholder={'Message'} />
            <div className="nova-contact_page_inputs_button_view">
              <Button>Send</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
