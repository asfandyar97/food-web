import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
       {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />

        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
