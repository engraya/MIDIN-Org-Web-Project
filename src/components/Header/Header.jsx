import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import { Link } from "react-router-dom";
// import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import logo from "../../images/logo.jpg"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img className="applogo" src={logo} alt="logo" width={69} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link to="/"><a >Home</a></Link>
            <Link to="/about-us"><a >About Us</a></Link>
            <Link to="/gallery"><a >Gallery</a></Link>
            <Link to="/events"><a >Events</a></Link>
            <Link to="/what-we-do"><a >What we Do</a></Link>
            <Link to="/our-value"><a >Our Value</a></Link>
            <button className="button">
              <Link to="contact-us"><a >Contact Us</a></Link>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
