import Navbar from "@/components/Navbar";
import { testNft } from "./api/testdb";
import Footer from "@/components/Footer";
import NftCard from "@/components/NftCard";
import classNames from "classnames";
import { useState } from "react";
import Info from "@/components/info";

const cn = classNames;

export default function dropv() {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        <div className="tabs flex justify-center gap-4 ">
          <a
            className={cn("tab-bordered tab", { "tab-active": showInfo })}
            onClick={() => setShowInfo(true)}
          >
            Info
          </a>
          <a
            className={cn("tab-bordered tab", { "tab-active": !showInfo })}
            onClick={() => setShowInfo(false)}
          >
            Shop
          </a>
        </div>

        <div
          className={cn(
            "m-10 grid grid-flow-col grid-rows-2 gap-10 whitespace-nowrap",
            { hidden: showInfo }
          )}
        >
          {testNft.map((item, i) => (
            <NftCard {...item} key={i} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Info />
        </div>
      </main>
      <Footer />
    </>
  );
}
