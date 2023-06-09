import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import Medal from "./Medal";
import { ITopLeaderCard } from "@/pages/api/testdb";

const TopLeaderCard: FC<ITopLeaderCard> = ({ pos, name, userName, img }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="indicator h-[97px] w-[97px] md:h-[162px] md:w-[162px]">
        <div className="indicator-start indicator-item hidden -translate-y-5 -translate-x-[7px] md:flex">
          <Medal pos={pos} />
        </div>
        <Image
          className="w-full rounded-3xl"
          src={img?.src}
          alt={"no img"}
          width={img?.width}
          height={img?.width}
        />
      </div>
      <div className="flex flex-col gap-0 text-center text-[14.47px] md:text-2xl">
        <strong>{pos}</strong>
        <strong className="font-semibold">{name}</strong>
        <span className="text-[#B7B3B3]">{userName}</span>
      </div>
    </div>
  );
};
export default TopLeaderCard;
