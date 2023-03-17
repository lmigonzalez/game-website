/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { JoinUs2 } from "@/components/JoinUs2";
import { useStateContext } from "@/context/StateContext";
import NftDetail from "@/components/NftDetail";
import Layout from "@/components/Layout";

const nftDetail = () => {
  const { globalNFT } = useStateContext();

  return (
    <>
      <Modal {...globalNFT} />
      <Layout>
        <div className="flex flex-col items-center justify-center gap-[114px]  px-4 pt-32 pb-[148px]">
          <NftDetail {...globalNFT} />
          <JoinUs2 />
        </div>
      </Layout>
    </>
  );
};

export default nftDetail;
