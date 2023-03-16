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

export default function asd() {
  return (
    <>
      <main>
        <div className="card w-96 bg-base-100">
          <figure>
            <Image
              src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
              alt="Shoes"
              width={337}
              height={420}
            />
          </figure>
          <div className="card-body">
            <strong>60 packs</strong>
            <strong className="card-title">NFT Name</strong>
            <p className="text-[#A0A0A0]">Contains 1 collectible</p>
            <p>
              $<strong>200</strong>
            </p>
            <p className=" text-[#1199FA]">61 Packs Left</p>
          </div>
        </div>
      </main>
    </>
  );
}
