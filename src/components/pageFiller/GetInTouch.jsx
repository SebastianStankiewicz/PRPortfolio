import React from "react";
import { Link } from "react-router-dom";
import cows from "../../graphics/cows.jpeg";

//COMPONENT NOT IN USE

const GetInTouch = () => {
  return (
    <div className="card image-full lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={cows} alt="Photo of a herd of cows crossing a road on a sunny afternoon." />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-8xl">Get in touch</h2>
        <p className="mb-4 text-2xl">
          If you’re seeking to amplify your voice, forge strategic partnerships
          and unleash your creativity, look no further.
        </p>
        <div className="flex justify-center gap-10">
          <Link className="btn btn-active btn-block" to={`contact`}>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
