import { ImageLoaderProps } from "next/image";
import { FC } from "react";
import Image from "next/image";
const ItemCard: FC<{ img: ImageLoaderProps; equipped: boolean }> = ({
  img,
  equipped,
}) => {
  return (
    <div className="flex h-fit w-fit flex-col items-center justify-center gap-3 whitespace-nowrap md:gap-4 lg:justify-start">
      <Image
        src={img.src}
        alt={"no img"}
        width={182.48}
        height={182.48}
        className=" w-full rounded-2xl"
      />
      {!equipped ? (
        <button className="flex h-[24.37px] w-[103.97px] items-center justify-center rounded-3xl border-2 border-[#DB0F29] py-2   md:h-[45px] md:w-[192px] md:text-base">
          <span className="text-color"> Equip</span>
        </button>
      ) : (
        <button className="h-[24.37px] w-[103.97px] md:h-[45px] md:w-[192px]">
          <div className="orange-gradient flex h-full w-full items-center justify-center rounded-3xl text-[8.66px] text-[#FCDDEC] md:text-base">
            Equipped
          </div>
        </button>
      )}
    </div>
  );
};
export default ItemCard;
