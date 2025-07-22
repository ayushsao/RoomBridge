import { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const UserContext = createContext();

const base = "https://roombridge-production.up.railway.app";

export const UserContextWrapper = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedToken = localStorage.getItem("token");
      
      if (storedToken) {
        setIsLogin(true);
        setToken(storedToken);
        
        try {
          console.log("Fetching user profile with token:", storedToken);
          const userProfile = await fetchUserProfile(storedToken);
          console.log("User profile fetched successfully:", userProfile);
          setUser(userProfile);
        } catch (error) {
          console.error("Error fetching user profile:", error);
          // If token is invalid, clear it
          if (error.message.includes('401') || error.message.includes('unauthorized')) {
            localStorage.removeItem("token");
            setIsLogin(false);
            setToken("");
            setUser(null);
          }
        }
      } else {
        setIsLogin(false);
        setToken("");
        setUser(null);
      }
    };

    checkLoginStatus();
  }, [isLogin]);

  const fetchUserProfile = async (token) => {
    try {
      console.log("Making request to:", `/api/v1/user/profile`);
      
      // Temporarily set the token in localStorage if not already set
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', token);
      }
      
      const response = await axiosInstance.get('/api/v1/user/profile');
      
      console.log("Full API response:", response.data);
      
      if (response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
