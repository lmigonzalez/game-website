import React from "react";
import Image from "next/image";
import { poppins } from "../utils/fonts";
import { TimeLike } from "fs";
import useCountDown from "react-countdown-hook";
import { timeUnits } from "../utils/unitTime";

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
}

export function NftDetail(props: INftDetail) {
  const [timeRemain, { start, pause, resume, reset }] = useCountDown(
    props.timeRemain
  );
  React.useEffect(() => {
    start();
  }, []);

  return (
    <div
      className={`${poppins.className} flex flex-row justify-around gap-16 `}
    >
      <div className="h-auto w-auto flex-auto">
        <Image
          className="rounded-3xl "
          src={props.img}
          alt=""
          height={200}
          width={622}
        />
      </div>
      <div className="mt-10  flex flex-col ">
        <span className="text-[#292929]">NFT #{props.numb}</span>
        <div className="flex flex-row gap-2">
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
        <span className=" my-16">
          Mint end in:
          {timeUnits(timeRemain)?.days}days:
          {timeUnits(timeRemain)?.hours}:hours
          {timeUnits(timeRemain)?.minutes}min:
          {timeUnits(timeRemain)?.seconds}sec
        </span>
      </div>
    </div>
  );
}
export default NftDetail;
