import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import NftDetail from "@/components/NftDetail";
import { testNft } from "./api/testdb";
import Footer from "@/components/Footer";

export default function nftDetail() {
  return (
    <>
      <Modal />
      <main>
        <Navbar />
        <div className="m-20 flex items-center justify-center">
          <NftDetail {...testNft} />
        </div>
        <Footer />
      </main>
    </>
  );
}
