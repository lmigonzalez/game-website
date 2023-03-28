import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import TopLeaderCard from "./TopLeaderCard";
import { ITopLeaderCard } from "@/pages/api/testdb";

const TopLeaderBoard: FC<{ leaders: ITopLeaderCard[] }> = ({ leaders }) => {
  return (
    <div className="container flex-none">
      <div className="">
        <TopLeaderCard
          {...(leaders.find((card) => card.pos === 1) as ITopLeaderCard)}
        />
      </div>
      <div className="mt-[-200px] flex-row gap-[242px]">
        <TopLeaderCard
          {...(leaders.find((card) => card.pos === 2) as ITopLeaderCard)}
        />
      </div>

      <div>
        <TopLeaderCard
          {...(leaders.find((card) => card.pos === 3) as ITopLeaderCard)}
        />
      </div>
    </div>
  );
};
export default TopLeaderBoard;
