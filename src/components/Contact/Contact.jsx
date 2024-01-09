import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import contactImage from "../../images/contact-image.jpg"
import GetStarted from "../GetStarted/GetStarted";
const Contact = () => {
  return (
    <>

  
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call Us</span>
                    <span className="secondaryText">+2348025496458</span>
                  </div>
                </div>
                <div className="flexCenter button">Call</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Send Us Email</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <div className="flexCenter button">Email now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">

    
            </div>
          </div>
        </div>
        

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src={contactImage} alt="" />
          </div>
        </div>
      </div>
    </div>
    <GetStarted/>
    </>
  );
};

export default Contact;


