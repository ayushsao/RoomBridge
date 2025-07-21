import React, { useState, useEffect } from "react";
import LocationIcon from "../lib/icons/location.svg";
import TelegramIcon from "../lib/icons/telegram.svg";
import { useNavigate } from "react-router-dom";
import { Button, user } from "@nextui-org/react";
import Filter from "../components/user-list/Filter";

const RecommendedUsers = ({ title }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'Both',
    location: 'Nearby',
    rent: [],
  });
  const randomMatch = () => Math.floor(Math.random() * 50) + 51;

  const roomUrl = "https://roombridge-api.vercel.app/api/v1/rooms";
  const userUrl = "https://roombridge-api.vercel.app/api/v1/user";

  let baseUrl;

  if (title === "Listed Rooms") {
    baseUrl = roomUrl;
  } else {
    baseUrl = userUrl;
  }

  const handleGetUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Construct the query parameters based on the filters
      let queryParams = new URLSearchParams();

      if(title === "Listed Rooms"){
        
      if (filters.gender !== 'Both') {
        queryParams.append('gender', filters.gender.toUpperCase());
      }

      if(filters.rent.length > 0) {
        queryParams.append('minRent', filters.rent[0]);
        queryParams.append('maxRent', filters.rent[1]);

      }

      if(filters.location!=="Nearby") {
        queryParams.append('city', filters.location)
      }
      }




      const response = await fetch(`${baseUrl}?${queryParams.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      const res = await response.json();
      console.log(res,"recom");

      // Transform the data to match the expected user structure
      if (title === "Listed Rooms") {

        const transformedUsers = res.data.map((item) => ({
          full_name: item?.user_id?.full_name,
          telegram_username: item?.user_id?.username,
          location: `${item?.city}, ${item?.state}`,
          gender_preference: item?.looking_for,
          distance: "5 km",
          rent: item?.price,
          photo: item?.user_id?.profile_picture_url,
          room_id: item?._id,
          userId:item?.user_id?._id,
        }));
        setUsers(transformedUsers);
      } else if (title === "Listed Users") {
        const transformedUsers = res.data.map((item) => ({
          full_name: item.full_name,
          telegram_username: item.username,
          location: `${item.city}, ${item.state}`,
          gender_preference: item.gender_preference,
          distance: "5 km",
          rent: item.rent,
          photo: item.profile_picture_url,
          userId: item._id,
        }));
        setUsers(transformedUsers);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, [filters]);

  const filteredUsers = users.filter((user) => {
    console.log(user,"inside filter")
    const name = user?.full_name?.toLowerCase();
    const location = user?.location?.toLowerCase();
    const rent = user?.rent?.toString();
    const query = searchQuery?.toLowerCase();
    return (
      name?.includes(query) || location?.includes(query) || rent?.includes(query)
    );
  });

  console.log(filteredUsers,users,"filteredUsers")

  return (
    <div className="items-center md:mx-12 px-5">
      <div className="min-h-screen items-center mt-4 md:mx-4 gap-x-3">
        <h1 className="capitalize text-left mb-5 text-2xl font-bold whitespace-nowrap">
          {title}
        </h1>
        <div className="items-center flex flex-row justify-between w-full flex-wrap gap-3">
        <div className="md:col-span-6">
            <div className="relative w-full">
              <input
                type="text"
                id="default-search"
                className="block px-4 py-3 my-2 pl-10 pr-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400 appearance-none"
                placeholder="Search Here.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
          </div>
        {title === "Listed Rooms" ? <Filter setFilters={setFilters} /> : <div></div>}

         
        </div>
        <div className="flex flex-row flex-wrap gap-4 items-center justify-between mb-5 md:mt-12 mt-6">
          {filteredUsers.map((user) => (
            <div
              key={user.telegram_username}
              style={{
                border: "3px solid #1a202c",
                transition: "transform 0.3s ease-in-out",
              }}
              className="col-span-12 shadow-[0px_4px_0px_0px_#1a202c] md:col-span-6 lg:col-span-4 sm:flex rounded-lg p-5 gap-5 h-full border border-transparent cursor-pointer hover:shadow-lg hover:transform hover:scale-105 min-w-[340px] max-w-[430px] w-full"
            >
              <div className="flex flex-row sm:flex-col items-center justify-between">
                <img
                  src={user.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s"}
                  alt={user.firstname}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="flex flex-col items-center justify-end gap-2">
                  <span className="text-gray-500 text-sm sm:translate-x-64 sm:-translate-y-1">Match</span>
                  <div
                    className="w-12 h-12 m-auto grid place-items-center text-sm font-bold sm:translate-x-64 sm:-translate-y-1"
                    style={{
                      position: "relative",
                      borderRadius: "50%",
                      border: "0.25em solid white",
                      borderRightColor: "#ff7a7a",
                      borderTopColor: "#ff7a7a",
                      borderBottomColor: "#ff7a7a",
                      borderLeftColor: "white",
                      // background: `conic-gradient(#ff7a7a ${user.match}%, white ${user.match}%)`,
                    }}
                  >
                    {`${randomMatch()}%`}
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 w-full">
                <div className="flex flex-row items-center justify-between w-full gap-4">
                  <h2 className="text-lg font-semibold whitespace-nowrap">{user.full_name}</h2>
                  <div className="flex bg-red-300 w-fit-content px-2 sm:px-8 py-1 rounded-xl items-center gap-2">
                    <span className="text-[14px] font-semibold tracking-wider">
                      {user.telegram_username}
                    </span>
                    <img
                      src={TelegramIcon}
                      alt="telegram"
                      className="w-5 h-5 mr-6"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <img src={LocationIcon} alt="map" className="w-5 h-5" />
                  <span className="text-gray-500 text-sm">{user.location}</span>
                </div>
                <div className="grid grid-cols-2 my-4 gap-4 xs:my-2">
                  <div className="flex flex-col">
                    <span className="block text-gray-500 text-[12px]">
                      Rent
                    </span>
                    <span className="block text-gray-800 text-sm font-semibold">
                      ₹{user.rent || 5000}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-gray-500 text-[12px]">
                      Looking for
                    </span>
                    <span className="block text-gray-800 text-sm font-semibold first-letter:capitalize">
                      {user.gender_preference}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-full items-center justify-between ">
                  <span className="block text-sm ">
                    <b>{user.distance}</b>{" "}
                    <span className="text-xs">from your search</span>
                  </span>
                  <Button
                    onClick={() => {
                      const { userId, room_id } = user ?? {};
                      const listingPath = `/listing-details/${userId}`;
                      const queryParams = room_id ? `?roomId=${room_id}` : '';
                      const state = { room_id, user_id: userId };
                    
                      navigate(`${listingPath}${queryParams}`, { state });
                    }}
                    style={{
                      border: "1px solid #1a202c",
                    }}
                    variant="bordered"
                    size="sm"
                    className="uppercase font-semibold tracking-wider"
                  >
                    See Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedUsers;
