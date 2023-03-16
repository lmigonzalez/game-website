/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Modal } from "@/components/Modal";
import { NftCard } from "@/components/NftCard";
import { NftDetail } from "@/components/NftDetail";
import { testNft } from "../pages/api/testdb";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { JoinUs } from "@/components/JoinUs";
import { timeUnits } from "@/utils/unitTime";
import Image from "next/image";

export default function asd() {
  const [timeLeft, setTimeLeft] = useState(1234234);
  const nft = testNft[0];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <main className="justify center flex items-center p-3">
        <div className="card flex h-[602] w-[622] gap-3 bg-base-100 font-[poppins] lg:card-side">
          <Image
            className="rounded-3xl"
            src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
            alt="Album"
            width={622}
            height={580}
          />

          <div className="card-body mt-2 ">
            <strong className="font-semibold text-[21]"> NFT #{nft.id}</strong>
            <h2 className="card-title whitespace-nowrap text-[40px]">
              Public Mint is{" "}
              <button
                className={`rounded-xl bg-green-700 py-2 px-2 text-white ${
                  nft.live ? `bg-green-700` : `bg-red-700`
                })`}
              >
                {nft.live ? `Live` : `Off`}
              </button>
            </h2>
            <p>
              Mint end in:{" "}
              <strong className="font-semibold">
                {timeUnits(timeLeft)?.days !== 0
                  ? `${timeUnits(timeLeft)?.days} hours: `
                  : " "}
                {timeUnits(timeLeft)?.hours !== 0
                  ? `${timeUnits(timeLeft)?.hours} hours: `
                  : " "}
                {timeUnits(timeLeft)?.minutes !== 0
                  ? `${timeUnits(timeLeft)?.minutes} hours: `
                  : " "}
                {`${timeUnits(timeLeft)?.seconds} sec`}.
              </strong>
              <br />
              <br />
              Whitelist: {nft.whitelist}
            </p>

            <div className="card-actions ">
              <button className="btn-primary btn">Listen</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
