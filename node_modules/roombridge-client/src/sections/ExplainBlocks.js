import React from "react";
import { Image } from "@nextui-org/react";
import perfectMatch from "../lib/img/perfect_match.png";
import socialConnections from "../lib/img/social_connection.png";
import cardsTrophey from "../lib/img/cards_trophey.png";

const ExplainBlock = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className="mx-auto max-w-4xl" id="explanation">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
          reverse ? "md:grid-flow-row-dense" : ""
        }`}
      >
        <div
          className={`flex justify-center md:justify-start ${
            reverse ? "md:order-last" : ""
          }`}
        >
          <Image
            className="w-full md:w-auto"
            style={{ height: 376 }}
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="flex items-center p-8">
          <div>
            <h2 className="text-black px-2  bg-blue-300 uppercase text-2xl md:text-2xl mb-4">
              {title}
            </h2>
            <p className="bg-yellow-100 px-3 font-mono py-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="about-section">
      <ExplainBlock
        title="FIND YOUR PERFECT MATCH"
        description="Navigating the world of roommate searches and PG accommodations can be overwhelming. With RoomBridge, you don't have to worry about financial stability or compatibility issues. Our app provides access to the credit scores of potential roommates and PGs, ensuring you find financially reliable living partners who share your lifestyle and habits."
        imageSrc={perfectMatch}
        reverse={false}
      />
      <ExplainBlock
        title="SEAMLESS SOCIAL CONNECTIONS"
        description="RoomBridge makes finding a roommate easy and fun by leveraging your social connections. Discover compatible roommates at events or meetups with our unique social connection feature. Turn casual encounters into rewarding living arrangements with our Suggestion Partner Rewards program, based on shared interests and mutual friends."
        imageSrc={socialConnections}
        reverse={true}
      />
      <ExplainBlock
        title="SEAMLESS CONNECTIVITY AND FINANCIAL TRANSPARENCY"
        description="Stay connected with potential roommates through Telegram. RoomBridge's Profile Maintenance tools help you present your best self, simplifying living arrangements. Our platform offers robust expense management with a shared ledger for rooms, hotels, and more, ensuring financial transparency and peace of mind."
        imageSrc={cardsTrophey}
        reverse={false}
      />
    </div>
  );
};

export default App;
