import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
          <div className="text-5xl font-bold text-center text-gray-800">
            Get in touch
          </div>

          <div className="mt-4">
            <ContactForm />
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">Or alternatively</p>

          <div className="mt-4">
            <ul className="space-y-4 text-center text-gray-700">
              <li className="flex justify-center items-center space-x-2">
                <span className="font-medium">📞 Phone number:</span>
                <span>07939 139913</span>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <span className="font-medium">✉️ Email:</span>
                <span>harriet@bakerbates.com</span>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <span className="font-medium">🔗 LinkedIn:</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    className="text-blue-500 underline"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
