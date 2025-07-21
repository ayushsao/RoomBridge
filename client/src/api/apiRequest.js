import axios from "axios";
const baseURL = "https://roombridge-api.vercel.app/api/v1";
const headers = { "Content-Type": "application/json" };

export const login = async (email, password) => {
  console.log("inside login");
  try {
    console.log("inside login1");

    const response = await axios.post(
      `${baseURL}/user/login`,
      { email, password },
      { headers }
    );

    console.log(response);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      }
    else {
        return {success: false, error: response.data.error};
    }
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, error: error.message };
  }
};
