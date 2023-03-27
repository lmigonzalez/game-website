import { ImageLoaderProps } from "next/image";
import { FC } from "react";
import Image from "next/image";
const ItemCard: FC<{ img: ImageLoaderProps; equipped: boolean }> = ({
  img,
  equipped,
}) => {
  return (
    <div className="container flex flex-col items-center justify-center gap-4">
      <Image
        src={img.src}
        alt={"no img"}
        width={337}
        height={337}
        className=" rounded-2xl"
      />
      {!equipped ? (
        <div className="orange-gradient flex h-[45px] w-[192px] items-center justify-center rounded-full p-[1px]  pl-[1px]">
          <button className="orange-text flex h-full w-full items-center justify-center rounded-full bg-[#dcdce7]">
            <p className="orange-gradient bg-clip-text text-transparent">
              Equip
            </p>
          </button>
        </div>
      ) : (
        <button className=" h-[45px] w-[192px]">
          <div className="orange-gradient flex h-full w-full items-center justify-center rounded-3xl text-[#FCDDEC]">
            Equiped
          </div>
        </button>
      )}
    </div>
  );
};
export default ItemCard;
