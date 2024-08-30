import React from "react";
import heroGraphic from "../../public/graphics/heroGraphic.svg";
import headShot from "../graphics/headshot.jpeg";
import { Link } from "react-router-dom";

const WelcomeHero = () => {
  return (
    <>
      <div
        className="hero relative min-h-screen bg-cover bg-center lg:bg-[url('../graphics/heroGraphic.svg')] lg:bg-no-repeat lg:bg-opacity-100 bg-[url('../graphics/heroGraphic.svg')] bg-opacity-30"
        style={{
          backgroundImage: `url(/graphics/heroGraphic.svg)`,
        }}
      >
    
        <div className="hero-content justify-center text-neutral-content text-center flex-col lg:flex-row-reverse items-center">
          <img src={headShot} className="max-w-sm rounded-full shadow-2xl " />
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl text-transparent font-bold bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text ">
              Communications, Marketing, PR and Media Relations
            </h1>
            <p className="mb-5 text-2xl font-semibold text-transparent bg-clip-text bg-slate-700 ">
              I can craft your message, capture the attention of the media,
              deliver it to the right people at the right time, raise your
              profile, generate success and evaluate results.
            </p>
            <Link className="btn btn-secondary" to={`contact`}>
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHero;
