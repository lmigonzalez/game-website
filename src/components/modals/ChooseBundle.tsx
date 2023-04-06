import React from "react";
import Image from "next/image";
interface Props {
  handleDisplayWallet: () => void;
  nextWindow: () => void;
  prevWindow: () => void;
}
const ChooseBundle: React.FC <Props> = ({handleDisplayWallet, nextWindow, prevWindow}) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-end justify-center bg-black bg-opacity-70 px-4 lg:items-center">
      <div className="w-[750px] max-w-full rounded-lg bg-white text-black">
        <div className="relative w-full border-b-[2px] border-solid px-10  py-4 text-center">
          <strong className="text-2xl ">Check out Summary</strong>
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

        {/* middle */}
        <div className="flex items-center justify-between space-x-6 py-8 px-8">
          <div className="custom-shadow flex w-1/2 flex-col items-center justify-center rounded border-[2px] border-solid border-[#DB0F29] py-4 ">
          <Image
                src="/image 35.svg"
                alt="visa"
                width={35}
                height={35}
                className="mx-2 rounded bg-[#F0F2F5] p-1"
              />
            <strong>Crypto</strong>
            <p>Payment with Matic</p>
          </div>
          <div className="flex h-full w-1/2 flex-col items-start justify-between space-y-2">
            <p className="">
              <b>Number of Coins: </b> 20
            </p>
            <p>
              {" "}
              <b>Transaction Fee:</b>2%
            </p>
            <p>
              <b>Price of Coin: </b> $0.01
            </p>
          </div>
        </div>

        <div className="flex justify-between px-8 py-4 text-[#04091E] opacity-60">
          <p>You will pay</p>
          <p>$12</p>
        </div>

        <div className="flex justify-end space-x-3 border-t-[2px] border-solid border-[#CDD6D7] py-7 px-8 ">
          <button
          onClick={prevWindow}
            className=" flex h-12 w-32 items-center
				  justify-center rounded-full border-2 border-[#DB0F29] py-4"
          >
            {" "}
            <p className="text-color">Back</p>{" "}
          </button>

          <button onClick={nextWindow}>
            <p className="orange-gradient flex h-12 w-32 items-center justify-center rounded-full text-white">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseBundle;
