import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import heroGraphic from "../graphics/heroGraphic.svg"

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroGraphic})`,
        }}
      >
        <ContactForm />
        <footer className="mt-12">
        <Footer />
      </footer>
      </div>

    </>
  );
};

export default Contact;
