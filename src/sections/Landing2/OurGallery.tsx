import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const OurGallery = () => {
  return (
    <>
      <section className=" m-auto hidden w-[1400px] max-w-full py-24 text-center md:block">
        <div className="px-4">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-3xl font-bold"
          >
            Our Gallery
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="mt-16 flex flex-auto flex-wrap justify-center gap-7"
          >
            <Image
              src="Rectangle 15.svg"
              alt=""
              width={183.51}
              height={107.13}
              className="md:h-[223px] md:w-[382px]"
            />
            <Image
              src="Rectangle 16.svg"
              alt=""
              width={183.51}
              height={107.13}
              className="md:h-[223px] md:w-[382px]"
            />
            <Image
              src="Rectangle 17.svg"
              alt=""
              width={169.1}
              height={107.13}
              className="md:h-[223px] md:w-[352px]"
            />
            <Image
              src="Rectangle 19.svg"
              alt=""
              width={134.99}
              height={107.13}
              className="order-last md:h-[223px] md:w-[246px] xl:order-none"
            />
            <Image
              src="Rectangle 18.svg"
              alt=""
              width={192.64}
              height={107.13}
              className="md:h-[223px] md:w-[401px]"
            />
            <Image
              src="Rectangle 20 (11).svg"
              alt=""
              width={225.31}
              height={107.13}
              className="md:h-[223px] md:w-[469px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="mb-24 flex w-full justify-center"
          >
            <button className="">
              <p className="orange-gradient mt-24 flex h-14 w-36 items-center justify-center rounded-lg text-white">
                SEE ALL
              </p>
            </button>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="mb-16 hidden w-1/2 space-y-6 text-start md:block"
          >
            <strong className="text-3xl font-semibold">Lorem Ipsum</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-between bg-black py-10 px-4 text-white md:mx-4 md:flex-row md:rounded-xl"
        >
          <div className="mb-8 text-start md:mb-0 md:w-1/2">
            <strong className="text-3xl font-medium">Stay in the loop</strong>
            <p className="mt-3">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </p>
          </div>

          <form className="flex h-12 w-full items-center justify-between space-x-1 rounded-lg bg-white px-2 md:w-[385px]">
            <input
              className="input-ghost input h-full flex-grow bg-transparent text-black focus:outline-0"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className=" h-full">
              <p className="orange-gradient flex h-9 w-24 items-center justify-center rounded-lg text-white">
                Continue
              </p>
            </button>
          </form>
        </motion.div>
      </section>

      {/* Small Screen */}

      <section className="m-auto block  w-[1400px] max-w-full py-24 text-center md:hidden">
        <div className="px-4">
          <h2 className="mb-4 text-3xl font-bold">Our Gallery</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className="mt-16  flex flex-auto flex-wrap justify-center gap-7">
            <Image
              src="Rectangle 15.svg"
              alt=""
              width={183.51}
              height={107.13}
              className="md:h-[223px] md:w-[382px]"
            />
            <Image
              src="Rectangle 16.svg"
              alt=""
              width={183.51}
              height={107.13}
              className="md:h-[223px] md:w-[382px]"
            />
            <Image
              src="Rectangle 17.svg"
              alt=""
              width={169.1}
              height={107.13}
              className="md:h-[223px] md:w-[352px]"
            />
            <Image
              src="Rectangle 19.svg"
              alt=""
              width={134.99}
              height={107.13}
              className="order-last md:h-[223px] md:w-[246px] xl:order-none"
            />
            <Image
              src="Rectangle 18.svg"
              alt=""
              width={192.64}
              height={107.13}
              className="md:h-[223px] md:w-[401px]"
            />
            <Image
              src="Rectangle 20 (11).svg"
              alt=""
              width={225.31}
              height={107.13}
              className="md:h-[223px] md:w-[469px]"
            />
          </div>
          <div className="mb-24 flex w-full justify-center">
            <button className="">
              <p className="orange-gradient mt-24 flex h-14 w-36 items-center justify-center rounded-lg text-white">
                SEE ALL
              </p>
            </button>
          </div>

          <div className="mb-16 hidden w-1/2 space-y-6 text-start md:block">
            <strong className="text-3xl font-semibold">Lorem Ipsum</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-black py-10 px-4 text-white md:mx-4 md:flex-row md:rounded-xl">
          <div className="mb-8 text-start md:mb-0 md:w-1/2">
            <strong className="text-3xl font-medium">Stay in the loop</strong>
            <p className="mt-3">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </p>
          </div>

          <form className="flex h-12 w-full items-center justify-between space-x-1 rounded-lg bg-white px-2 md:w-[385px]">
            <input
              className="input-ghost input h-full flex-grow bg-transparent text-black focus:outline-0"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className=" h-full">
              <p className="orange-gradient flex h-9 w-24 items-center justify-center rounded-lg text-white">
                Continue
              </p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default OurGallery;
