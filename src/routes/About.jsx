import React from "react";

import dog from "../graphics/dog.jpeg";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left side: Collage of images */}
        <div className="w-full lg:w-1/2 p-4 space-y-4">
          <img src={dog} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right side: About Me */}
        <div className="w-full lg:w-1/2 p-4 space-y-4 ">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <div className="text-xl">
            <p className="mb-4">
              After graduating, I started my career as Publicity Assistant for
              an independent film distributor in London. Relocating to Los
              Angeles, I worked in PR for a range of clients including Twentieth
              Century Fox Home Entertainment, Columbia TriStar and BBC Video
              together with managing Academy Award campaigns for Aardman
              Animations.{" "}
            </p>

            <p className="mb-4">
              Returning to London, I joined a leading PR agency specialising in
              film, TV and theatre. My role was primarily corporate
              communications, representing film distributors, sales agents,
              producers, and writers. A major part was the international film
              festival circuit – handling PR for clients in the fast-paced,
              highly competitive environment of the Cannes Film Festival, Berlin
              Film Festival, Venice Biennale, San Sebastian Film Festival,
              London Film Festival, London Film Market and others.{" "}
            </p>

            <p className="mb-4">
              A shift in career saw a move into political PR, during an 8-year
              stint as Senior Communications Manager for a Member of Parliament,
              together with a focus on residential property as Marketing and
              Social Media Manager for an independent estate agency.{" "}
            </p>

            <p className="mb-4">
              I’m now based in the beautiful market town of Bruton in south
              Somerset, with my very friendly Golden Retriever, Michael. My two
              children have flown the nest.
            </p>
          </div>

          <div className="border-2 border-black rounded-lg p-6 bg-neutral shadow-lg">
            <p className="mb-4 text-gray-800 text-md italic">
            My logo reflects my approach, which is to look at things differently, carefully and consider all possible angles. If you want an effective, reliable, hands-on expert who takes the time to listen and gets the job done, with a sense of humour, then get in touch
            </p>
            <div className="flex justify-center gap-10">
              <div>
                <Link className="btn btn-primary" to={`../contact`}>
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12">
        <Footer />
      </footer>
    </>
  );
};

export default About;
