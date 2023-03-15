import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { timeUnits } from "../utils/unitTime";
import { MintButton } from "./MintButton";
import { nft } from "@/pages/api/testdb";

export const NftDetail: FC<nft> = (nft) => {
  const [timeLeft, setTimeLeft] = useState(1234234);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={` flex flex-col justify-between  md:flex-row md:items-center `}
    >
      <div className="flex justify-end  ">
        <Image
          className=" rounded-3xl"
          src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
          alt="kds-tickets-m"
          width={640}
          height={270}
        />
      </div>
      <div className="mx-6 flex flex-col md:gap-4  ">
        <span className="text-[#292929] lg:text-2xl">NFT #{nft.id}</span>
        <div className="flex flex-row gap-2 whitespace-nowrap">
          <span className=" text-3xl font-bold lg:text-6xl">
            Public Mint is
          </span>
          <div
            className={`items-center justify-center gap-2 rounded-2xl text-3xl ${
              nft.live ? `bg-green-700` : `bg-red-700`
            }`}
          >
            <span className=" m-5 font-bold text-white lg:text-6xl">
              {nft.live ? `Live` : `Off`}
            </span>
          </div>
        </div>
        <span className="lg:text-xl">
          Mint end in:
          {timeUnits(timeLeft)?.days !== 0
            ? `${timeUnits(timeLeft)?.days} hours: `
            : " "}
          {timeUnits(timeLeft)?.hours !== 0
            ? `${timeUnits(timeLeft)?.hours} hours: `
            : " "}
          {timeUnits(timeLeft)?.minutes !== 0
            ? `${timeUnits(timeLeft)?.minutes} hours: `
            : " "}
          {`${timeUnits(timeLeft)?.seconds} sec`}
        </span>
        <div className="flex flex-col">
          <span className=" text-xl">Whitelist: {nft.whitelist}</span>
          <span className=" text-xl">Presale: {nft.presale}</span>
        </div>
        <div className="w-fit rounded-full border border-black text-center">
          <span className="m-5 text-xl">{nft.maxCount} MAX PER WALLET</span>
        </div>
        <div className=" flex flex-row gap-28">
          <div className="flex flex-col">
            <span className="lg:text-xl"> Price:</span>
            <span className="text-2xl font-bold lg:text-4xl">
              {nft.price} ETH
            </span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-xl"> Remaining:</span>
            <span className="text-2xl font-bold lg:text-4xl">
              {nft.packsLeft}/{nft.packsCount}
            </span>
          </div>
        </div>
        <label
          htmlFor="my-modal"
          className="orange-gradient btn h-full w-full rounded-full border-none text-xl normal-case"
        >
          Mint Now
        </label>
      </div>
    </div>
  );
};
export default NftDetail;
