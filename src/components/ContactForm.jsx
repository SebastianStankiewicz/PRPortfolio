import React from "react";

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dcfa130c-5f7d-4f8f-93b0-dfb15a600d2d"); 
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  
    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4 p-6 bg-base-200 rounded-lg shadow-md">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="fullName" placeholder="Enter your full name" className="input input-bordered" required />
          </div>
      
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
          </div>
      
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="tel" name="phoneNumber" placeholder="Enter your phone number" className="input input-bordered" required />
          </div>
      
          <input type="hidden" name="access_key" value="1909e76c-b5c4-48d0-a071-30f3adbec52f" />
      
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea name="message" placeholder="Your message" className="textarea textarea-bordered" required></textarea>
          </div>
      
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">Submit Form</button>
          </div>
        </form>
      );
      
      
  }


  /*           <input type="hidden" name="access_key" value="1909e76c-b5c4-48d0-a071-30f3adbec52f" /> */