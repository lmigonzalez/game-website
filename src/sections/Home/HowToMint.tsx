import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
});

const HowToMint = () => {
  return (
    <section className={`${poppins.className} bg-transparent pt-20`}>
      <div className="m-auto w-[1400px] max-w-full space-y-8 px-4">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-[#DB0F29]"
        >
          Easy Steps
        </motion.p>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className={`text-6xl font-bold`}
        >
          HOW TO MINT
        </motion.h2>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="flex flex-nowrap items-start"
          >
            <p className="text-with-border mr-8 text-6xl font-bold">1</p>
            <p className="font-bold">
              Connect your <br /> wallet
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.6 }}
            className="flex flex-nowrap items-start"
          >
            <p className="text-with-border mr-8 text-6xl font-bold">2</p>
            <p className="font-bold">
              Select your <br /> quantity
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.7 }}
            className="flex flex-nowrap items-start"
          >
            <p className="text-with-border mr-8 text-6xl font-bold">3</p>
            <p className="font-bold">
              Confirm the <br /> transaction
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.8 }}
            className="flex flex-nowrap items-start"
          >
            <p className="text-with-border mr-8 text-6xl font-bold">4</p>
            <p className="font-bold">
              Receive you <br /> NFTs
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="hide-scroll-bar relative mt-24 h-[320px] w-full overflow-y-hidden overflow-x-scroll"
      >
        <div className="absolute flex h-[320px]">
          <Image src="/8Qz2gKJ2.svg" alt="" width={338} height={320} />
          <Image
            src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
            alt=""
            width={338}
            height={320}
          />
          <Image src="/vaRnk3D.svg" alt="" width={338} height={320} />
          <Image src="/D4Q9FxU 2.svg" alt="" width={338} height={320} />
        </div>
      </motion.div>
    </section>
  );
};

export default HowToMint;
