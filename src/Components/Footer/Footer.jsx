import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis incidunt dolorum quae deserunt adipisci fuga autem obcaecati doloremque? Laboriosam ducimus libero, dolor sint atque commodi.</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
              <h2>get in touch </h2>
              <ul>
                <li>+1-154-64587</li>
                <li>contact@asfandyarkha97.com</li>
              </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 tomato.com - ALl Right Reserved.
      </p>
    </div>
  )
}

export default Footer
