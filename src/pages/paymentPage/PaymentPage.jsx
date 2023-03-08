import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { back, next, roundTick } from "../../assets";
import { Button, CongratesModel, Footer, NavBar, TextInput, TopBar } from "../../components";
import './paymentPage.css'
export default function PaymentPage() {
  const navigate = useNavigate()
  const [showModel, setShowModel] = useState(false)
  const [selected, setSelected] = useState({ id: 1 })
  const paymentMethodArray = [
    {
      id: 1,
      title: 'Paypal',
    },
    {
      id: 2,
      title: 'Venmo',
    },
    {
      id: 3,
      title: 'CashApp',
    },
    {
      id: 4,
      title: 'Debit Card',
    },
    {
      id: 5,
      title: 'Credit Card',
    },
    {
      id: 6,
      title: 'Zelle',
    },
    {
      id: 7,
      title: 'Pay at Store',
    },

  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      {showModel && <CongratesModel onClick={() => navigate('/', { replace: true })} />}
      <div className="nova-dashboard-container">
        <div className="nova-payment-main_container">
          <h1>Choose Payment Method</h1>
          <div className="nova-payment_container">
            <div className="nova-payment_payment_methods_view">
              <h2>Select Payment Method</h2>
              {paymentMethodArray.map((item) => {
                return (
                  <div onClick={() => setSelected(item)} className="nova-payment_payment_single_method_view">
                    {item.id === selected.id ?
                      <img src={roundTick} />
                      :
                      <div />
                    }
                    <h5>{item.title}</h5>
                  </div>
                )
              })}
            </div>
            <div className="nova-payment_inputs_top_view">
              <div className="nova-payment_inputs_divider_view">
                <div className="nova-payment_inputs_divider_one" />
                <div className="nova-payment_inputs_divider_arrow_view">
                  <img src={next} />
                </div>
                <div className="nova-payment_inputs_divider_two" />
              </div>
              <div className="nova-payment_inputs_view">
                <TextInput style={{ borderColor: '#EE509C' }} placeholder={'First Name'} title={'First Name'} />
                <TextInput style={{ borderColor: '#EE509C' }} placeholder={'Last Name'} title={'Last Name'} />
                <TextInput style={{ borderColor: '#EE509C' }} placeholder={'----- ---- ---- ----'} title={'Card Number'} />
                <div className="nova-payment_small_inputs_top_view">
                  <div className="nova-payment_small_inputs_view">
                    <TextInput style={{ borderColor: '#EE509C' }} placeholder={'mm/yy'} title={'Exp. Date'} />
                  </div>
                  <div className="nova-payment_small_inputs_view">
                    <TextInput style={{ borderColor: '#EE509C' }} placeholder={'xyz'} title={'CVV'} />
                  </div>
                </div>
                <Button onClick={() => setShowModel(true)}>Pay Now</Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
