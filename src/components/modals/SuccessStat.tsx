import React from "react";
import Image from "next/image";
const SuccessStat = () => {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-end justify-center bg-black bg-opacity-70 lg:items-center">
      <div className="flex w-[400px] max-w-full flex-col items-center justify-center space-y-6 rounded-lg bg-white p-8 text-center text-black">
        <Image
          src="/paper-plane.svg"
          alt=""
          width={92}
          height={92}
          className="mb-6"
        />

        <strong className="text-color text-2xl">Woo hoo!</strong>
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
