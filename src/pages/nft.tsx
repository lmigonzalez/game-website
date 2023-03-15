import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import NftDetail from "@/components/NftDetail";
import { nft, testNft } from "./api/testdb";
import Footer from "@/components/Footer";
import { useState } from "react";
import { JoinUs } from "@/components/JoinUs";

export default function nftDetail() {
  const [nft, setNft] = useState<nft>(testNft[0]);

  return (
    <>
      <Modal {...nft} />
      <Navbar />
      <main className="m-20">
        <div className=" flex items-center justify-center">
          <NftDetail {...nft} />
        </div>
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
