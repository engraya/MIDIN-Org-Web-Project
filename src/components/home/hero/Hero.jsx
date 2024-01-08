import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"


const missionTitle = "At Multi Intervention Development Initiative (MIDIN), our mission is driven by an unwavering commitment to catalyzing positive change on a global scale. With the firm belief that every individual deserves the opportunity to lead a dignified and empowered life, MIDIN dedicates itself to facilitating sustainable initiatives that uplift humanity and contribute to the betterment of society."
const aboutTittle = "Multi-Intervention Development Initiatives: is an Independent Private Organization duly incorporated with Corporate Affairs Commission (CAC), and solely established with the mandate of providing support and services on different fields which involves: Educational Sector, Medical and Healthcare Delivery, Agriculture, Empowerment and Livelihood including offering of Humanitarian Aids as well as facilitates other sustainable projects for the betterment of the citizenry."
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='About Us' subtitle={aboutTittle} />
          <Heading title='Our Mission' subtitle={missionTitle} />
        </div>
      </section>
    </>
  )
}

export default Hero
