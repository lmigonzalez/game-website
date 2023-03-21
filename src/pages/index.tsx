import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import CountDown from '@/sections/Home/CountDown';
import Hero from '@/sections/Home/Hero';
import HowToMint from '@/sections/Home/HowToMint';
import AboutDrop from '@/sections/Home/AboutDrop';
import RoadMap from '@/sections/Home/RoadMap';
import OurTeam from '@/sections/Home/OurTeam';
import Layout from '@/components/Layout';
import { Modal } from '@/components/Modal';
import { useStateContext } from '@/context/StateContext';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function Home() {
  const { globalNFT, setGlobalNFT } = useStateContext();
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Set initial width
    setScreenWidth(window.innerWidth);

    // console.log(screenWidth);
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal {...globalNFT} />
      <Layout>
        <div className={`${poppins.className}  text-black`}>
          <Hero screenWidth={screenWidth} />
          <CountDown
            screenWidth={screenWidth}
            duration={120122545}
            {...globalNFT}
          />
          <HowToMint screenWidth={screenWidth} />
          <AboutDrop screenWidth={screenWidth} />
          <RoadMap screenWidth={screenWidth} />
          <OurTeam screenWidth={screenWidth} />
        </div>
      </Layout>
    </>
  );
}
