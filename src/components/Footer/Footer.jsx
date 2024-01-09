import React from "react"
import { footer } from "../data/Data"
import "./Footer.css"
import logo from "../../images/logo.jpg"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={logo} alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, Events, News sent straignt in your inbox</p>
             
              <p>OFFICE ADDRESS:Threshold Business Suite, Plot 976 Olusegun Obasanjo Way, Wuye Abuja FCT, Abuja Nigeria</p>

      
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Multi Intervention Development Initiative. (MIDIN). All Rights Reserved.</span>
      </div>
    </>
  )
}

export default Footer
