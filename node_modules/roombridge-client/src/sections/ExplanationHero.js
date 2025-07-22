import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import first from "../lib/img/5.webp";
import second from "../lib/img/6.webp";
import third from "../lib/img/9.webp";
import Step1 from "../lib/img/step1.png";
import Step2 from "../lib/img/step2.png";
import Step3 from "../lib/img/step3.png";
import Step4 from "../lib/img/step4.png";
import "../CSS/ExplanationHero.css";
import { useEffect, useState } from "react";

export default function ExplanationHero() {
  const [isMobile, setIsMobile] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative max-w-[1200px] mx-auto mt-12">
      <div
        id="product-explanation"
        style={{
          display: isMobile ? "flex" : "block",
          justifyContent: isMobile ? "center" : "unset",
        }}
      >
        <div className="grid gap-0 sm:grid-cols-1 justify-items-center container mx-auto lg:grid-cols-2">
          <img
            src={first}
            alt="1"
            className="w-80 h-auto order-2 sm:order-1 rounded"
          />
          <img
            src={second}
            alt="2"
            className="w-80 h-auto order-3  sm:order-2 rounded"
          />
          <img
            src={third}
            alt="3"
            className="w-100 h-auto order-1  sm:order-3 rounded"
          />
        </div>
      </div>

      <div className="pt-8 lg:absolute lg:right-10 mb-10 lg:-bottom-40">
        <Card
          aria-describedby="product-explanation"
          className="shadow-[0px_5px_0px_0px_#1a202c] lg:pt-0 flex items-center justify-center p-4 mx-auto lg:mx-0 mb-8 lg:mb-0"
          style={{
            marginTop: 50,
            maxWidth: 375,
            zIndex: 1000,
            border: "1px solid #1a202c",
          }}
        >
          <CardBody className="bg-opacity-75 text-black max-w-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">How it works?</h2>
            <ol className="space-y-4">
              <li className="flex items-center">
                <Image src={Step1} className="text-yellow-400 mr-2 h-8" />
                <span>Make yourself Register</span>
              </li>
              <li className="flex items-center">
                <Image src={Step2} className="text-blue-400 mr-2 h-8" />
                <span>Search your prefer Location</span>
              </li>
              <li className="flex items-center">
                <Image src={Step3} className="text-green-400 mr-2 h-8" />
                <span>And Boom 💥 Find your Roommates</span>
              </li>
              <li className="flex items-center">
                <Image src={Step4} className="text-yellow-300 mr-2 h-8" />
                <span>Checkout Best among them </span>
              </li>
            </ol>
            <Button
              as={Link}
              href={token ? "/generate-list" : "/register-user"}
              className="shadow-[0px_3px_0px_0px_#1a202c] mt-4"
              style={{ border: "2px solid #1a202c" }}
              variant="bordered"
            >
              {token ? "Find your Roommate" : "Register User"}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
