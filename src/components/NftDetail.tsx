import React from "react";
import Image from "next/image";
import { poppins } from "../utils/fonts";
import { TimeLike } from "fs";
import useCountDown from "react-countdown-hook";
import { timeUnits } from "../utils/unitTime";
import MintButton from "./MintButton";

export interface INftDetail {
  id: string;
  numb: string;
  img: string;
  maxCount: number;
  price: number;
  packsCount: number;
  packsLeft: number;
  live: Boolean;
  timeRemain: number;
  whitelist: number | string;
  presale: number | string;
}

export function NftDetail(props: INftDetail) {
  const [timeRemain, { start, pause, resume, reset }] = useCountDown(
    props.timeRemain
  );
  React.useEffect(() => {
    start();
  }, []);

  return (
    <div className={` flex h-auto flex-col justify-around gap-16 md:flex-row`}>
      <div className="h-auto w-auto flex-auto">
        <Image
          className="rounded-3xl "
          src={props.img}
          alt=""
          height={622}
          width={580}
        />
      </div>
      <div className="mt-16  flex flex-col gap-6 ">
        <span className="text-2xl text-[#292929]">NFT #{props.numb}</span>
        <div className="flex flex-row gap-2 whitespace-nowrap">
          <span className=" text-6xl font-bold">Public Mint is</span>
          <div
            className={`items-center justify-center gap-2  rounded-2xl ${
              props.live ? `bg-green-700` : `bg-red-700`
            }`}
          >
            <span className=" m-5 text-6xl font-bold text-white">
              {props.live ? `Live` : `Off`}
            </span>
          </div>
        </div>
        <span className="  text-xl">
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
            <span className="text-xl"> Price:</span>
            <span className="text-4xl font-bold">{props.price} ETH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl"> Remaining:</span>
            <span className="text-4xl font-bold">
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
