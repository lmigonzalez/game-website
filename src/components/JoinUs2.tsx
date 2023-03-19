import { motion } from "framer-motion";
import Image from "next/image";

export const JoinUs2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="orange-gradient m-auto flex w-full max-w-[1296px] flex-col items-center justify-center gap-4 rounded-lg  py-12 text-white"
    >
      <Image
        className="sm:h-[61px] sm:w-[75px]"
        src={"/discord-icon-svgrepo-com.svg"}
        alt={""}
        width={46}
        height={37}
      />
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className=" mb-4 text-2xl font-bold sm:text-[44px]"
      >
        Join Our Comunity
      </motion.h3>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className=" rounded-3xl bg-white px-10 py-3 text-base text-black md:px-12 md:py-3"
      >
        Join Discord
      </motion.button>
    </motion.div>
  );
};
