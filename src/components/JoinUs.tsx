import { motion } from 'framer-motion';

export function JoinUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="orange-gradient m-auto mt-48 flex w-[1400px] max-w-full flex-col items-center justify-center rounded-lg py-16 text-white"
    >
      <motion.h3
        initial={{y: -50, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className=" mb-8 text-6xl font-bold"
      >
        Join Our Discord Group
      </motion.h3>
      <motion.button
        initial={{y: 50, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg bg-black py-3 px-5"
      >
        Join Now
      </motion.button>
    </motion.div>
  );
}
