import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import Medal from "./Medal";
import { ITopLeaderCard } from "@/pages/api/testdb";

const TopLeaderCard: FC<ITopLeaderCard> = ({ pos, name, userName, img }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="indicator h-[162px] w-[162px]">
        <div className="indicator-start indicator-item translate-y-0 translate-x-0">
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
      <div className="flex flex-col gap-0 text-center">
        <strong>{pos}</strong>
        <strong className="font-semibold">{name}</strong>
        <span className="text-[#B7B3B3]">{userName}</span>
      </div>
    </div>
  );
};
export default TopLeaderCard;
