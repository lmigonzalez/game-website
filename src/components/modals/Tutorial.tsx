import React from "react";
import Image from "next/image";
interface Props {
  handleDisplayWallet: () => void;
  nextWindow: () => void;
}
const Tutorial: React.FC <Props> = ({handleDisplayWallet, nextWindow}) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-end justify-center bg-black bg-opacity-70 lg:items-center">
      <div className="w-[750px] max-w-full rounded-lg bg-white text-black">
        <div className="relative w-full border-b-[2px] border-solid px-10  py-4 text-center">
          <strong className="text-2xl ">Learn How to Purchase Token</strong>
          <button
            onClick={handleDisplayWallet}
            className="absolute right-4 top-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-8 px-16">
          <div className="m-auto flex h-[335px] w-[628px] max-w-full items-center justify-center bg-[#B8B8B8]">
            <Image src="/youtube.png" alt="" width={50} height={50} />
          </div>
        </div>

        <div className="flex justify-center border-t-[2px] border-solid border-[#CDD6D7] py-7">
          <button onClick={nextWindow}>
            <p className="orange-gradient flex h-14 w-48 items-center justify-center rounded-full text-white">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
