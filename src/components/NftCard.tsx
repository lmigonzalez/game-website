import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

export interface INftCard {
  id: string;
  name: string;
  img: string;
  packsCount: number;
  collectiblesCount: number;
  price: number;
  packsLeft: number;
}

export function NftCard(props: INftCard) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-auto flex-auto ">
        <Image
          className=" rounded-sm"
          src={props.img}
          alt=""
          height={455}
          width={337}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className=" text-xl">{props.packsCount} Packs</span>
          <span className=" text-2xl font-semibold">{props.name}</span>
          <span className=" text-xl text-gray-400">
            Contains {props.collectiblesCount}
            {props.collectiblesCount == 1 ? " collectible" : "collectibles"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {props.packsLeft !== 0 ? (
            <>
              <span className=" text-2xl">${props.price} </span>
              <span className=" text-xl text-blue-400">
                {props.packsLeft} Packs Left
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
}
export default NftCard;
