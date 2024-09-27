import React from "react";

import Aardman from "../companyLogos/Aardman.png";
import LondonFilmFestival from "../companyLogos/LondonFilmFestival.png";
import PremierPR from "../companyLogos/PremierPR.png";
import RoderickThomas from "../companyLogos/RoderickThomas.png";
import SeedHub from "../companyLogos/SeedHub.png";
import Tristar from "../companyLogos/tristar.png"
import HomeEntertainment from "../companyLogos/HomeEntertainment.jpeg"
import Optimum from "../companyLogos/optimum.png"
import SWS from "../companyLogos/sws.png"
import somersetPopUp from "../companyLogos/somersetPopUp.jpeg"
import houseOfCommons from "../companyLogos/houseOfCommons.png"


const Clients = () => {
  return (
    <>
    <div className="text-3xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-[#001b36]">
            Previous Clients
        </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <div className="flex justify-center items-center">
        <img src={Aardman} alt="Aardman" className="h-24 object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={LondonFilmFestival}
          alt="London Film Festival"
          className="h-24 object-contain"
        />
      </div>
      <div className="flex justify-center items-center">
        <img src={PremierPR} alt="Premier PR" className="h-24 object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={RoderickThomas}
          alt="Roderick Thomas"
          className="h-24 object-contain"
        />
      </div>

      <div className="flex justify-center items-center">
        <img src={SeedHub} alt="SeedHub" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={Tristar} alt="Tristar" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={HomeEntertainment} alt="20 century fox" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={Optimum} alt="Optimum releasing" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={SWS} alt="South west screen" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={somersetPopUp} alt="Somerst collective pop-up shop" className="h-24 object-contain" />
      </div>

      <div className="flex justify-center items-center">
        <img src={houseOfCommons} alt="House of commons" className="h-24 object-contain" />
      </div>
    </div>
    </>
  );
};

export default Clients;

