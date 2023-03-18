/* eslint-disable react-hooks/rules-of-hooks */
import { testNft } from "./api/testdb";
import NftCard from "@/components/NftCard";
import classNames from "classnames";
import { useState } from "react";
import { Info } from "@/components/info";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Poppins } from "next/font/google";
const cn = classNames;

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

export const dropv = () => {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  let cols = testNft.length / 4;
  return (
    <Layout>
      <main className="">
        <div className="relative">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-extrabold leading-[87px] text-white">
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
            className={cn("tab w-12 text-2xl text-[roboto]", {
              " text-color border-gradient-orange tab-bordered tab-active tab-border-2":
                showInfo,
            })}
            onClick={() => setShowInfo(true)}
          >
            Info
          </a>
          <a
            className={cn("tab  w-14 text-2xl text-[roboto] ", {
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
      </main>
    </Layout>
  );
};
export default dropv;
