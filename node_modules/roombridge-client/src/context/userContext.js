import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const base = "http://localhost:8000";

export const UserContextWrapper = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (localStorage.getItem("token")) {
        setIsLogin(true);
        try {
          let tokenHere = localStorage.getItem("token");
          console.log(tokenHere, "tokenHere");

          if (tokenHere) {
            setToken(tokenHere);
            const userProfile = await fetchUserProfile(tokenHere);
            console.log(userProfile, "userProfile");
            setUser(userProfile);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setIsLogin(false);
      }
    };

    checkLoginStatus();
  }, [isLogin]);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(`${base}/api/v1/user/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const { data } = await response.json();
      console.log(data, "inside context");
      return data;
    } catch (error) {
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
