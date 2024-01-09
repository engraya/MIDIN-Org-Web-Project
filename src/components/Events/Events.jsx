import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { list } from "../data/Data"
// Import Swiper styles
import "swiper/css";
import "./Events.css";
import { sliderSettings } from "../../utils/common";
const Events = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Our Activities</span>
          <span className="primaryText">Popular Events</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {list.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flexColStart r-card">
                <img src={card.cover} alt="home" />
{/* 
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span> */}
                {/* <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
