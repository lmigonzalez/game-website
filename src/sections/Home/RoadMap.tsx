import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RoadMap = () => {
  return (
    <section className="py-24">
      <div>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="orange-gradient mb-12  bg-clip-text text-center text-5xl font-bold text-transparent"
        >
          ROAD MAP
        </motion.h2>
        <div className="relative flex h-[1000px] flex-col items-center justify-between ">
          <Image
            src="/gradient-line.png"
            alt="line"
            width={8}
            height={1000}
            className="absolute z-10"
          />

          {/* road map item*/}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 mt-8 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-4xl font-medium">
              <span className="text-5xl font-bold">2021</span>
              <br />
              December
            </p>

            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#89F8FA]">
              <span className=" absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#89F8FA] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#89F8FA]"></span>
              <hr className="absolute top-1/2 left-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#89F8FA]" />
            </div>

            <p className="w-1/3 text-2xl font-light">Road Map 1</p>
          </motion.div>

          {/* road map item*/}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-2xl font-light">Road Map 2</p>
            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#9DD1F3]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#9DD1F3] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#9DD1F3]"></span>
              <hr className="absolute top-1/2 right-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#9DD1F3]" />
            </div>

            <p className="w-1/3 text-left text-4xl  font-medium">
              <span className="text-5xl font-bold">2022</span>
              <br />
              March
            </p>
          </motion.div>

          {/* road map item*/}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-4xl">April</p>

            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#ACB2ED]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#ACB2ED] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#ACB2ED]"></span>
              <hr className="absolute top-1/2 left-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#ACB2ED]" />
            </div>

            <p className="w-1/3 text-2xl font-light">Road Map 3</p>
          </motion.div>

          {/* road map item*/}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-2xl font-light">Road Map 4</p>
            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#B89AE9]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#B89AE9] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#B89AE9]"></span>
              <hr className="absolute top-1/2 right-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#B89AE9]" />
            </div>

            <p className="w-1/3 text-left text-4xl">MAY</p>
          </motion.div>

          {/* road map item*/}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-4xl">June</p>

            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#C87BE4]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#C87BE4] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#C87BE4]"></span>
              <hr className="absolute top-1/2 left-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#C87BE4]" />
            </div>

            <p className="w-1/3 text-2xl font-light">Road Map 5</p>
          </motion.div>

          {/* road map item*/}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-2xl font-light">Road Map 6</p>
            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#D75DDE]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#D75DDE] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#D75DDE]"></span>
              <hr className="absolute top-1/2 right-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#D75DDE]" />
            </div>

            <p className="w-1/3 text-left text-4xl">September</p>
          </motion.div>

          {/* road map item*/}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 mb-8 flex h-32 w-[600px] items-center justify-between"
          >
            <p className="w-1/3 text-right text-4xl">October</p>

            <div className="w-1/3"></div>

            <div className="absolute top-1/2 left-1/2  h-5  w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#E63FD9]">
              <span className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#E63FD9] opacity-40"></span>

              <span className="absolute top-1/2 left-1/2 h-8 w-8  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-solid border-[#E63FD9]"></span>
              <hr className="absolute top-1/2 left-5 h-[2px]  w-[70px] -translate-y-1/2 transform border-none bg-[#E63FD9]" />
            </div>

            <p className="w-1/3 text-2xl font-light">Road Map 7</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
