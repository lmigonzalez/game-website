import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  screenWidth: number;
};

const AboutDrop: React.FC<Props> = ({ screenWidth }) => {
  return screenWidth > 768 ? (
    <section className="bg-transparent py-24">
      <div className="m-auto mb-36 w-[1400px] max-w-full px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="orange-gradient mb-12 bg-clip-text text-center   text-5xl font-bold text-transparent "
        >
          About Drop
        </motion.h2>
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="mb-5 text-3xl font-bold"
        >
          Own a Piece of the Legend
        </motion.h3>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="mb-10 leading-8"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </motion.p>

        <div className="flex flex-col items-center justify-between space-y-4 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.8 }}
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-5xl font-bold text-transparent">
              250 <br /> NFT<span className="ml-0 text-2xl">s</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.8 }}
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-6xl font-bold text-transparent">
              49 €
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.8 }}
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-center text-4xl font-bold text-transparent">
              1 <br /> oportunidad
            </p>
          </motion.div>
        </div>
      </div>

      <div className="m-auto w-[1400px] max-w-full px-4 uppercase text-white">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="orange-gradient mb-12  bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        >
          Perks of Owning NFT
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              DISCORD
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              Special Discord group for <br /> nft holder
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              ENS
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              Ens domain for each <br /> holder
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              ROYALITY
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              5% ROYALTY ON EACH <br /> NFT
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  ) : (
    <section className="bg-transparent py-24">
      <div className="m-auto mb-36 w-[1400px] max-w-full px-4">
        <h2
          className="orange-gradient mb-12 bg-clip-text text-center   text-5xl font-bold text-transparent "
        >
          About Drop
        </h2>
        <h3
          className="mb-5 text-3xl font-bold"
        >
          Own a Piece of the Legend
        </h3>
        <p
          className="mb-10 leading-8"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <div className="flex flex-col items-center justify-between space-y-4 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-5xl font-bold text-transparent">
              250 <br /> NFT<span className="ml-0 text-2xl">s</span>
            </p>
          </div>

          <div
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-6xl font-bold text-transparent">
              49 €
            </p>
          </div>
          <div
            className="flex h-[214px] w-full items-center justify-center rounded-lg bg-[#373737] lg:w-[326px]"
          >
            <p className="orange-gradient bg-clip-text text-center text-4xl font-bold text-transparent">
              1 <br /> oportunidad
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto w-[1400px] max-w-full px-4 uppercase text-white">
        <h2
          className="orange-gradient mb-12  bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        >
          Perks of Owning NFT
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              DISCORD
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              Special Discord group for <br /> nft holder
            </p>
          </div>

          <div
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              ENS
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              Ens domain for each <br /> holder
            </p>
          </div>

          <div
            className="orange-gradient h-[214px] w-[326px] rounded-lg"
          >
            <p className="flex h-[73px] items-center justify-center rounded-lg bg-white text-5xl font-bold text-black">
              ROYALITY
            </p>
            <p className="text-center text-xl font-bold leading-[71px]">
              5% ROYALTY ON EACH <br /> NFT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDrop;
