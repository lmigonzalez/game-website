import { motion } from "framer-motion";
import Image from "next/image";

export const JoinUs2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="orange-gradient m-auto  flex h-[289.78px] w-[1400px] max-w-full flex-col items-center justify-center rounded-lg py-16 text-white"
    >
      <Image
        className="mb-4"
        src={"/discord-icon-svgrepo-com.svg"}
        alt={""}
        width={75}
        height={75}
      />
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className=" mb-8 text-5xl font-bold"
      >
        Join Our Comunity
      </motion.h3>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className="rounded-3xl bg-white px-12 py-3 text-base text-black"
      >
        Join Discord
      </motion.button>
    </motion.div>
  );
};
