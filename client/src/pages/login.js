import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { login } from "../api/apiRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let id = toast.loading("Logging in...");
    const response = await login(email, password);
    if (response.success) {
      console.log("Login successful");
      toast.success("Login successful", { id });
      navigate("/events");
    } else {
      toast.error("Login failed", { id });
      console.log("Login failed:", response.error);
    }
  };

  return (
    <>
      <div id="login_div">
        <div
          style={{ border: "3px solid #1a202c" }}
          className="sm:w-[38rem] shadow-[0px_8px_0px_0px_#1a202c] w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
        >
          <div className="px-10 py-10 text-center text-black">
            <p className="uppercase text-2xl font-semibold">Welcome Back</p>
            <p className="text-xs text-center uppercase mt-2">
              Please enter your credentials to login
            </p>
          </div>

          <div className="space-y-4 px-8 py-4">
            <label className="block" htmlFor="email">
              <p className="text-gray-600">Email</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="email"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block" htmlFor="password">
              <p className="text-gray-600">Password</p>
              <input
                className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                type="password"
                placeholder="********"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <Button
              style={{
                border: "1px solid #1a202c",
                marginBottom: "20px",
                marginTop: "20px",
              }}
              variant="bordered"
              className="shadow-[0px_3px_0px_0px_#1a202c] w-full py-3 mt-8 uppercase"
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className="text-center my-4">or</div>

            {/* <LoginButton
              botUsername="kamra_of_rakesh_bot"
              authCallbackUrl="https://roombridge.vercel.app/telegram-auth-callback"
              buttonSize="large"
              cornerRadius={5}
              showAvatar={true}
              lang="en"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
