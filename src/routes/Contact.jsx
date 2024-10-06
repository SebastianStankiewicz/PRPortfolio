import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/graphics/heroGraphic.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">

          <div className="mt-4">
            <ContactForm />
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Or alternatively
          </p>

          <div className="mt-4">
            <ul className="space-y-4 text-center text-gray-700">
              <li className="flex justify-center items-center space-x-2">
                <div className="text-3xl">
                  <FaPhoneSquare />
                </div>
                <span>07939 139913</span>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <div className="text-3xl">
                  <TfiEmail />
                </div>
                <span>harriet@bakerbates.com</span>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <div className="text-3xl">
                  <FaLinkedin />
                </div>
                <span>
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    className="text-blue-500 underline"
                  >
                    https://www.linkedin.com/in/harrietbakerbates-
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer class="contact-lift">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
