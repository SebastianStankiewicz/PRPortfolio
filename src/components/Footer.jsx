import React from 'react'

//Eg all contact links

const Footer = () => {
  return (
    <>

<footer className="footer bg-primary text-primary-content p-10">
  <aside>
    <p className="font-bold">
      Baker-Bates PR
      <br />
      Communications, Marketing, PR and Media Relations
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Get in touch</h6>
    <a className="">+44 123456789</a>
    <a className="link link-hover" href="mailto:example@gmail.com" >example@gmail.com</a>
  </nav>
  <nav>
    <h6 className="footer-title">Keep in touch</h6>
    <a className="link link-hover">LinkedIn</a>
    <a className="link link-hover">Twitter</a>
  </nav>
</footer>
    
    
    </>
  )
}

export default Footer