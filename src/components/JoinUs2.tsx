import { motion } from "framer-motion";
import Image from "next/image";

export const JoinUs2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="orange-gradient m-auto  flex h-[164px] w-[1400px] max-w-full flex-col items-center justify-center gap-2 rounded-lg py-16 text-white md:h-[289.78px]"
    >
      <Image
        className=""
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
        className=" text-2xl font-bold sm:text-5xl"
      >
        Join Our Comunity
      </motion.h3>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className="rounded-3xl bg-white px-6 py-1 text-base text-black md:px-12 md:py-3"
      >
        Join Discord
      </motion.button>
    </motion.div>
  );
};
