import React, { FC } from "react";
import Image from "next/image";
import { nft } from "@/pages/api/testdb";

export const NftCard: FC<nft> = (nft) => {
  return (
    <div className="flex flex-col gap-1 font-[roboto]">
      <div className="flex h-auto flex-auto ">
        <Image
          className=" rounded-sm"
          src={nft.img}
          alt=""
          height={455}
          width={337}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className=" text-xl">{nft.packsCount} Packs</span>
          <span className=" text-2xl font-semibold">{nft.name}</span>
          <span className=" text-xl text-gray-400">
            Contains {nft.collectiblesCount}
            {nft.collectiblesCount == 1 ? " collectible" : "collectibles"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {nft.packsLeft !== 0 ? (
            <>
              <span className=" text-2xl">${nft.price} </span>
              <span className=" text-xl text-blue-400">
                {nft.packsLeft} Packs Left
              </span>
            </>
          ) : (
            <span className="text-xl font-semibold text-gray-400">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default NftCard;
