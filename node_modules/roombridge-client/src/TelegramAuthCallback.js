import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyTelegramHash } from "./utils/verifyTelegramHash";

const TelegramAuthCallback = () => {
  const navigate = useNavigate();
  const botToken = "7039254736:AAFtZOqu6VUmjjrGcGXOWv6prJYXz3d_r3s"; // Ensure secure management of this token

  useEffect(() => {
    const getHashParams = () => {
      // Extract the hash from the URL
      const hash = window.location.hash.split('#')[2];
      console.log(hash)
      console.log("Full Hash String:", hash); // Log the full hash string

      // Parse the hash string into parameters
      const params = new URLSearchParams(hash);
      console.log("Hash Parameters:", Object.fromEntries(params.entries())); // Log all parameters as an object

      return {
        id: params.get("id"),
        first_name: params.get("first_name"),
        last_name: params.get("last_name"),
        username: params.get("username"),
        auth_date: params.get("auth_date"),
        hash: params.get("hash"),
      };
    };

    const data = getHashParams();
    console.log("Extracted Data:", data); // Log the extracted data object

    // Verify the Telegram hash
    if (data.hash && verifyTelegramHash(data, botToken)) {
      console.log("Hash verified successfully."); // Log success of hash verification

      fetch("http://localhost:8000/api/v1/generate-token", {
        // Ensure this URL matches your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
        }),
      })
        .then((response) => {
          console.log("Response from Backend:", response); // Log the response object
          return response.json();
        })
        .then((result) => {
          console.log("Token Generation Result:", result); // Log the result object
          if (result.token) {
            localStorage.setItem("token", result.token); // Store the token
            navigate("/events"); // Redirect to the events page
          } else {
            throw new Error("No token received from server");
          }
        })
        .catch((error) => {
          console.error("Error during token generation:", error); // Log errors
          navigate("/login"); // Redirect to login on error
        });
    } else {
      console.error("Invalid hash or missing hash parameter"); // Log invalid hash errors
      navigate("/login"); // Redirect to login if hash is invalid
    }
  }, [navigate, botToken]);

  return <div>Processing...</div>;
};

export default TelegramAuthCallback;
