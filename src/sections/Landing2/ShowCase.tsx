import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const ShowCase = () => {
  return (
    <>
      <section className="hidden items-center justify-start bg-[url('/1000001538.svg')] bg-cover bg-center bg-no-repeat md:flex md:py-28">
        <div className="m-auto w-[1400px] max-w-full  px-4 text-center text-white">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="hidden flex-col p-[50px] sm:px-[100px] md:flex md:px-[150px] lg:px-[200px] xl:px-[306px]"
          >
            <strong className=" text-3xl font-bold leading-[56px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </strong>
            <p className="hidden md:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
          <div className=" grid grid-cols-3  gap-x-4 gap-y-8 md:mt-24  md:grid-cols-4">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <Image src="/Group 48.svg" alt="" width={65} height={65} />
              <p className="font-medium">Mobile Game App</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <Image src="/Group 49.svg" alt="" width={65} height={65} />
              <p className="font-medium">PC Game</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <Image src="/Group 50.svg" alt="" width={65} height={65} />
              <p className="font-medium">PS4 Game</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <Image src="/Group 51.svg" alt="" width={65} height={65} />
              <p className="font-medium">AR/VR Solutions</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <div className="hidden md:col-span-1 md:block"></div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6 md:col-span-1"
            >
              <Image src="/Group 52.svg" alt="" width={65} height={65} />
              <p className="font-medium">Online Chat Option</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6 md:col-span-1 "
            >
              <Image src="/Group 53.svg" alt="" width={65} height={65} />
              <p className="font-medium">3D Modelings</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>

            <div className="hidden md:col-span-1 md:block"></div>
          </div>
        </div>
      </section>

      {/* Small Screen */}

      <section className="flex items-center justify-start bg-[url('/1000001538.svg')] bg-cover bg-center bg-no-repeat md:hidden md:py-28">
        <div className="m-auto w-[1400px] max-w-full  p-4 text-center text-white">
          <div className="hidden flex-col p-[50px] sm:px-[100px] md:flex md:px-[150px] lg:px-[200px] xl:px-[306px]">
            <strong className=" text-3xl font-bold leading-[56px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </strong>
            <p className="hidden md:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className=" grid grid-cols-3  gap-x-4 gap-y-8 md:mt-24  md:grid-cols-4">
            <div className="flex flex-col items-center space-y-6">
              <Image src="/Group 48.svg" alt="" width={65} height={65} />
              <p className="font-medium">Mobile Game App</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Image src="/Group 49.svg" alt="" width={65} height={65} />
              <p className="font-medium">PC Game</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Image src="/Group 50.svg" alt="" width={65} height={65} />
              <p className="font-medium">PS4 Game</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Image src="/Group 51.svg" alt="" width={65} height={65} />
              <p className="font-medium">AR/VR Solutions</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="hidden md:col-span-1 md:block"></div>

            <div className="flex flex-col items-center space-y-6 md:col-span-1">
              <Image src="/Group 52.svg" alt="" width={65} height={65} />
              <p className="font-medium">Online Chat Option</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center space-y-6 md:col-span-1 ">
              <Image src="/Group 53.svg" alt="" width={65} height={65} />
              <p className="font-medium">3D Modelings</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-8 text-[#D80027]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>

            <div className="hidden md:col-span-1 md:block"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
