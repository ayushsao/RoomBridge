import React, { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import MapIcon from "../../lib/icons/map-pin-simple-area-bold.svg";
import ProfileIcon from "./ProfileIcon";
import { UserContext } from "../../context/userContext";
import "../../CSS/Navbar.css";
export default function TopNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navbarSize, setNavbarSize] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(() => {
    return localStorage.getItem("activeTab") || "home";
  });
  const [prevPathname, setPrevPathname] = React.useState("/");
  const location = useLocation(); // Get the current location using useLocation()

  const navigate = useNavigate();
  const [token, setToken] = React.useState(null);

  useEffect(() => {
    let tokenHere = localStorage.getItem("token");
    setToken(tokenHere);
  }, [navigate]);

  React.useEffect(() => {
    const handleResize = () => {
      setNavbarSize(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  React.useEffect(() => {
    if (location.pathname !== prevPathname) {
      setPrevPathname(location.pathname);
      // Update active tab based on pathname change
      switch (location.pathname) {
        case "/":
          setActiveTab("home");
          break;
        case "/listed-rooms":
          setActiveTab("listings");
          break;
        case "/events":
          setActiveTab("events");
          break;
        default:
          break;
      }
    }
  }, [location.pathname, prevPathname]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="relative px-4 py-4 mx-auto flex justify-between items-center glass-navbar">
        <a className="text-3xl font-bold leading-none" href="/">
          <div className="flex mt-1">
            <span className="fancy-logo">
              <span className="brand-text">Room</span>
              <span className="brand-accent">Bridge</span>
              <img src={MapIcon} alt="map" className="inline-block ml-2 w-6 h-6 opacity-80" />
            </span>
          </div>
        </a>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              to="/"
              className={`text-sm ${
                activeTab === "home"
                  ? "font-bold text-red-300"
                  : "text-gray-400"
              } hover:text-gray-500 cursor-pointer`}
              onClick={() => {
                setActiveTab("home");
              }}
            >
              Home
            </Link>
          </li>
          {location.pathname === "/" && ( // Render About and Contact links only on "/"
            <>
              <li>
                <Link
                  to="/"
                  className={`text-sm ${
                    activeTab === "about us"
                      ? "font-bold text-red-300"
                      : "text-gray-400"
                  } hover:text-gray-500 cursor-pointer`}
                  onClick={() => {
                    setActiveTab("about us");
                    scrollToAbout();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`text-sm ${
                    activeTab === "contact"
                      ? "font-bold text-red-300"
                      : "text-gray-400"
                  } hover:text-gray-500 cursor-pointer`}
                  onClick={() => {
                    setActiveTab("contact");
                    scrollToContact();
                  }}
                >
                  Contact
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/listed-rooms"
              className={`text-sm ${
                activeTab === "listings"
                  ? "font-bold text-red-300"
                  : "text-gray-400"
              } hover:text-gray-500 cursor-pointer`}
              onClick={() => {
                setActiveTab("listings");
              }}
            >
              Listed Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={`text-sm ${
                activeTab === "events"
                  ? "font-bold text-red-300"
                  : "text-gray-400"
              } hover:text-gray-500 cursor-pointer`}
              onClick={() => {
                setActiveTab("events");
              }}
            >
              Events
            </Link>
          </li>
        </ul>
        {token ? (
          <div className="flex flex-row gap-[5px]">
            <div className="lg:hidden">
              <button
                onClick={() => setNavbarOpen(true)}
                className="navbar-burger flex items-center text-red-400 p-3"
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ProfileIcon />
          </div>
        ) : (
          <>
            <div className="lg:hidden">
              <button
                onClick={() => setNavbarOpen(true)}
                className="navbar-burger flex items-center text-red-400 p-3"
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Link
                className={` ${
                  navbarSize ? "hidden" : "block"
                } lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200`}
                to="/login"
              >
                Sign In
              </Link>

              <Link
                className={` ${
                  navbarSize ? "hidden" : "block"
                }   py-2 px-6 bg-red-400 hover:bg-red-400 text-sm text-white font-bold rounded-xl transition duration-200`}
                to="/register-user"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </nav>
      <div
        className={`navbar-menu relative z-50 ${navbarOpen ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/7 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-6">
            <Link className="mr-auto text-3xl font-bold leading-none" to="#">
              <div className="flex mt-1">
                <span
                  style={{ color: "black" }}
                  className="font-extrabold text-2xl text-black text-inherit align-middle"
                >
                  RoomBridge
                  <img src={MapIcon} alt="map" className="inline-block ml-1" />
                </span>
              </div>
            </Link>
            <button
              onClick={() => setNavbarOpen(false)}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  to="/"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  onClick={() => {
                    setActiveTab("home");
                  }}
                >
                  Home
                </Link>
              </li>
              {location.pathname === "/" && (
                <>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-red-300 rounded"
                      onClick={scrollToAbout}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-red-300 rounded"
                      onClick={scrollToContact}
                    >
                      Contact
                    </Link>
                  </li>
                </>
              )}
              <li className="mb-1">
                <Link
                  to="/events"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  onClick={() => {
                    setActiveTab("events");
                  }}
                >
                  Events
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/listed-rooms"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  onClick={() => {
                    setActiveTab("listings");
                  }}
                >
                  Listed Rooms
                </Link>
              </li>
              {token ? null : (
                <div className="flex flex-row items-center gap-2">
                  <li className="mb-1">
                    <Link
                      to="/login"
                      className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-400 hover:bg-red-700  rounded-xl"
                      to="/register-user"
                    >
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
