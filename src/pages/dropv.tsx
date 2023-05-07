/* eslint-disable react-hooks/rules-of-hooks */
import { testNft } from "./api/testdb";
import NftCard from "@/components/NftCard";
import classNames from "classnames";
import { useState } from "react";
import { Info } from "@/components/info";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Head from "next/head";
const cn = classNames;

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

export const dropv = () => {
  const [showInfo, setShowInfo] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Drop</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative m-auto flex max-w-[1200px] items-center justify-center">
        <div className="absolute m-auto flex h-full w-full flex-col items-start justify-center px-4 py-8 text-2xl font-extrabold text-white md:text-6xl md:leading-[87px]">
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
      <Layout navBarBehavior={1}>
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

        <div
          className={cn(
            "grid  grid-flow-row grid-cols-2 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 ",
            {
              "hidden ": showInfo,
            }
          )}
        >
          {testNft.map((item, i) => (
            <NftCard {...item} key={i} />
          ))}
        </div>

        <div className={cn({ "hidden ": !showInfo })}>
          <Info />
        </div>
      </Layout>
    </>
  );
};
export default dropv;
