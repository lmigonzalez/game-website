import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { testNft } from "./api/testdb";
import Footer from "@/components/Footer";
import NftCard from "@/components/NftCard";

export default function dropv() {
  return (
    <>
      <main>
        <Navbar />
        <div className=" my-10 ml-10 grid grid-flow-col-dense grid-rows-2 gap-10">
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

        <Footer />
      </main>
    </>
  );
}
