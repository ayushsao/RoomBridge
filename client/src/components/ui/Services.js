import React from "react";
import ToolsCard from "./ToolsCard";
import Image1 from "../../lib/img/tools/calculate.png";
import Image2 from "../../lib/img/tools/girl.png";
import Image3 from "../../lib/img/tools/transaction.png"; // Assuming this is the image for the savings account
import Image4 from "../../lib/img/tools/chart.png";
import ComingSoon from "../../lib/img/coming-soon.png";
import BhopalImage from "../../lib/img/tools/dart.png"; // Bhopal - Available Now!

// Assuming this is the image for the investment planning tools
import "../../CSS/Services.css";

export default function Services() {
  return (
    <div
      className="cardtools flex flex-col items-center justify-center"
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <div id="bgbgbg2"></div>
      <div style={{ maxWidth: 800 }}>
        <h2 className="uppercase text-slate-800 mt-14 color text-4xl font-black w-full text-center mb-8">
          View Rooms in popular cities
        </h2>
        <div className="container mx-auto grid grid-cols-1 justify-items-center sm:grid-cols-3 sm:gap-x-36 sm:gap-y-10 gap-y-4">
          <ToolsCard
            className="card roombridge-featured"
            src={BhopalImage}
            title={"Bhopal"}
            subtitle={"Available Now! 🎯"}
          />
          <ToolsCard
            className="card"
            src={ComingSoon}
            title={"Bangalore"}
          />
          <ToolsCard
            className="card"
            src={ComingSoon}
            title={"Pune"}
          />
          <ToolsCard
            className="card"
            src={ComingSoon}
            title={"Delhi"}
          />
          <ToolsCard
            className="card"
            src={ComingSoon}
            title={"Mumbai"}
          />
           <ToolsCard
            className="card"
            src={ComingSoon}
            title={"Hyderabad"}
          />
        </div>
      </div>
    </div>
  );
}
