import React from 'react'
import { logo } from '../../assets'
import './footer.css'

export default function Footer() {
    return (
        <div className='nova-footer_top_view'>
            <div className='nova-footer_contact_us-top_view'>
                <div className='nova-footer_contact_us_view'>
                    <h1>Contact Us</h1>
                    <h2>Did you got confused at anything?</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut facilisis. adipiscing ipsum loreym.</h3>
                </div>
                <div className='nova-footer_contact_us_form_top_view'>
                    <input placeholder='Enter your full name' />
                    <input placeholder='Enter your e-mail address' />
                    <input placeholder='Enter your phone number' />
                    <textarea placeholder='Enter your message' />
                    <div className='nova-footer_contact_us_form_button_top_view'>
                        <div className='nova-footer_contact_us_form_button_border_view' />
                        <div className='nova-footer_contact_us_form_button_main_view'>
                            <h3>Send Message</h3>
                        </div>

                    </div>
                </div>
            </div>
            <div className='nova-footer_detail_top_view'>
                <div className="nova-footer_detail_logo_top_view">
                    <img alt='' src={logo} />
                    <h1>Body that shines so bright! So Bright!!</h1>
                    <h2>We wish the whole lot of different experience with NOVA threading & Waxing.</h2>
                </div>
                <div className="nova-footer_detail_links_top_view">
                    <h1>Quick Links</h1>
                    <h2>Home</h2>
                    <h2>Services</h2>
                    <h2>Specials</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
                <div className="nova-footer_detail_socials_top_view">
                    <h1>Social</h1>
                    <h2>Instagram</h2>
                    <h2>Facebook</h2>
                    <h2>Twitter</h2>
                </div>
                <div className="nova-footer_detail_contacts_top_view">
                    <h1>Contacts</h1>
                    <h2><span >E-mail:</span> hello@NOVA.com</h2>
                    <h2><span >Phone :</span> +1 (456) 123 4567</h2>
                    <h2><span >Address :</span> No 25/134 Mainlande, Winstom, 14450, California, USA.</h2>
                </div>
            </div>
            <div className='nova-footer_divider' />
            <div className='nova-footer_bottom_view'>
                <p>© 2022-2023 All rights reserved | Designed by Nova</p>
            </div>
        </div>
    )
}
