import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { timeUnits } from '../utils/unitTime';
import { nft } from '@/pages/api/testdb';
import Layout from '@/components/Layout';
import { useStateContext } from '@/context/StateContext';

export const NftDetail: FC<nft> = (nft) => {
  const [timeLeft, setTimeLeft] = useState(1234234);

  const { globalNFT } = useStateContext();


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Layout>
      <main className="card px-4 pt-48 text-black lg:card-side">
        <Image
          className="rounded-3xl lg:h-max"
          src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
          alt="Album"
          width={622}
          height={580}
        />

        <div className="card-body  pt-10">
          <strong className="text-sm font-semibold xl:text-base">
            {' '}
            NFT #{globalNFT.id}
          </strong>
          <h2 className="card-title my-2 whitespace-nowrap text-3xl font-bold xl:text-4xl">
            Public Mint is{' '}
            <span
              className={`rounded-xl bg-green-700 py-1 px-2 text-white ${
                globalNFT.live ? `bg-green-700` : `bg-red-700`
              })`}
            >
              {globalNFT.live ? `Live` : `Off`}
            </span>
          </h2>
          <div className="mt-2">
            Mint end in:{' '}
            <strong className="font-semibold">
              {timeUnits(timeLeft)?.days !== 0
                ? `${timeUnits(timeLeft)?.days} hours: `
                : ' '}
              {timeUnits(timeLeft)?.hours !== 0
                ? `${timeUnits(timeLeft)?.hours} hours: `
                : ' '}
              {timeUnits(timeLeft)?.minutes !== 0
                ? `${timeUnits(timeLeft)?.minutes} hours: `
                : ' '}
              {`${timeUnits(timeLeft)?.seconds} sec`}.
            </strong>
            <br />
            <br />
            Whitelist:{' '}
            <strong className=" font-semibold">{globalNFT.whitelist}</strong>
            <br />
            Presale: <strong className=" font-semibold">
              {globalNFT.presale}
            </strong>{' '}
            <br />
            <br />
            <span className=" rounded-full border border-solid px-3">
              {globalNFT.maxCount} MAX PER WALLET
            </span>
          </div>
          <div className=" mb-16 mt-4 flex flex-row text-base xl:text-lg">
            <p>
              Price: <br />
              <strong className="">{globalNFT.price} ETH</strong>
            </p>{' '}
            <p>
              Remaining: <br />
              <strong className=" ">
                {globalNFT.packsLeft}/{globalNFT.packsCount}
              </strong>
            </p>
          </div>
          <div className="card-actions ">
            <label
              htmlFor="my-modal"
              className="orange-gradient btn-circle btn h-14 w-[400px] border-none text-lg normal-case text-white lg:w-[300px] xl:w-[478px]"
            >
              Mint Now
            </label>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default NftDetail;
