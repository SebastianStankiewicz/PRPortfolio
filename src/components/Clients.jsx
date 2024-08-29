import React from "react";

import Aardman from "../companyLogos/Aardman.png";
import Berlin from "../companyLogos/Berlin.png";
import Cannes from "../companyLogos/Cannes.png";
import LondonFilmFestival from "../companyLogos/LondonFilmFestival.png";
import PremierPR from "../companyLogos/PremierPR.png";
import RoderickThomas from "../companyLogos/RoderickThomas.png";
import SanSebastian from "../companyLogos/SanSebastian.png";
import SeedHub from "../companyLogos/SeedHub.png";
import Venice from "../companyLogos/Venice.png";

const Clients = () => {
  return (
    <>
    <div>
    <div className="text-3xl font-semibold text-center mb-6">
            Previous Clients
        </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <div className="flex justify-center items-center">
        <img src={Aardman} alt="Aardman" className="h-24 object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <img src={Berlin} alt="Berlin" className="h-24 object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <img src={Cannes} alt="Cannes" className="h-24 object-contain" />
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
        <img
          src={SanSebastian}
          alt="San Sebastian"
          className="h-24 object-contain"
        />
      </div>
      <div className="flex justify-center items-center">
        <img src={SeedHub} alt="SeedHub" className="h-24 object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <img src={Venice} alt="Venice" className="h-24 object-contain" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Clients;

