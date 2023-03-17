/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { JoinUs } from "@/components/JoinUs";
import { useStateContext } from "@/context/StateContext";
import NftDetail from "@/components/NftDetail";
import Layout from "@/components/Layout";

const nftDetail = () => {
  const { globalNFT } = useStateContext();

  return (
    <>
      <Modal {...globalNFT} />
      <Layout>
        <div className="px-4 pt-32 pb-6 ">
          <NftDetail {...globalNFT} />
          <JoinUs />
        </div>
      </Layout>
    </>
  );
};

export default nftDetail;
