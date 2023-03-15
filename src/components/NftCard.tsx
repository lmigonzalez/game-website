import React, { FC } from "react";
import Image from "next/image";
import { nft } from "@/pages/api/testdb";

export const NftCard: FC<nft> = (nft) => {
  return (
    <div className="flex flex-col  font-[roboto]">
      <div className="flex h-auto ">
        <Image
          className=" rounded-sm"
          src={nft.img}
          alt=""
          height={420}
          width={337}
        />
      </div>
      <div className="mt-1 flex flex-col text-[7px] sm:text-sm">
        <div className="flex flex-col text-[7px] sm:text-sm">
          <span>{nft.packsCount} Packs</span>
          <span className=" text-xs font-semibold md:text-2xl">{nft.name}</span>
          <span className=" text-gray-400 ">
            Contains {nft.collectiblesCount}
            {nft.collectiblesCount == 1 ? " collectible" : " collectibles"}
          </span>
        </div>
        <div className="mt-2 flex flex-col text-[8px] sm:text-sm">
          {nft.packsLeft !== 0 ? (
            <>
              <span className="text-xs font-semibold md:text-2xl">
                ${nft.price}{" "}
              </span>
              <span className="  text-blue-400">
                {nft.packsLeft} Packs Left
              </span>
            </>
          ) : (
            <span className="font-semibold text-gray-400 md:text-xl">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default NftCard;
