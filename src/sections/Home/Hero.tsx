import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="">
      <div className="m-auto  hidden w-[1400px] max-w-full items-center bg-transparent px-4 pt-24 md:flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-1/2 space-y-10"
        >
          <h2 className="text-6xl font-bold">NFT Drop</h2>
          <p className="leading-8">
            {' '}
            <b>Nft Name</b> first NFT collection will be available Friday,
            November 18 as part of an exclusive, multi-year partnership with{' '}
            <b>Company Name,</b> the worlds leading blockchain ecosystem and
            cryptocurrency infrastructure provider.
          </p>

          <button
            className="orange-gradient rounded-full py-3 px-7 text-white"
            style={{
              background:
                'linear-gradient(92.48deg, #d80027 2.08%, #fb9e3c 117.25%)',
            }}
          >
            Get more details
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-1/2"
        >
          <Image
            src="/hero-img.png"
            alt="gaming picture"
            width={500}
            height={600}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 pt-32 pb-24 md:hidden">
        <div className="flex items-center">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl font-bold"
          >
            NFT Drop
          </motion.h2>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className=""
          >
            <Image
              src="/hero-img.png"
              alt="gaming picture"
              width={199}
              height={237}
            />
          </motion.div>
        </div>

        <div className="mt-4">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="leading-8"
          >
            {' '}
            <b>Nft Name</b> first NFT collection will be available Friday,
            November 18 as part of an exclusive, multi-year partnership with{' '}
            <b>Company Name,</b> the worlds leading blockchain ecosystem and
            cryptocurrency infrastructure provider.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="orange-gradient mt-4 rounded-full py-3 px-7 text-white"
            style={{
              background:
                'linear-gradient(92.48deg, #d80027 2.08%, #fb9e3c 117.25%)',
            }}
          >
            Get more details
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
