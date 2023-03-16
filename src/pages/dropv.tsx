/* eslint-disable react-hooks/rules-of-hooks */
import { testNft } from "./api/testdb";
import NftCard from "@/components/NftCard";
import classNames from "classnames";
import { useState } from "react";
import Info from "@/components/info";
import Layout from "@/components/Layout";
const cn = classNames;

export default function dropv() {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  let cols = testNft.length / 4;
  return (
    <Layout>
      <main className=" p-4">
        <div className="tabs flex justify-center gap-4 ">
          <a
            className={cn("tab tab-bordered w-12 text-2xl text-[roboto]", {
              " text-color border-gradient-orange  tab-active": showInfo,
            })}
            onClick={() => setShowInfo(true)}
          >
            Info
          </a>
          <a
            className={cn("tab tab-bordered w-14 text-2xl text-[roboto]", {
              "text-color border-gradient-orange tab-active": !showInfo,
            })}
            onClick={() => setShowInfo(false)}
          >
            Shop
          </a>
        </div>

        <div
          className={cn(
            "grid  grid-flow-row grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 ",
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
}
