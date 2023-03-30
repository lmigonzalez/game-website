/* eslint-disable react-hooks/rules-of-hooks */
import { Modal } from "@/components/Modal";
import Head from "next/head";
import { JoinUs2 } from "@/components/JoinUs2";
import { useStateContext } from "@/context/StateContext";
import NftDetail from "@/components/NftDetail";
import Layout from "@/components/Layout";

const nftDetail = () => {
  const { globalNFT } = useStateContext();

  return (
    <>
      <Head>
        <title>NFT Details</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Modal {...globalNFT} />
      <Layout navBarBehavior={0}>
        <main className="flex flex-col items-center justify-center gap-[114px]  px-4 pt-32 pb-[148px]">
          <NftDetail {...globalNFT} />
          <JoinUs2 />
        </main>
      </Layout>
    </>
  );
};

export default nftDetail;
