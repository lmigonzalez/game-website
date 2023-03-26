import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import TopLeaderCard from "./TopLeaderCard";
import { ITopLeaderCard } from "@/pages/api/testdb";

const TopLeaderBoard: FC<{ leaders: ITopLeaderCard[] }> = ({ leaders }) => {
  return (
    <div className="flex flex-col ">
      <div className="">
        <TopLeaderCard
          {...(leaders.find((card) => card.pos === 1) as ITopLeaderCard)}
        />
      </div>
      <div className=" flex flex-col justify-between sm:mt-[-200px] sm:flex-row sm:gap-[242px]">
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
