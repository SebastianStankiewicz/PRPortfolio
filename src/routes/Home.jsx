import React from "react";
import WelcomeHero from "../components/WelcomeHero";
import Clients from "../components/Clients";
import { Link } from "react-router-dom";
import ServiceCardCara from "../components/serviceCarousel/ServiceCardCara";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center overflow-x-hidden">
      <header className="mb-8 justify-center ">
        <WelcomeHero />
      </header>

      <div className="z-10 mx-auto overflow-x-hidden ">
        <Clients />
      </div>

      <br></br>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-5xl font-semibold z-1 px-10 ">
          Three decades of experience
        </div>
        <br></br>
        <ServiceCardCara />

        <div className="flex flex-row gap-10">
          <Link className="btn btn-secondary" to={`services`}>
            View All Services
          </Link>

          <Link className="btn btn-secondary" to={`contact`}>
            Contact me
          </Link>
        </div>
      </div>

      <b></b>

      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
