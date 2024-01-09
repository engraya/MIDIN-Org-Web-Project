import React from "react"
import WhatWeDo from "./WhatWeDo/WhatWeDo"
import HeroSub from "./HeroSub/HeroSub"
import Gallery from "./Gallery/Gallery"
import HeroMain from "../HeroMain/HeroMain"
import Events from "../Events/Events"
import Value from "../Value/Value"
import Contact from "../Contact/Contact"
const Home = () => {
  return (
    <>
    <HeroMain/>
    <HeroSub/>
    <WhatWeDo/>
    <Gallery/>
    <Events/>
    <Value/>
    <Contact/>
    </>
  )
}

export default Home
