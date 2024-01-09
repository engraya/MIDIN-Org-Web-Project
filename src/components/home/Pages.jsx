import React from 'react'
import WhatWeDo from "./WhatWeDo/WhatWeDo"
import Gallery from "./Gallery/Gallery"
import Events from "../Events/Events"
import Value from "../Value/Value"
import Contact from "../Contact/Contact"
import GetStarted from "../GetStarted/GetStarted"
import HeroSub from "./HeroSub/HeroSub"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Home from './Home'
import { Routes, Route } from "react-router-dom"
function Pages() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-us" element={<HeroSub/>}/>
    <Route path="/what-we-do" element={<WhatWeDo/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/our-value" element={<Value/>}/>
    <Route path="/contact-us" element={<Contact/>}/>
    <Route path="/get-started" element={<GetStarted/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Pages
