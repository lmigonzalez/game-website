import Head from "next/head";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountDown from "@/sections/Home/CountDown";
import Hero from "@/sections/Home/Hero";
import HowToMint from "@/sections/Home/HowToMint";
import AboutDrop from "@/sections/Home/AboutDrop";
import RoadMap from "@/sections/Home/RoadMap";
import OurTeam from "@/sections/Home/OurTeam";
import { useState } from "react";
import { testNft, nft } from "./api/testdb";
import { Modal } from "@/components/Modal";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [nft, setNft] = useState<nft>(testNft[0]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal {...nft} />
      <main className={`${poppins.className} bg-white text-black`}>
        <Navbar />
        <Hero />
        <CountDown duration={122545} {...nft} />
        <HowToMint />
        <AboutDrop />
        <RoadMap />
        <OurTeam />
        <Footer />
      </main>
    </>
  );
}
