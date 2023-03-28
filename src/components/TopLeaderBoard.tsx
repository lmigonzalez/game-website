import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import TopLeaderCard from "./TopLeaderCard";
import { ITopLeaderCard } from "@/pages/api/testdb";

const TopLeaderBoard: FC<{ leaders: ITopLeaderCard[] }> = ({ leaders }) => {
  return (
    <div className="container">
      <div className="">
        <TopLeaderCard
          {...(leaders.find((card) => card.pos === 1) as ITopLeaderCard)}
        />
      </div>
      <div className=" mt-[-130px]  flex flex-row justify-between gap-[48px] md:mt-[-200px] md:gap-[242px]">
        <div>
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
    </div>
  );
};
export default TopLeaderBoard;
