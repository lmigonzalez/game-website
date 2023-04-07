import React from "react";
interface Props {
  handleDisplayWallet: () => void;
  nextWindow: () => void;
  prevWindow: () => void;
}
const EnterCardDetails: React.FC <Props> = ({handleDisplayWallet, nextWindow, prevWindow}) => {
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
          <form className="flex flex-col">
            <label>Card Holder</label>
            <input
              type="text"
              className="mb-4 border-b-[2px] border-black bg-white"
            />
            <label>Card Number</label>
            <input
              type="number"
              className="mb-4 border-b-[2px] border-black bg-white"
            />
            <div className="mb-4 flex space-x-4">
              <div className="flex flex-col">
                <label>Expiry Month</label>
                <input
                  type="text"
                  className="mb-4 border-b-[2px] border-black bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label>Expiry Year</label>
                <input
                  type="text"
                  className="mb-4 border-b-[2px] border-black bg-white"
                />
              </div>
            </div>

            <label>CVV</label>
            <input
              type="number"
              className="mb-4 w-fit border-b-[2px] border-black bg-white"
            />
          </form>
        </div>

        <div className="flex items-center justify-end space-x-3 px-8 py-4 text-black">
          <strong className="text-4xl">Amount</strong>
          <p className="text-4xl">$250</p>
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
              Pay
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterCardDetails;
