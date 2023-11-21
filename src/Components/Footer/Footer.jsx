 import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.webp'

const Footer = () => {
  return (
<div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#"  >
                <img src={Logo} alt="" style={{width:'40%', height:'100%'}} />
              </a>
            </div>
          </div>

          <div className="footer-content-column">
          <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Quick Links</h2>
              <p className="footer-call-to-action-link-wrapper">
                <NavLink to="about">

                <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self">
                  About Us
                </a>
                </NavLink>

              </p>

              <p className="footer-call-to-action-link-wrapper">
                <NavLink  to="contact">
                <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self">
                  Contact Us
                </a>
                </NavLink>

              </p>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <NavLink to="/term-and-condition">

                  <a>Private Policy</a>
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        

          
          <div className="footer-content-column">
            <div className="footer-call-to-action">
          <h2 className="footer-call-to-action-title">Let's Chat</h2>
              <p className="footer-call-to-action-description">
                Have a support question?
              </p>
              
              <a className="footer-call-to-action-button button"  target="_self"  href='https://app.textingbase.com/f/YTEyNzkzLW4zMDE1Mw=='>
            
                Get in Touch
             

              </a>
               
            </div>
            
          </div>
         
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="https://saurabhinfosys.com/" target="_self">
                ©2023. | Designed By: Saurabhinfosys | All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
