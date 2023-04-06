import { FC } from "react";
import Image, { ImageLoaderProps } from "next/image";
import { useRouter } from "next/router";

const MatchingCard: FC<{
  ocuppied: Boolean;
  img?: ImageLoaderProps;
  name?: string;
}> = ({ ocuppied, img, name }) => {

  const router = useRouter()
  return (
    <div onClick={() => router.push('/leader-board')} className="flex justify-center cursor-pointer">
      {ocuppied ? (
        <div className=" flex w-auto flex-col items-center justify-center gap-4">
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
        <div className="flex h-[167px] w-[167px] items-center justify-center rounded-3xl border-2 border-[#DB0F29] text-center md:h-[250px] md:w-[250px]">
          Opponent waiting...
        </div>
      )}
    </div>
  );
};
export default MatchingCard;
