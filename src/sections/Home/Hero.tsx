import React from 'react';
import Image from 'next/image';
import { motion} from 'framer-motion';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="m-auto flex w-[1400px] max-w-full items-center bg-transparent px-4 pt-24">
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
          <b>Company Name,</b> the world's leading blockchain ecosystem and
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
        animate={{  opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut'}}
        className="-1/2"
      >
        <Image
          src="/hero-img.png"
          alt="gaming picture"
          width={500}
          height={600}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
