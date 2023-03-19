/* eslint-disable react-hooks/rules-of-hooks */
import { testNft } from './api/testdb';
import NftCard from '@/components/NftCard';
import classNames from 'classnames';
import { useState } from 'react';
import { Info } from '@/components/info';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
const cn = classNames;

const poppins = Poppins({
  weight: ['800'],
  subsets: ['latin'],
});

export const dropv = () => {
  const [showInfo, setShowInfo] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Buy NFT</title>
        <meta name="description" content="An NFT buyer guide" />
      </Head>
      <Layout>
        <main className="text-black">
          <div className="relative">
            <div className="absolute flex h-full w-full flex-col items-start justify-center px-4 py-8 text-2xl font-extrabold text-white md:text-6xl md:leading-[87px]">
              <h2>Drop Name Here</h2>
              <h3>Subtitle</h3>
            </div>
            <Image
              className="mb-11"
              src="/FREE-NFT-drops-cover 1.svg"
              alt="FREE-NFT-drops-cover"
              width={1500}
              height={900}
            />
          </div>

        <div className="tabs flex justify-center gap-4 ">
          <a
            className={cn("tab w-11 text-2xl text-[roboto] text-black", {
              " text-color border-gradient-orange tab-bordered tab-active tab-border-2":
                showInfo,
            })}
            onClick={() => setShowInfo(true)}
          >
            Info
          </a>
          <a
            className={cn("tab  w-14 text-2xl text-[roboto] text-black", {
              "text-color border-gradient-orange tab-bordered tab-active tab-border-2":
                !showInfo,
            })}
            onClick={() => setShowInfo(false)}
          >
            Shop
          </a>
        </div>

          <div className={cn({ 'hidden ': !showInfo })}>
            <Info />
          </div>
        </main>
      </Layout>
    </>
  );
};
export default dropv;
