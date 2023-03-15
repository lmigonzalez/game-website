import { Modal } from "@/components/Modal";
import { NftCard } from "@/components/NftCard";
import { NftDetail } from "@/components/NftDetail";
import { testNft } from "../pages/api/testdb";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { JoinUs } from "@/components/JoinUs";
import { timeUnits } from "@/utils/unitTime";

export default function asd() {
  const [timeLeft, setTimeLeft] = useState(1234234);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <main>
        <span className="countdown">
          <span
            style={{ ["--value" as string]: timeUnits(timeLeft)?.seconds }}
          ></span>
        </span>
      </main>
    </>
  );
}
