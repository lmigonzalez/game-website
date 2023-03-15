import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { testNft } from "./api/testdb";
import Footer from "@/components/Footer";
import NftCard from "@/components/NftCard";

export default function dropv() {
  return (
    <>
      <Navbar />
      <main>
        <div className=" m-10 grid grid-flow-col grid-rows-2 gap-10 whitespace-nowrap ">
          {testNft.map((item, i) => (
            <NftCard {...item} key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
