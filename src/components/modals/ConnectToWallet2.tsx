import React from 'react';
import Image from 'next/image';

interface Props {
  handleDisplayWallet: () => void;
  nextWindow: () => void;
  prevWindow: () => void
}

const ConnectToWallet2: React.FC<Props> = ({
  handleDisplayWallet,
  nextWindow,
  prevWindow
}) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-end justify-center bg-black bg-opacity-70 lg:items-center">
      <div className="w-[470px] max-w-full rounded-lg bg-white text-black">
        <div className="relative w-full border-b-[2px] border-solid px-10  py-4 text-center">
          <strong className="text-2xl">Connect to wallet</strong>
          <button onClick={handleDisplayWallet} className="absolute right-4 top-4">
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

        <div className="flex flex-col space-y-4 px-10 py-5">
          <button
            onClick={() => nextWindow()}
            className="flex w-full items-center justify-between rounded-md border-[1px] border-solid border-[#DBDDE5] bg-[#F2F3F5] px-4 py-6"
          >
            <div className="flex space-x-4">
              <strong>Metamask</strong>
              <div className="flex">
                Networks{' '}
                <span className="ml-1 rounded-full bg-slate-400 text-white">
                  {' '}
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
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Image
              className="mr-2"
              src={'/fox.png'}
              alt="google icon"
              width={40}
              height={40}
            />
          </button>

          <button
            onClick={() => nextWindow()}
            className="flex w-full items-center justify-between rounded-md border-[1px] border-solid border-[#DBDDE5] bg-[#F2F3F5] px-4 py-6"
          >
            <div className="flex space-x-4">
              <strong>Metamask</strong>
              <div className="flex">
                Networks{' '}
                <span className="ml-1 rounded-full bg-slate-400 text-white">
                  {' '}
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
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Image
              className="mr-2"
              src={'/fox.png'}
              alt="google icon"
              width={40}
              height={40}
            />
          </button>
        </div>

        <div className="flex justify-end space-x-3 border-t-[2px] border-solid border-[#CDD6D7] py-7 px-8 ">
          <button
          onClick={prevWindow}
            className=" flex h-12 w-32 items-center
				  justify-center rounded-full border-2 border-[#DB0F29] py-4"
          >
            {' '}
            <p className="text-color">Back</p>{' '}
          </button>

          <button type="submit">
            <p className="orange-gradient flex h-12 w-32 items-center justify-center rounded-full text-white">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectToWallet2;
