import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import {
  LuThumbsUp,
  LuPen,
  LuNewspaper,
  LuUserCheck,
  LuEye,
  LuHeartHandshake,
} from "react-icons/lu";
const ServiceCardCara = () => {
  return (
    <>
      <div className="carousel w-full h-full gap-x-4 py-4 my-4 px-4 mx-4 overflow-auto">
        <div id="slide1" className="carousel-item">
          <ServiceCard
            title={"Social media"}
            description={"Should be short and snappy"}
            longDescription={
              "Most organisations have a presence on social media, right? But are they conveying their message in a succinct, engaging and creative way to maximise visibility and engage new followers and audiences? Different social channels require different styles of content. It’s not as easy as it looks. And it’s time-consuming, when you should be focusing elsewhere. I can help."
            }
            icon={<LuThumbsUp />}
          />
        </div>
        <div id="slide2" className="carousel-item">
          <ServiceCard
            title={"Press & Publicity"}
            description={"Should be short and snappy"}
            longDescription={
              "Journalists are very busy people, often with short attention spans. Your news or announcement must capture their attention in the first couple of seconds; it has to be instantly readable, grammatically accurate and – most importantly – engaging. If not, the press release goes into the bin. I’ve been writing press releases for decades and I know how to package information in a way which rapidly spikes media interest. They are looking for a carefully-crafted, unique story which will appeal to their audience / readership."
            }
            icon={<LuNewspaper />}
          />
        </div>
        <div id="slide3" className="carousel-item">
          <ServiceCard
            title={"Copywriting, Editing and Proofreading"}
            description={"Should be short and snappy"}
            longDescription={
              "If you know what you want to say but can’t quite find the right words, you need a copywriter. Engaging, accurate, succinct copy is catnip to your audience. No AI here. To get the right style and nuance, you need a human with an eagle-eye for grammar and spelling, as well as the skill to craft copy which reflects your values and your unique voice."
            }
            icon={<LuPen />}
          />
        </div>
        <div id="slide4" className="carousel-item">
          <ServiceCard
            title={"Media Management"}
            description={"Should be short and snappy"}
            icon={<LuUserCheck />}
            longDescription={
              "It’s not enough just to fling out a press release and hope for the best. Are you targeting the right journalists? Are you giving them what they need? Journalists have questions, need background information, images, interview  opportunities and citations to make their job easier. They need to know they can get those critical last-minute details when they’re on a tight deadline. Having a close professional relationship with a PR gives them confidence that they’ll get all the help they need, speedily, when they want it. And consequently, that gets you the valuable exposure you need."
            }
          />
        </div>
        <div id="slide5" className="carousel-item">
          <ServiceCard
            title={"Speaking & Sponsorship Opportunities"}
            description={"Should be short and snappy"}
            icon={<LuEye />}
            longDescription={
              "Most industries are pretty crowded. Raising your profile and getting ahead of your competitors into the spotlight can be a challenge. I can identify trade shows, festivals, industry events and more, with opportunities to get you up on the stage and into the limelight. I’ll also identify strategic sponsorship opportunities, to get you and your brand noticed in the right places."
            }
          />
        </div>
        <div id="slide6" className="carousel-item">
          <ServiceCard
            title={"Government Relations"}
            description={"Should be short and snappy"}
            icon={<LuHeartHandshake />}
            longDescription={
              "Whatever your industry, connecting with government can only help broaden your contacts, connections with stakeholders, increase your visibility and help you make your mark. There are more than 300 All Party Parliamentary Groups in Parliament, focusing on a huge range of industries, topics, issues, nations and more. APPGs hold regular cross-party meetings, networking events and informal debates and discussion, bringing together parliamentarians and stakeholders. Are you involved? If not, let me introduce you."
            }
          />
        </div>
      </div>

    </>
  );
};

export default ServiceCardCara;
