import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import { UserContextWrapper } from "./context/userContext";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextWrapper>
    <NextUIProvider>
      <TonConnectUIProvider manifestUrl="https://ide.nujan.io/assets/ton/tonconnect-manifest.json">
        <App />
      </TonConnectUIProvider>

      <Analytics />
      <Toaster />
    </NextUIProvider>
    </UserContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
