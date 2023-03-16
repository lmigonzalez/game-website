/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Modal } from "@/components/Modal";
import { NftCard } from "@/components/NftCard";
import { NftDetail } from "@/components/NftDetail";
import { testNft } from "../pages/api/testdb";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { JoinUs } from "@/components/JoinUs";
import { timeUnits } from "@/utils/unitTime";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function asd() {
  const [timeLeft, setTimeLeft] = useState(1234234);
  const nft = testNft[0];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Layout>
      <main className="m-20 flex w-1/4 justify-center bg-slate-300 p-4">
        <div className="card rounded-none">
          <figure>
            <Image
              src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
              alt="nft"
              width={337}
              height={420}
            />
          </figure>
          <div className="card-body">
            <strong className="text-sm">{nft.packsCount} Packs</strong>
            <strong className="card-title">{nft.name}</strong>
            <p className="text-[15px] text-[#A0A0A0]">
              {" "}
              Contains {nft.collectiblesCount}
              {nft.collectiblesCount == 1 ? " collectible" : " collectibles"}
            </p>
            {nft.packsLeft !== 0 ? (
              <p>
                $<strong className="text-[19px]">{nft.price}</strong> <br />
                <strong className="text-[#1199FA]">
                  {nft.packsLeft} Packs Left
                </strong>
              </p>
            ) : (
              <strong className="mt-4 text-xl font-semibold text-[#A0A0A0]">
                Sold Out
              </strong>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
