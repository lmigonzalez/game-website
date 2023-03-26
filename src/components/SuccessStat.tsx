import React from 'react';

const SuccessStat = () => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-70">
      <div className="w-[400px] max-w-full rounded-lg bg-white text-black flex flex-col justify-center items-center text-center space-y-4 p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            className='text-color'
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>

        <strong className='text-color text-2xl'>Woo hoo!</strong>
        <p>You have successfully Purchase your coins.</p>
        <button type="submit">
            <p className="orange-gradient flex h-8 w-24 items-center justify-center rounded text-white">
              Home
            </p>
          </button>
      </div>
    </div>
  );
};

export default SuccessStat;
