import React from 'react'

//Eg all contact links

import bakerBatesLogo from "../companyLogos/bakerBatesLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>

<footer className="footer footer-center bg-primary text-primary-content p-10">
  <aside>
  <img src={bakerBatesLogo} alt="Baker bates" className="h-24 object-contain invert" />
    <p className="font-bold">
      Baker Bates PR
      <br />
      Communications, Marketing, PR and Media Relations
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.linkedin.com/in/harrietbakerbates-'>
        <div className='text-3xl'>
        <FaLinkedin />
        </div>
      
      </a>
      <a href="mailto:harriet@bakerbates.com" >
      <div className='text-3xl'>
        <TfiEmail />
        </div>
      </a>
      <a href="tel:+447939 139913">
      <div className='text-3xl'>
        <FaPhoneSquare />
        </div>
      </a>
    </div>
  </nav>
</footer>

    
    </>
  )
}

export default Footer