import React from 'react';
import { Link } from "react-router-dom";
import cows from "../../graphics/cows.jpeg"

const GetInTouch = () => {
  return (
<div className="card image-full lg:card-side bg-base-100 shadow-xl ">
  <figure>
    <img
      src={cows}
      alt="Cows" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-5xl">Get in touch</h2>
    <p className='mb-4 text-2x'>I can craft your message, capture the attention of the media, deliver it to the right people at the right time, raise your profile, generate success and evaluate results. </p>
    <div className="gap-10">
          <Link className="btn btn-active" to={`services`}>
            View All Services
          </Link>
          <Link className="btn btn-secondary" to={`contact`}>
            Contact me
          </Link>
        </div>
  </div>
</div>
  );
};

export default GetInTouch;
