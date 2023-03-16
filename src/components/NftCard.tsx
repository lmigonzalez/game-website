import React, { FC } from "react";
import Image from "next/image";
import { nft } from "@/pages/api/testdb";

export const NftCard: FC<nft> = (nft) => {
  return (
    <div className="card flex flex-col rounded-none">
      <Image
        className="px-0"
        src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
        alt="nft"
        width={337}
        height={420}
      />

      <div className="card-body w-fit px-0">
        <strong className="text-sm">{nft.packsCount} Packs</strong>
        <strong className="card-title">{nft.name}</strong>
        <p className="text-[15px] text-[#A0A0A0]">
          {" "}
          Contains {nft.collectiblesCount}
          {nft.collectiblesCount == 1 ? " collectible" : " collectibles"}
        </p>
        {nft.packsLeft !== 0 ? (
          <p>
            $<strong className="text-[19px]">{nft.price}</strong> <br />
            <strong className="text-[#1199FA]">
              {nft.packsLeft} Packs Left
            </strong>
          </p>
        ) : (
          <strong className="text-xl font-semibold text-[#A0A0A0]">
            Sold Out
          </strong>
        )}
      </div>
    </div>
  );
};
export default NftCard;
