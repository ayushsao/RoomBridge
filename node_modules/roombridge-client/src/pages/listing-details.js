import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import TickIcon from "../lib/icons/tick.svg";
import { Link, useLocation } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnectUI } from "@tonconnect/ui-react";

import TV from "../lib/img/amenities/TV.png";
import Fridge from "../lib/img/amenities/fridge.png";
import Kitchen from "../lib/img/amenities/kitchen.png";
import Wifi from "../lib/img/amenities/wifi.png";
import WashingMachine from "../lib/img/amenities/washing_machine.png";
import AC from "../lib/img/amenities/air_conditioner.png";
import Parking from "../lib/img/amenities/parking.png";
import Cook from "../lib/img/amenities/cook.png";
import PowerBackup from "../lib/img/amenities/power_backup.png";

import NightOwl from "../lib/img/preferences/owl.png";
import PartyLover from "../lib/img/preferences/party.png";
import EarlyBird from "../lib/img/preferences/bird.png";
import Studious from "../lib/img/preferences/books.png";
import FitnessFreak from "../lib/img/preferences/dumbbell.png";
import PetLover from "../lib/img/preferences/pet_lover.png";
import Vegan from "../lib/img/preferences/vegan.png";
import NonAlcoholic from "../lib/img/preferences/non_alcoholic.png";
import Sporty from "../lib/img/preferences/sporty.png";
import MusicLover from "../lib/img/preferences/music_lover.png";
import Wanderer from "../lib/img/preferences/wanderer.png";
import NonSmoker from "../lib/img/preferences/non_smoker.png";

const highlightStyle = {
  backgroundColor: "#F3F4F6",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
  color: "black",
  fontSize: "0.75rem",
  fontWeight: 600,
};

const amenities = [
  { title: "TV", img: TV },
  { title: "Fridge", img: Fridge },
  { title: "Kitchen", img: Kitchen },
  { title: "Wifi", img: Wifi },
  { title: "Washing Machine", img: WashingMachine },
  { title: "AC", img: AC },
  { title: "Parking", img: Parking },
  { title: "Cook", img: Cook },
  { title: "Power Backup", img: PowerBackup },
];

const prefers = [
  { title: "Night Owl", img: NightOwl },
  { title: "Party Lover", img: PartyLover },
  { title: "Early Bird", img: EarlyBird },
  { title: "Studious", img: Studious },
  { title: "Fitness Freak", img: FitnessFreak },
  { title: "Pet Lover", img: PetLover },
  { title: "Vegan", img: Vegan },
  { title: "Non Alcoholic", img: NonAlcoholic },
  { title: "Sporty", img: Sporty },
  { title: "Music Lover", img: MusicLover },
  { title: "Wanderer", img: Wanderer },
  { title: "Non Smoker", img: NonSmoker },
];

const getAmenityImage = (title) => {
  const amenity = amenities.find((item) => item.title === title);
  return amenity ? amenity.img : "https://via.placeholder.com/150";
};

const getPreferenceImage = (title) => {
  const preference = prefers.find((item) => item.title === title);
  return preference ? preference.img : "https://via.placeholder.com/150";
};


const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const room_id = searchParams.get('roomId');
  const wallet=searchParams.get('wallet');
  console.log(room_id,wallet);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:8000/api/v1/rooms/${room_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await response.json();
        console.log(res.data);
        setDetails(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchDetails();
  }, [room_id]);
  return (
    <>
      <div id="listing_div">
        <div className="grid sm:grid-cols-2 grid-cols-1 border gap-4 mx-auto container justify-items-center">
          <div className="flex flex-col sm:w-[24rem] ">
            <div
              style={{ border: "3px solid #1a202c" }}
              className="shadow-[0px_8px_0px_0px_#1a202c] w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-8">
                <div className="flex-shrink-0">
                  <img
                    src={
                      details.user_id?.profile_picture_url ||
                      "https://via.placeholder.com/150"
                    }
                    alt="Profile"
                    className="w-32 h-32 rounded-full border"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mt-4">
                  <Button
                    style={{ border: "1px solid #1a202c" }}
                    variant="bordered"
                    className="shadow-[0px_3px_0px_0px_#1a202c] w-32 py-3 uppercase"
                  >
                    Call
                  </Button>
                  <Button
                    style={{ border: "1px solid #1a202c" }}
                    variant="bordered"
                    className="shadow-[0px_3px_0px_0px_#1a202c] w-32 py-3 uppercase"
                  >
                   <Link to={`https://t.me/${details?.user_id?.username}`}>Chat</Link>
                  </Button>
                </div>
                <TonConnectButton />
              </div>
            </div>
          </div>
          <div
            style={{ border: "3px solid #1a202c" }}
            className="sm:w-[56rem]  shadow-[0px_8px_0px_0px_#1a202c] w-[95%] my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg "
          >
            <div className=" px-4 py-8 text-black sm:px-8">
              <p className="uppercase text-xl font-semibold text-center">
                Location
              </p>
              <p className="mt-4 text-center">{`${details.city}, ${details.state}`}</p>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Basic Info
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-semibold">Gender</p>
                  <p>{details.user_id?.gender}</p>
                </div>
                <div>
                  <p className="font-semibold">Approx Rent</p>
                  <p>₹{details.price}</p>
                </div>
                <div>
                  <p className="font-semibold">Occupancy</p>
                  <p>{details.members_max}</p>
                </div>
                <div>
                  <p className="font-semibold">Availability</p>
                  <p>{`${new Date(
                    details.available_from
                  ).toLocaleDateString()} - ${new Date(
                    details.available_to
                  ).toLocaleDateString()}`}</p>
                </div>
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Preferences
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
                {details.user_id?.preferences?.preferences.map(
                  (preference, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center"
                    >
                      <img
                        src={getPreferenceImage(preference)}
                        alt={`preference ${index}`}
                        className="w-20 h-20 rounded-full border"
                      />
                      <span className="text-center mt-4">{preference}</span>
                    </div>
                  )
                )}
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Highlights
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {details.highlights?.map((highlight, index) => (
                  <div
                    key={index}
                    style={highlightStyle}
                    className="flex flex-row items-center gap-2"
                  >
                    <img
                      src={TickIcon}
                      className="w-4 h-4 mr-2"
                      alt="Tick Icon"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <hr className="border-dashed border-2 border-gray-400 my-4" />
              <p className="uppercase text-xl font-semibold text-center">
                Amenities
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
                {details.amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      src={getAmenityImage(amenity)}
                      alt="Amenity"
                      className="w-20 h-20 rounded-full border"
                    />
                    <span className="text-center mt-4">{amenity}</span>
                  </div>
                ))}
              </div>

              <Button
                style={{ border: "1px solid #1a202c" }}
                variant="bordered"
                className="shadow-[0px_3px_0px_0px_#1a202c] w-32 py-3 uppercase"
              >
                Pay to Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
