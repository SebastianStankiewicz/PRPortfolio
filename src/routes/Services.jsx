import React from "react";
import Footer from "../components/Footer";
import {
  LuThumbsUp,
  LuPen,
  LuNewspaper,
  LuUserCheck,
  LuEye,
  LuHeartHandshake,
} from "react-icons/lu";

import ServiceCard from "../components/serviceGrid/serviceCard";

import graphic from "../graphics/serviceWave.svg";

const Services = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(/graphics/servicewave.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <ServiceCard
              title={"Social media"}
              description={
                "Most organisations have a presence on social media, right? But are they conveying their message in a succinct, engaging and creative way to maximise visibility and engage new followers and audiences? Different social channels require different styles of content. It’s not as easy as it looks. And it’s time-consuming, when you should be focusing elsewhere. I can help."
              }
            />

            <ServiceCard
              title={"Press & Publicity"}
              description={
                "Journalists are busy people with short attention spans. Your announcement needs instantly to capture their attention, be engaging, readable and grammatically correct or it’s heading for the bin. I’ve been writing press releases for decades and know how to package information in a way which spikes media interest – what they’re looking for is a carefully-crafted, unique story which will appeal to their audience/readership."
              }
            />

            <ServiceCard
              title={"Copywriting, Editing and Proofreading"}
              description={
                "If you know what you want to say but can’t quite find the right words, you need a copywriter. Engaging, accurate, succinct copy is catnip to your audience. No AI here. To get the right style and nuance, you need a human with an eagle-eye for grammar and spelling, as well as the skill to craft copy which reflects your values and your unique voice."
              }
            />

            <ServiceCard
              title={"Media Management"}
              description={
                "It’s not enough just to fling out a press release. Are you targeting the right journalists? Giving them what they need? Journalists have questions, need background information, images, interview opportunities and citations to make their job easier. On a tight deadline, they need those critical details fast. Having a trusted connection with a PR gives them confidence that they’ll get everything they need, speedily."
              }
            />

            <ServiceCard
              title={"Speaking & Sponsorship Opportunities"}
              description={
                "Most industries are pretty crowded. Raising your profile and getting ahead of your competitors into the spotlight can be a challenge. I can identify trade shows, festivals, industry events and more, with opportunities to get you up on the stage and into the limelight. I’ll also identify strategic sponsorship opportunities, to get you and your brand noticed in the right places."
              }
            />

            <ServiceCard
              title={"Government Relations"}
              description={
                "Whatever your industry, connecting with government helps build your contacts and increases your visibility. There are more than 300 All Party Parliamentary Groups, focussing on a wide range of industries, topics, issues, countries and more. APPGs hold regular cross-party meetings, networking events, debates and discussion, bringing together parliamentarians with the private and public sector. Are you involved? If not, let me introduce you."
              }
            />
          </div>
          <div className="text-3xl flex justify-center  bg-gradient-to-r from-[#001f3f] via-[#001b36] to-[#001732] bg-clip-text">Affiliations</div>
          <div className="flex justify-center gap-6 p-4">
            <div className="card bg-neutral w-96 shadow-sm rounded-lg border border-primary">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Speaker Coaching & Storytelling Training
                </h2>
                <p>
                Speeches, podcasts and panels are great PR opportunities, but you have to get it right. Do you want to boost your public speaking and presentation skills? Upgrade with storytelling and speaker coach Peter Botting, a six-time TEDMED Speaker Coach.{" "}
                </p>
                <div className="card-actions">
                  <a
                    className="btn btn-outline"
                    href="https://peterbotting.co.uk"
                    target="_blank"
                    rel="noopener"
                    noreferrer
                  >
                    Find Out More
                  </a>
                </div>
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

export default Services;
