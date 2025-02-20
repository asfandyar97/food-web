import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { MdMenu } from "react-icons/md";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />

      {/* Menu Button for Mobile */}
      <div className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <button>
      <MdMenu size={30} />
    </button>
      </div>

      {/* Navbar Menu (Only on Large Screens) */}
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-dawnload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>

      {/* Navbar Right (Only on Large Screens) */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img 
            src={assets.basket_icon} 
            alt="Basket" 
            onClick={() => navigate('/cart')} 
            style={{ cursor: 'pointer' }} 
          />
          {getTotalCartAmount() ? <div className="dot"></div> : ""}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>

      {/* Mobile Menu (Includes navbar-right on Mobile) */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <Link to='/' onClick={() => setIsMenuOpen(false)}>home</Link>
            <a href='#explore-menu' onClick={() => setIsMenuOpen(false)}>menu</a>
            <a href='#app-dawnload' onClick={() => setIsMenuOpen(false)}>mobile-app</a>
            <a href='#footer' onClick={() => setIsMenuOpen(false)}>Contact us</a>
          </ul>
          {/* Mobile Navbar Right */}
          <div className="mobile-navbar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
              <img 
                src={assets.basket_icon} 
                alt="Basket" 
                onClick={() => navigate('/cart')} 
                style={{ cursor: 'pointer' }} 
              />
              {getTotalCartAmount() ? <div className="dot"></div> : ""}
            </div>
            <button onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}>Sign in</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
