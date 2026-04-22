import React from 'react'

import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">

        <p className="footer-touch">Also get in touch</p>

        <p className="footer-contact">e: info@novo.sa</p>
        <p className="footer-contact">t:  +966 11 211 390</p>
        <p className="footer-contact">m: +966 575 77 6888</p>

        <p className="footer-contact">novo-sa.com</p>

        <p className="footer-address">
          4658 King Abdulaziz Road, Al Rabeeh,<br />
          7542, Riyadh 13315<br />
          Saudi Arabia
        </p>

        <img src={Logo} className="footer-logo" />

      </div>

      <div className="footer-divider" />

      <div className="footer-right">

        <h2 className="footer-heading">Register your inteest</h2>
        <p className="footer-subheading">Construction commencing during 2023 earthworks. season.</p>

        <div className="footer-field">
          <input type="text" placeholder="e.g. Mohammed" className="footer-input" />
          <label className="footer-label">YOUR NAME</label>
        </div>

        <div className="footer-field">
          <input type="email" placeholder="e.g. mohammed@gmail.com" className="footer-input" />
          <label className="footer-label">YOUR E-MAIL</label>
        </div>

        <div className="footer-field">
          <input type="text" placeholder="e.g. Hello!" className="footer-input" />
          <label className="footer-label">YOUR MESSAGES</label>
        </div>

        <button className="footer-btn">Send Message →</button>

      </div>

    </footer>
  )
}

export default Footer