import Modal from "@/components/Modal";
import { NftCard } from "@/components/NftCard";
import { NftDetail } from "@/components/NftDetail";
import { testNft } from "../pages/api/testdb";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function asd() {
  return (
    <>
      <Modal />
      <main>
        <Navbar />
        <div className="my-20 border-solid bg-slate-300">
          <div className=" grid grid-flow-col-dense grid-rows-2   gap-2">
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
            <div>
              <NftCard {...testNft} />
            </div>
          </div>
        </div>
        {/* <div className="my-20 flex h-[1920] items-center justify-center border-solid bg-slate-300">
          <NftCard {...testNft} />
        </div> */}
        <Footer />
      </main>
    </>
  );
}
