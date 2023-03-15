import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import NftDetail from "@/components/NftDetail";
import { nft, testNft } from "./api/testdb";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function nftDetail() {
  const [nft, setNft] = useState<nft>(testNft[0]);

  return (
    <>
      <Modal {...nft} />
      <Navbar />
      <main>
        <div className="m-20 flex items-center justify-center">
          <NftDetail {...nft} />
        </div>
      </main>
      <Footer />
    </>
  );
}
