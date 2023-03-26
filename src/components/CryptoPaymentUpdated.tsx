import React from 'react';
import Image from 'next/image';
const CryptoPaymentUpdated = () => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-70 px-4">
      <div className="w-[750px] max-w-full rounded-lg bg-white text-black">
        <div className="relative w-full border-b-[2px] border-solid px-10  py-4 text-center">
          <strong className="text-2xl ">Check out</strong>
          <button
            // onClick={handleDisplayWallet}
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
        <div className="pt-8">
          <div className="flex items-center justify-between space-x-3 px-8">
            <div className="custom-shadow flex w-1/2 flex-col items-center justify-center rounded border-[2px] border-solid border-[#DB0F29] py-4">
              <strong>Crypto</strong>
              <p>Payment with Matic</p>
            </div>
            <div className="custom-shadow flex w-1/2 flex-col items-center justify-center rounded py-4">
              <strong>Credit Card</strong>
              <p className="flex items-center">
                Payment with{' '}
                <Image src="/visa.png" alt="visa" width={35} height={35} />{' '}
              </p>
            </div>
          </div>

          <div className="mt-8 px-8">
            <strong className="text-xl">Number of Coins</strong>
            <div className="mt-3 flex h-14">
              <button className="flex w-1/4 items-center justify-center bg-[#F5F5F5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="w-2/4 border-[2px] border-[#F5F5F5] bg-white"
              />
              <button className="flex w-1/4 items-center justify-center bg-[#F5F5F5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="m-auto my-8 mb-8 flex w-[600px] max-w-full items-center justify-between space-x-4">
            <hr className="h-[2px] w-full bg-[#DBDBDB]" />
            <p className="whitespace-nowrap">OR</p>
            <hr className="h-[2px] w-full bg-[#DBDBDB]" />
          </div>

          <div className="flex items-center justify-between px-8">
            <div className="custom-shadow flex h-32 w-56 flex-col items-center justify-center rounded-md">
              <strong>Bundle 1</strong>
              <p className="pt-2 pb-4">
                Get <b>10%</b> Discount
              </p>

              <button
                className=" flex h-8 w-24 items-center
					justify-center rounded-full border-2 border-[#DB0F29] py-4"
              >
                {' '}
                <p className="text-color">Select</p>{' '}
              </button>
            </div>
            <div className="custom-shadow flex h-32 w-56 flex-col items-center justify-center rounded-md">
              <strong>Bundle 1</strong>
              <p className="pt-2 pb-4">
                Get <b>10%</b> Discount
              </p>

              <button
                className=" flex h-8 w-24 items-center
					justify-center rounded-full border-2 border-[#DB0F29] py-4"
              >
                {' '}
                <p className="text-color">Select</p>{' '}
              </button>
            </div>
            <div className="custom-shadow flex h-32 w-56 flex-col items-center justify-center rounded-md">
              <strong>Bundle 1</strong>
              <p className="pt-2 pb-4">
                Get <b>10%</b> Discount
              </p>

              <button
                className=" flex h-8 w-24 items-center
					justify-center rounded-full border-2 border-[#DB0F29] py-4"
              >
                {' '}
                <p className="text-color">Select</p>{' '}
              </button>
            </div>
          </div>

          <div className="mt-8 px-8">
            <div className="flex items-center justify-between border-t-2 py-4">
              <div>
                <strong className="text-xl">Summary</strong>
              </div>
              <div className="flex space-x-2">
                <div className='flex flex-col justify-end items-end'>
                  <strong className="">Number of Coins:</strong> 
                  <strong>Transaction Fee:</strong>
                  <strong>Price of Coin:</strong>
                </div>
                <div>
                  <p>20</p>
                  <p>2%</p>
                  <p>$0.01</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t-[2px] border-solid border-[#CDD6D7] py-7">
          <button type="submit">
            <p className="orange-gradient flex h-14 w-48 items-center justify-center rounded-full text-white">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPaymentUpdated;
