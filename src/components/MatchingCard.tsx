import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
const MatchingCard: FC<{
  ocuppied: Boolean;
  img?: ImageLoaderProps;
  name?: string;
}> = ({ ocuppied, img, name }) => {
  return (
    <div className="container flex justify-center  ">
      {ocuppied ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={img?.src || ""}
            alt={"no img"}
            width={167}
            height={167}
            className="rounded-3xl md:h-[251px] md:w-[251px]"
          />
          <span className="text-color text-base font-bold md:text-2xl">
            {name}
          </span>
          <div className="orange-gradient flex h-[22.09px] w-[105.11px] items-center justify-center rounded-full p-[1px] pl-[1px] text-[8.03px] md:h-[45px]  md:w-[192px] md:text-base">
            <button className="orange-text flex h-full w-full items-center justify-center rounded-full bg-[#dcdce7]">
              <p className="orange-gradient bg-clip-text text-transparent">
                Change Image
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="orange-gradient  h-[167px] w-[167px] rounded-3xl p-1  md:h-[251px] md:w-[251px]">
          <div className="flex h-full  w-full items-center justify-center rounded-[20px] bg-[#F5F5F5]">
            <p className="orange-gradient bg-clip-text text-base text-transparent md:text-2xl">
              Opponent waiting...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MatchingCard;
