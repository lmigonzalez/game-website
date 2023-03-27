import Image from "next/image";
import { FC } from "react";
const MatchingCard: FC<{ ocuppied: Boolean }> = ({ ocuppied }) => {
  return (
    <div className="container flex justify-center ">
      {ocuppied ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"}
            alt={"no img"}
            width={251}
            height={251}
            className="rounded-3xl"
          />
          <span className="text-color text-2xl font-bold">Bal.$700</span>
          <div className="orange-gradient flex h-[45px] w-[192px] items-center justify-center rounded-full p-[1px]  pl-[1px]">
            <button className="orange-text flex h-full w-full items-center justify-center rounded-full bg-[#dcdce7]">
              <p className="orange-gradient bg-clip-text text-transparent">
                Change Image
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="orange-gradient  h-[250px] w-[250px]  rounded-3xl p-1">
          <div className="flex h-full  w-full items-center justify-center rounded-[20px] bg-[#F5F5F5]">
            <p className="orange-gradient bg-clip-text text-2xl text-transparent">
              Opponent waiting...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MatchingCard;
