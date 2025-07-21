import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const {user,setIsLogin}=useContext(UserContext);

  console.log(user,"topnaves")

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
      <img
        id="avatarButton"
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user?.profile_picture_url || "https://tailwindcss.com/img/erin-lindford.jpg"}
        alt="User dropdown"
        onClick={handleToggle}
      />
      {isOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute -translate-x-36 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{user?.full_name || "Neeraj Choubisa"}</div>
            <div className="font-medium truncate">{user?.email || "email"}</div>
          </div>
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
