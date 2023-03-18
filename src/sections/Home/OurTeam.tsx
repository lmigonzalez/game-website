import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { JoinUs } from "@/components/JoinUs";
const OurTeam = () => {
  return (
    <section className="py-24 px-1">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.2 }}
        className="orange-gradient mb-12  bg-clip-text text-center text-5xl font-bold text-transparent"
      >
        Our Team
      </motion.h2>

      <div className="grid grid-cols-2 content-center gap-2 px-2 md:grid-cols-4 md:gap-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className=" flex w-auto flex-col items-center justify-center"
        >
          <div className="w-max rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group.svg"}
              alt=""
              width={149.53}
              height={145.19}
              className="sm:h-[195px] sm:w-[195px]"
            />
          </div>
          <p className="mt-5 mb-2 text-xs font-bold sm:text-base">
            Martín Agudo
          </p>
          <p className="text-xs font-medium md:text-base">Designation</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="flex w-auto flex-col items-center justify-center"
        >
          <div className=" w-max  rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group (1).svg"}
              alt=""
              width={149.53}
              height={145.19}
              className="sm:h-[195px] sm:w-[195px]"
            />
          </div>
          <p className="mt-5 mb-2 text-xs font-bold sm:text-base">
            Mario Fueyo
          </p>
          <p className="text-xs font-medium md:text-base">Designation</p>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="flex w-auto flex-col items-center justify-center"
        >
          <div className="  w-max rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group (2).svg"}
              alt=""
              width={149.53}
              height={145.19}
              className="sm:h-[195px] sm:w-[195px]"
            />
          </div>
          <p className="mt-5 mb-2 text-xs font-bold sm:text-base">
            Gonzalo Ladreda
          </p>
          <p className="text-xs font-medium md:text-base">Designation</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="flex w-auto flex-col items-center justify-center"
        >
          <div className="w-max  rounded-full bg-[#86FFFB]">
            <Image
              src={"/Mask group.svg"}
              alt=""
              width={149.53}
              height={145.19}
              className="sm:h-[195px] sm:w-[195px]"
            />
          </div>
          <p className="mt-5 mb-2  text-xs font-bold sm:text-base">
            Ana Montalbán
          </p>
          <p className="text-xs font-medium md:text-base">Designation</p>
        </motion.div>
      </div>
      <JoinUs />
    </section>
  );
};

export default OurTeam;
