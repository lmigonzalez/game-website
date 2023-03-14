import React from "react";
import Image from "next/image";
import useCountDown from "react-countdown-hook";
import { timeUnits } from "../utils/unitTime";
import MintButton from "./MintButton";
import { nft } from "@/pages/api/testdb";

export function NftDetail(props: nft) {
  const [timeRemain, { start, pause, resume, reset }] = useCountDown(
    props.timeRemain
  );
  React.useEffect(() => {
    start();
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
        <span className="text-[#292929] lg:text-2xl">NFT #{props.numb}</span>
        <div className="flex flex-row gap-2 whitespace-nowrap">
          <span className=" text-3xl font-bold lg:text-6xl">
            Public Mint is
          </span>
          <div
            className={`items-center justify-center gap-2 rounded-2xl text-3xl ${
              props.live ? `bg-green-700` : `bg-red-700`
            }`}
          >
            <span className=" m-5 font-bold text-white lg:text-6xl">
              {props.live ? `Live` : `Off`}
            </span>
          </div>
        </div>
        <span className="lg:text-xl">
          Mint end in:
          {timeUnits(timeRemain)?.days}days:
          {timeUnits(timeRemain)?.hours}:hours
          {timeUnits(timeRemain)?.minutes}min:
          {timeUnits(timeRemain)?.seconds}sec
        </span>
        <div className="flex flex-col">
          <span className=" text-xl">Whitelist: {props.whitelist}</span>
          <span className=" text-xl">Presale: {props.presale}</span>
        </div>
        <div className="w-fit rounded-full border border-black text-center">
          <span className="m-5 text-xl">{props.maxCount} MAX PER WALLET</span>
        </div>
        <div className=" flex flex-row gap-28">
          <div className="flex flex-col">
            <span className="lg:text-xl"> Price:</span>
            <span className="text-2xl font-bold lg:text-4xl">
              {props.price} ETH
            </span>
          </div>
          <div className="flex flex-col">
            <span className="lg:text-xl"> Remaining:</span>
            <span className="text-2xl font-bold lg:text-4xl">
              {props.packsLeft}/{props.packsCount}
            </span>
          </div>
        </div>
        <MintButton />
      </div>
    </div>
  );
}
export default NftDetail;
