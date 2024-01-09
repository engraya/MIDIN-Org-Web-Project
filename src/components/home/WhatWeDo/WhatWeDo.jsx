import React from "react"
import Heading from "../../common/Heading"
import "./WhatWeDo.css"
import WhatWeDoCard from "./WhatWeDoCard"

const WhatWeDo = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='What we Do' subtitle='We act by providing support and services on different fields' />
          <WhatWeDoCard />
        </div>
      </section>
    </>
  )
}

export default WhatWeDo
