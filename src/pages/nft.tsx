/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { JoinUs } from "@/components/JoinUs";
import { useStateContext } from "@/context/StateContext";
import NftDetail from "@/components/NftDetail";

const nftDetail = () => {
  const { globalNFT } = useStateContext();

  return (
    <>
      <Modal {...globalNFT} />
      <Navbar />
      <main className="m-20">
        <div className=" flex items-center justify-center">
          <NftDetail {...globalNFT} />
        </div>
        <JoinUs />
      </main>
      <Footer />
    </>
  );
};

export default nftDetail;
