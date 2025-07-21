import { Image } from "@nextui-org/react";
import "../../CSS/Partners.css";
import { useEffect, useState } from "react";
import Amex from "../../lib/icons/amex.png";

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    marginTop: isMobile ? "20px" : "140px",
  };

  const banks = [
    {
      src: "https://ton.app/media/5c99e268-7c6e-4712-bc9c-1aa244ca0166.jpg?w=1000&q=50",
      alt: "TON Keeper Wallet",
    },
    {
      src: "https://ton.app/media/d2db8af3-b5fa-458b-a721-7142b2c82112.png?w=1000&q=50",
      alt: "MyTon Wallet",
    },
    {
      src: "https://ton.app/media/89f2c6f5-6b18-4f4b-9b57-1912397345dc.png?w=1000&q=50",
      alt: "TonHub",
    },
    {
      src: "https://ton.app/media/a59c4405-1086-456e-8100-9dc1e5763ff4.jpg?w=1000&q=50",
      alt: "Trust Wallet",
    },
  ];

  return (
    <div style={styles}>
      <div className="h-full max-w-6xl px-8 pb-12 mx-auto md:px-12 lg:px-32">
        <div className="px-6 mx-auto max-w-7xl flex justify-center items-center flex-col lg:px-8">
          <h2 className="text-xl uppercase leading-8 font-mono text-center text-gray-900">
            We work with your favorite Telegram Wallets.
          </h2>
          <div className="gap-4 mt-5 flex">
            {banks.map((bank, index) => (
              <div key={index}>
                <Image
                  style={{
                    width: "100%",
                    maxHeight: 60,
                    borderRadius: 0,
                    objectFit: "contain",
                  }}
                  src={bank.src}
                  alt={bank.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
