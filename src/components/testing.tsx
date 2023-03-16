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
import Layout from "@/components/Layout";

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
    <div className="card bg-base-100  lg:card-side ">
      <Image
        className="rounded-3xl lg:h-max"
        src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
        alt="Album"
        width={622}
        height={580}
      />

      <div className="card-body mt-2 ">
        <strong className="text-[21px] font-semibold"> NFT #{nft.id}</strong>
        <h2 className="card-title my-2 text-[40px] font-bold">
          Public Mint is{" "}
          <button
            className={`rounded-xl bg-green-700 py-2 px-2 text-white ${
              nft.live ? `bg-green-700` : `bg-red-700`
            })`}
          >
            {nft.live ? `Live` : `Off`}
          </button>
        </h2>
        <div className="mt-2 ">
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
          Whitelist: <strong className=" font-semibold">{nft.whitelist}</strong>
          <br />
          Presale: <strong className=" font-semibold">
            {nft.presale}
          </strong>{" "}
          <br />
          <br />
          <span className=" rounded-full border border-solid px-3">
            {nft.maxCount} MAX PER WALLET
          </span>
        </div>
        <div className=" mb-16 mt-4 flex flex-row">
          <p>
            Price: <br />
            <strong className=" text-[28px]">{nft.price} ETH</strong>
          </p>{" "}
          <p>
            Remaining: <br />
            <strong className=" text-[28px]">
              {nft.packsLeft}/{nft.packsCount}
            </strong>
          </p>
        </div>
        <div className="card-actions ">
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-[478px] border-none text-base normal-case text-white"
          >
            Mint Now
          </label>
        </div>
      </div>
    </div>
  );
}
