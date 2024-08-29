import React from "react";
import heroGraphic from "../graphics/heroGraphic.svg"

import headShot from "../graphics/headshot.jpeg"

const WelcomeHero = () => {
  return (
    <>
<div
  className="hero min-h-screen h-14"
  style={{
    backgroundImage: `url(${heroGraphic})`,
  }}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-neutral-content text-center flex-col lg:flex-row-reverse">
        <img
      src={headShot}
      className="max-w-sm rounded-full shadow-2xl" />
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-transparent font-bold bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text ">
              Communications, Marketing, PR and Media Relations
            </h1>
            <p className="mb-5 text-2xl">
              I can craft
              your message, capture the attention of the media, deliver it to
              the right people at the right time, raise your profile, generate
              success and evaluate results.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHero;
