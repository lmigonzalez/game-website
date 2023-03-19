import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { timeUnits } from "../utils/unitTime";
import { Inft } from "@/pages/api/testdb";

export const NftDetail: FC<Inft> = (nft) => {
  const [timeLeft, setTimeLeft] = useState(1234234);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card  gap-6 lg:card-side">
      <Image
        className="rounded-3xl lg:h-max"
        src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
        alt="Album"
        width={622}
        height={580}
      />

      <div className="card-body pl-2 pt-10 md:pl-4">
        <strong className="text-sm font-semibold xl:text-base">
          {" "}
          NFT #{nft.id}
        </strong>
        <h2 className="card-title my-2 text-3xl font-bold sm:whitespace-nowrap xl:text-4xl">
          Public Mint is{" "}
          <span
            className={`rounded-xl bg-green-700 py-1 px-2 text-white ${
              nft.live ? `bg-green-700` : `bg-red-700`
            })`}
          >
            {nft.live ? `Live` : `Off`}
          </span>
        </h2>
        <div className="mt-2">
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
          <div className="flex flex-row gap-1">
            Whitelist:
            <strong className=" font-semibold">{` ${nft.whitelist}`} </strong>
            <Image
              src={"check-circle-svgrepo-com.svg"}
              alt={""}
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-row gap-1">
            Presale:
            <strong className=" font-semibold">{` ${nft.presale}`} </strong>
            <Image
              src={"check-circle-svgrepo-com.svg"}
              alt={""}
              width={20}
              height={20}
            />
          </div>
          <br />
          <br />
          <span className="rounded-xl border border-solid border-slate-600 px-3">
            {nft.maxCount} MAX PER WALLET
          </span>
        </div>
        <div className=" mb-16 mt-4 flex max-w-sm flex-row text-base xl:text-[16px]">
          <p>
            Price: <br />
            <strong className="text-xl font-bold xl:text-[28px]">
              {nft.price} ETH
            </strong>
          </p>{" "}
          <p>
            Remaining: <br />
            <strong className="text-xl font-bold xl:text-[28px]">
              {nft.packsLeft}/{nft.packsCount}
            </strong>
          </p>
        </div>
        <div className="card-actions ">
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-[320px] border-none text-lg normal-case text-white lg:w-[300px] xl:w-[478px]"
          >
            Mint Now
          </label>
        </div>
      </div>
    </div>
  );
};
export default NftDetail;
