import React from "react"
import Heading from "../../common/Heading"
import "./Gallery.css"
import GalleryCard from "./GalleryCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Gallery' subtitle='Explore Beautiful Images of our Popular Events' />
          <GalleryCard />
        </div>
      </section>
    </>
  )
}

export default Recent
