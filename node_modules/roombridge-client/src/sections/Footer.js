import { ReactComponent as Logo } from "../lib/logo2.svg";
import MapIcon from "../lib/icons/map-pin-simple-area-bold.svg";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
export default function Footer() {
  return (
    <footer key="1" className="bg-gradient-to-r from-black via-slate-900 to-black py-8 mt-12 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Full-width hr elements */}
          <hr className="w-1/3 border-cyan-400/30" />
          {/* Container for words and logo */}
          <div className="flex">
            <span className="fancy-logo footer-logo text-white drop-shadow-lg">
              <span className="brand-text">Room</span>
              <span className="brand-accent">Bridge</span>
              <img src={MapIcon} alt="map" className="inline-block ml-2 w-6 h-6 opacity-80 filter brightness-0 invert" />
            </span>
          </div>
          <hr className="w-1/3 border-cyan-400/30" />
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <Link to={"https://www.facebook.com/share/14FJayq9Uhv/"} target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-cyan-300 cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </Link>
          <Link to={"https://www.instagram.com/heyyayuu29?igsh=MTlub3NxYWJjd2dpdw=="} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-cyan-300 cursor-pointer hover:text-pink-400 hover:scale-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
          </Link>
          <Link to={"https://www.linkedin.com/in/ayush-kumar-sao"} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="text-cyan-300 cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex space-x-4 text-sm text-cyan-200">
            <a className="hover:text-cyan-400 hover:glow transition-all duration-300" href="/client/node_modules/">
              Legal Rooms
            </a>
            <span className="text-cyan-500">|</span>
            <a className="hover:text-cyan-400 hover:glow transition-all duration-300" href="/client/node_modules/">
              Privacy Policy
            </a>
            <span className="text-cyan-500">|</span>
            <a className="hover:text-cyan-400 hover:glow transition-all duration-300" href="/client/node_modules/">
              Security of Information
            </a>
            {/* <span>|</span>
            <a className="hover:text-gray-800" href="/client/node_modules/">
              Website Accessibility
            </a>
            <span>|</span> */}
            {/* <a className="hover:text-gray-800" href="/client/node_modules/">
              Manage Cookies
            </a> */}
          </div>
          <div className="text-sm text-cyan-200 mt-8 md:mt-4">
            © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold glow">RoomBridge</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function SignalMediumIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
