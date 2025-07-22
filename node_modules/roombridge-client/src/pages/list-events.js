import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramIcon from "../lib/icons/telegram_logo.jpeg";
import DiscordIcon from "../lib/icons/discord_logo.svg";
import WebsiteIcon from "../lib/icons/website_logo.svg";

const ListEvents = () => {
  const navigate = useNavigate();
  const events = [
    {
      eventName: "TON | Bootcamp 2024 ",
      description:
        "The annual developer conference for the Ethereum blockchain.",
      date: "2024-06-7",
      chain: "Ton",
      location: "Delhi , India",
      tags: ["Ton", "Party", "Bootcamp", "Tact Smart Contracts"],
      icon: "https://s3.coinmarketcap.com/static/img/portraits/6304d4f7dcf54d0fb59743ba.png",
    },
    {
      eventName: "Ethereum DevCon",
      description:
        "The annual developer conference for the Ethereum blockchain.",
      date: "2024-08-15",
      chain: "Ethereum",
      location: "Osaka, Japan",
      tags: ["Ethereum", "Developer", "Conference", "Smart Contracts"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Bitcoin Summit",
      description:
        "A global summit discussing the latest trends and innovations in Bitcoin.",
      date: "2024-09-10",
      chain: "Bitcoin",
      location: "New York, USA",
      tags: ["Bitcoin", "Summit", "Cryptocurrency", "Blockchain"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Polkadot Decoded",
      description: "An event exploring the future of the Polkadot ecosystem.",
      date: "2024-07-20",
      chain: "Polkadot",
      location: "Berlin, Germany",
      tags: ["Polkadot", "Ecosystem", "Innovation", "Blockchain"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Cardano Summit",
      description:
        "A summit focused on the advancements and projects within the Cardano blockchain.",
      date: "2024-10-05",
      chain: "Cardano",
      location: "Zurich, Switzerland",
      tags: ["Cardano", "Summit", "Blockchain", "Decentralization"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Solana Breakpoint",
      description: "The annual conference for the Solana blockchain community.",
      date: "2024-11-15",
      chain: "Solana",
      location: "Lisbon, Portugal",
      tags: ["Solana", "Conference", "Blockchain", "Crypto"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Avalanche Summit",
      description:
        "A gathering to discuss the future and potential of the Avalanche blockchain.",
      date: "2024-06-25",
      chain: "Avalanche",
      location: "Paris, France",
      tags: ["Avalanche", "Summit", "Blockchain", "DeFi"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Chainlink SmartCon",
      description:
        "A conference dedicated to smart contract development and the Chainlink ecosystem.",
      date: "2024-09-20",
      chain: "Chainlink",
      location: "San Francisco, USA",
      tags: ["Chainlink", "Smart Contracts", "Conference", "Blockchain"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Tezos Agora",
      description:
        "An event for the Tezos community to discuss governance and technological advancements.",
      date: "2024-08-30",
      chain: "Tezos",
      location: "Madrid, Spain",
      tags: ["Tezos", "Governance", "Community", "Blockchain"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "NEARCon",
      description:
        "A conference exploring the NEAR Protocol and its ecosystem.",
      date: "2024-10-12",
      chain: "NEAR",
      location: "Toronto, Canada",
      tags: ["NEAR", "Conference", "Blockchain", "Web3"],
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
    },
    {
      eventName: "Cosmos Interchain",
      description:
        "An event focusing on the interconnectivity of blockchains within the Cosmos network.",
      date: "2024-11-01",
      chain: "Cosmos",
      location: "Singapore",
      tags: ["Cosmos", "Interchain", "Blockchain", "Innovation"],
      icon: "https://img.icons8.com/ios/50/000000/cosmos.png",
    },
  ];

  const EVENTCARD = ({ event }) => {
    return ( 
      <div
        style={{ border: "3px solid #1a202c" }}
        className="cursor-pointer mx-auto my-4 max-w-xs rounded-xl px-6 py-10 shadow-[0px_4px_0px_0px_#1a202c]  text-gray-600"
      >
        <div className="flex justify-between items-center">
          <div className="mb-6 w-12 h-12 flex justify-center items-center overflow-hidden shadow-xl rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">
            <img src={event.icon} />
          </div>
          <div className="flex gap-2">
            <div className="mb-6 w-8 h-8 flex justify-center items-center overflow-hidden shadow-xl rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">
              <img src={TelegramIcon} alt="telegram"/>
            </div>
            <div className="mb-6 w-8 h-8 flex justify-center items-center overflow-hidden shadow-xl rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">
              <img src={DiscordIcon} alt="discord"/>
            </div>
            <div className="mb-6 w-8 h-8 flex justify-center items-center overflow-hidden shadow-xl rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">
              <img src={WebsiteIcon} alt="website"/>
            </div>
          </div>
        </div>
        <p className="mb-2 text-2xl text-black">{event.eventName}</p>
        <p className="mb-2 text-md text-gray-800 font-serif">
          ​{event.description}
        </p>
        <div className="flex justify-between">
          <p className="text-sm flex items-center gap-1 font-bold text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cc6161"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-calendar-check"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            {event.date}
          </p>
          <p className="text-sm flex items-center gap-1 font-bold text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cc6161"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {event.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-2 mt-4 gap-y-2">
          {event.tags.map((tag) => {
            return (
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {tag}
              </span>
            );
          })}
        </div>
        <button
          className="flex mt-8 items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white"
          onClick={() => navigate("/single-page-event")}
        >
          <span> Find Perfect Roomate </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    );
  };
  return (
    <>
      

      <section className="container mx-auto sm:px-20 px-2">
        <div className="mx-auto grid  0 px-4 py-2 grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3 gap-x-2">
          <div className=" flex justify-center items-center">
            <h2 className="text-5xl font-bold text-center tracking-wider uppercase text-black">
              Technical <br />
              Events.
              <br />
            </h2>
          </div>

          {events.map((event, i) => {
            return <EVENTCARD event={event} key={i} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ListEvents;


