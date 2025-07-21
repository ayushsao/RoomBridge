import React, { useState } from "react";
import AddRoomAvailModal from "../components/AddRoomAvailModal";
import FindRoomModal from "../components/FindRoomModal";

const SingleEvent = () => {
  const dynamicContent = `Get ready for an immersive two-week experience focused on Starknet, the Validity Rollup!
    📡 StarkWare is hosting the StarkHack BuildStation in Bangalore from June 13th to 26th at the Zo House, for the high-stakes StarkHack Hackathon with a prize pool of $125,000. 💰
    During this power-packed event, you'll have the opportunity to dive deep into building on Starknet with the guidance of expert mentors. 👩‍🏫 They'll be on hand to validate your project ideas and provide valuable insights to help you maximize your chances of winning big from the prize pool. 🏆
    But that's not all! To keep the energy high, we're going to run friendly competitions on a daily basis with rewards of more than 100 $STRK per day.
    And because we want you to focus solely on your projects, we've got your meals covered! 🍔🍕
    We are looking to make this a very inclusive place and so we will also be accommodating non-developers - designers and content creators as well. Where we have a contest running parallelly for them with a prize pool of ~3,400 $STRK.`;

  const paragraphs = dynamicContent
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [showFindRoomModal, setShowFindRoomModal] = useState(false);
  return (
    <>
      <div className="flex container mx-auto mt-4  ">
        <div className="mx-auto relative my-10 border rounded-lg shadow-inner flex flex-col lg:flex-row gap-3 w-[100%] px-4 py-4">
          <div className="mb-4 md:mr-6 md:mb-0 sm:w-1/3 flex flex-col items-center p-4">
            <img
              className="h-100  border-black border-3 rounded-lg object-cover sm:w-120 w-full"
              src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/03/13570a37-5331-4b99-a027-a9ac6a52aa5a"
              alt=""
            />

            <div className="p-2 px-4 flex flex-col border w-full mt-4 rounded-md shadow-inner ">
              <p className="mb-4 text-md font-medium text-black mt-2 ">
                Hosted By
              </p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5zKoI_m0hy7V1711x_xYAGJesoMf7jwyhQ&s"
                  alt="Rounded avatar"
                />
                <p className="text-md font-medium font-mono  text-black ">
                  Neeraj Choubisa
                </p>
              </div>
              <div className="flex gap-2 items-center mt-3">
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5zKoI_m0hy7V1711x_xYAGJesoMf7jwyhQ&s"
                  alt="Rounded avatar"
                />
                <p className="text-md font-medium font-mono  text-black ">
                  Nikku.Dev
                </p>
              </div>
            </div>

            <div className="p-2 px-4 flex flex-col border w-full mt-4 rounded-md shadow-inner ">
              <p className="mb-4 text-md font-medium text-black mt-2 ">
                231 Ongoing
              </p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5zKoI_m0hy7V1711x_xYAGJesoMf7jwyhQ&s"
                  alt="Rounded avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5zKoI_m0hy7V1711x_xYAGJesoMf7jwyhQ&s"
                  alt="Rounded avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5zKoI_m0hy7V1711x_xYAGJesoMf7jwyhQ&s"
                  alt="Rounded avatar"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 sm:mx-auto px-2 h-[80vh] overflow-y-scroll my-element">
            <p className="text-4xl  text-gray-700 mt-4 font-bold font-mona uppercase text-center ">
              StarkNet Buildstation
            </p>
            <div className="flex mt-3 gap-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="font-bold text-indigo-600 text-xl">25</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-md font-semibold">
                  Thursday, June 13
                </p>
                <p className="text-gray-400 text-sm">
                  10:00 AM - Jun 26, 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Day</p>
                <p className="text-md font-medium text-gray-600">13</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Month</p>
                <p className="text-md font-medium text-gray-600">7</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p className="text-sm font-medium text-gray-500">Year</p>
                <p className="text-md font-medium text-gray-600">2024</p>
              </div>
              <div className=""></div>
            </div>

            <div className=" flex mt-6  flex-col items-center rounded-md border px-8 py-10 text-gray-800 shadow-sm">
              <p className="mt-2 text-center text-lg uppercase">
                Hey <span className="truncate font-medium ">Nikku.Dev</span>{" "}
                Nice to have you on 🏘️ Rooomzy{" "}
              </p>
              <div className="mt-8 flex flex-col justify-center space-y-3 md:flex-row sm:space-x-3 sm:space-y-0">
                <button
                  onClick={() => setShowAddRoomModal(true)}
                  className="whitespace-nowrap rounded-md bg-red-400 px-4 py-3 md:font-medium font-small text-white"
                >
                  Rent a Room for a Roommate
                </button>
                <button
                  onClick={() => setShowFindRoomModal(true)}
                  className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 md:font-medium font-small"
                >
                  Find a Room with Roommate
                </button>
              </div>
            </div>
            <p className="mb-4 text-md font-medium text-black mt-4 px-1">
              About Event
            </p>
            {paragraphs.map((text, index) => (
              <p className="mt-6" key={index}>
                {text.trim()}
              </p>
            ))}
            <p className="mb-4 text-md font-medium text-black mt-4 px-1">
              Location
            </p>
            <p className="font-bold px-1">Zo House</p>
            <p className="px-1">
              S-1, P-2, Anaa Infra's Signature Towers Nirguna Mandir Layout,
              Cauvery Colony, S.T. Bed, 1st Block Koramangala, Koramangala,
              Bengaluru, Karnataka 560095, India
            </p>

            <img src="https://www.google.com/maps/d/thumbnail?mid=1" />
            <div className="mb-3"></div>
          </div>
        </div>
      </div>

      {showAddRoomModal && (
        <AddRoomAvailModal setShowAddRoomModal={setShowAddRoomModal} />
      )}

      {showFindRoomModal && (
        <FindRoomModal setShowFindRoomModal={setShowFindRoomModal} />
      )}
    </>
  );
};

export default SingleEvent;
