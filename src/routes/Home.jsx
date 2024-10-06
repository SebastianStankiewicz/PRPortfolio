import React from "react";
import WelcomeHero from "../components/WelcomeHero";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Services from "./Services";

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
        <br></br>
        <Services />
      </div>

      <b></b>

      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
