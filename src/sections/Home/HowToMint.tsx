import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['700'],
  subsets: ['latin'],
});

const HowToMint = () => {
  return (
    <section className={`${poppins.className} py-20`}>
      <div className="m-auto w-[1400px] max-w-full space-y-8 px-4">
        <p className="text-base font-bold text-[#DB0F29]">Easy Steps</p>
        <h2 className="text-6xl font-bold">HOW TO MINT</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-nowrap items-start">
            <p className="text-with-border mr-8 text-6xl font-bold">1</p>
            <p className="font-bold">
              Connect your <br /> wallet
            </p>
          </div>
          <div className="flex flex-nowrap items-start">
            <p className="text-with-border mr-8 text-6xl font-bold">2</p>
            <p className="font-bold">
              Select your <br /> quantity
            </p>
          </div>
          <div className="flex flex-nowrap items-start">
            <p className="text-with-border mr-8 text-6xl font-bold">3</p>
            <p className="font-bold">
              Confirm the <br /> transaction
            </p>
          </div>
          <div className="flex flex-nowrap items-start">
            <p className="text-with-border mr-8 text-6xl font-bold">4</p>
            <p className="font-bold">
              Receive you <br /> NFTs
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-24 h-[320px] w-full bg-slate-400 overflow-x-scroll overflow-y-hidden hide-scroll-bar">
        <div className="flex absolute h-[320px]">
          <Image src="/8Qz2gKJ2.svg" alt="" width={338} height={320} />
          <Image
            src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
            alt=""
            width={338}
            height={320}
          />
          <Image
            src="/vaRnk3D.svg"
            alt=""
            width={338}
            height={320}
          />
          <Image
            src="/D4Q9FxU 2.svg"
            alt=""
            width={338}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToMint;
