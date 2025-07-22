import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const {user,setIsLogin}=useContext(UserContext);

  console.log("ProfileIcon user data:", user);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggle}>
        <img
          id="avatarButton"
          type="button"
          className="w-10 h-10 rounded-full"
          src={user?.profile_picture_url || "https://tailwindcss.com/img/erin-lindford.jpg"}
          alt="User dropdown"
        />
        <div className="hidden md:block">
          <span className="text-sm font-medium text-gray-900">
            {user?.full_name || "User"}
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-red-100 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-red-100 "
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-red-100 "
              >
                Your Profile
              </Link>
            </li>
            <li>
              <Link
                to="/questions"
                className="block px-4 py-2 hover:bg-red-100 "
              >
                Set Your Preferences
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <button
              onClick={() => {
                setIsLogin(false);
                setIsOpen(false);
                localStorage.removeItem('token');
                navigate('/login');
              }}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-100 "
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
