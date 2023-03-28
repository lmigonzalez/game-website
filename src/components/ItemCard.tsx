import { ImageLoaderProps } from "next/image";
import { FC } from "react";
import Image from "next/image";
const ItemCard: FC<{ img: ImageLoaderProps; equipped: boolean }> = ({
  img,
  equipped,
}) => {
  return (
    <div className="container flex h-fit w-fit flex-col items-center justify-center gap-3 lg:justify-start lg:gap-4">
      <Image
        src={img.src}
        alt={"no img"}
        width={182.48}
        height={182.48}
        className=" rounded-2xl lg:h-[337px] lg:w-[337px]"
      />
      {!equipped ? (
        <div className="orange-gradient flex h-[24.37px] w-[103.97px] items-center justify-center rounded-full p-[1px] pl-[1px] text-[8.66px] lg:h-[45px] lg:w-[192px] lg:text-base">
          <button className="orange-text flex h-full w-full items-center justify-center rounded-full bg-[#dcdce7]">
            <p className="orange-gradient bg-clip-text text-transparent">
              Equip
            </p>
          </button>
        </div>
      ) : (
        <button className="h-[24.37px] w-[103.97px] lg:h-[45px] lg:w-[192px]">
          <div className="orange-gradient 4 flex h-full w-full items-center justify-center rounded-3xl text-[8.66px] text-[#FCDDEC]">
            Equiped
          </div>
        </button>
      )}
    </div>
  );
};
export default ItemCard;
