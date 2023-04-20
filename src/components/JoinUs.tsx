import { motion } from 'framer-motion';

type Props = {
  screenWidth: number;
};

export const JoinUs: React.FC<Props> = ({ screenWidth }) => {
  return screenWidth > 768 ? (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="orange-gradient m-auto mt-48 flex w-[1200px] max-w-full flex-col items-center justify-center rounded-lg py-8 text-white"
    >
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className=" mb-8 text-xl font-bold md:text-6xl"
      >
        Join Our Discord Group
      </motion.h3>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg bg-black py-3 px-5"
      >
        Join Now
      </motion.button>
    </motion.div>
  ) : (
    <div
      className="orange-gradient m-auto mt-48 flex w-[1200px] max-w-full flex-col items-center justify-center rounded-lg py-8 text-white"
    >
      <h3
        className=" mb-8 text-xl font-bold md:text-6xl"
      >
        Join Our Discord Group
      </h3>
      <button
        className="rounded-lg bg-black py-3 px-5"
      >
        Join Now
      </button>
    </div>
  );
};
