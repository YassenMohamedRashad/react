import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Footer from "./Components/Footer"
import AboutUs from "./Components/AboutUs"
import ProductDetails from "./Components/ProductDetails";
import Account from "./Components/Account";
import Register from "./Components/AccountComps/Register";

function App ()
{

  return (
      <>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={ <Services /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/AboutUs" element={ <AboutUs /> } />
          <Route path="/ProductDetails/:id" element={ <ProductDetails /> } />
          <Route path="/UserInfo" element={<Account/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>

        <Footer />
      </>
  )
}

export default App