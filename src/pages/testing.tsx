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
        <div className="my-20 flex h-[1920] items-center justify-center border-solid bg-slate-300">
          <NftDetail {...testNft} />
        </div>
        {/* <div className="my-20 flex h-[1920] items-center justify-center border-solid bg-slate-300">
          <NftCard {...testNft} />
        </div> */}
        <Footer />
      </main>
    </>
  );
}
