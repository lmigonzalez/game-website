import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const AboutGame = () => {
  return (
    <>
      <section className="hidden md:block m-auto w-[1200px] max-w-full  px-4 py-12 md:py-24">
        <div className=" mb-14 flex items-center justify-between">
          <motion.strong
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="text-3xl"
          >
            About Game
          </motion.strong>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="h-14 w-36 rounded bg-zinc-300 text-xl font-medium"
          >
            SEE ALL
          </motion.button>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="mb-14 grid grid-cols-2  gap-4 md:grid-cols-4"
        >
          <Image src="Rectangle 23.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 24.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 25.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 26.svg" alt="" width={250} height={275} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="mb-24 flex w-full justify-center"
        >
          <button className="">
            <p className="orange-gradient flex h-14 w-60 items-center justify-center rounded-full text-white">
              Buy Coin and play Now
            </p>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="mb-28 text-center text-3xl font-semibold leading-[65px] "
        >
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </motion.p>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="mb-12 w-full md:w-1/2"
        >
          <strong className="text-3xl ">Lorem Ipsum</strong>
          <p className="mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="relative mb-48"
        >
          <Image
            src="/dot-square.png"
            alt=""
            width={180}
            height={140}
            className="absolute  top-[-60px] right-40 hidden md:block"
          />
          <Image src="/Rectangle 4.svg" alt="" width={1400} height={500} />
        </motion.div>

        <div className="hidden items-center justify-between md:flex">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="flex h-[350px] w-[310px] flex-col items-center rounded-2xl bg-[#F5F5F5] px-4"
          >
            <div className="mb-7 w-full border-b-[2px] border-[#D4D4D4] py-7 text-center">
              <strong className="text-3xl font-semibold">Personal</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#5A5A5A]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-[#363535]">
                  {' '}
                  12,99{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>Create personal dashboard.</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  Organize your notes and{' '}
                  <strong className="font-normal text-[#2c2a2a]">
                    workflows
                  </strong>
                  .
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  <strong className="font-normal text-[#2c2a2a]">5GB</strong> of
                  space.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="flex h-[410px] w-[310px] flex-col items-center rounded-2xl bg-[#1E1E1E] px-4 text-white"
          >
            <div className="mb-7 w-full border-b-[2px] border-[#FFFFFF] py-7 text-center">
              <div className="orange-gradient m-auto mb-4 flex h-8 w-14 items-center justify-center rounded-xl">
                -30%
              </div>
              <strong className="text-3xl font-semibold">Pro Plan</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#FFFFFF]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-white">
                  {' '}
                  24,90{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>
                  All features in <span className="text-white">Personal</span>.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  {' '}
                  <span className="text-white">Unlock</span> Teams to create a
                  work group.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  {' '}
                  <span className="text-white">20GB</span> of shared space.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </motion.div>

          {/* third card */}

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2 }}
            className="flex h-[350px] w-[310px] flex-col items-center rounded-2xl bg-[#F5F5F5] px-4"
          >
            <div className="mb-7 w-full border-b-[2px] border-[#D4D4D4] py-7 text-center">
              <strong className="text-3xl font-semibold">Enterprise</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#5A5A5A]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-[#363535]">
                  {' '}
                  54,90{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>
                  All features in{' '}
                  <span className="text-[#4D4D4D]">Pro Plan</span>.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  Unlock <span className="text-[#4D4D4D]">Database</span> to
                  manage your data.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  <span className="text-[#4D4D4D]">500GB</span> / 5 shared
                  spaces.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </motion.div>
        </div>
      </section>
      {/* Small Screen */}{' '}
      <section className="block md:hidden  m-auto w-[1200px] max-w-full  px-4 py-12 md:py-24">
        <div className=" mb-14 flex items-center justify-between">
          <strong className="text-3xl">About Game</strong>
          <button className="h-14 w-36 rounded bg-zinc-300 text-xl font-medium">
            SEE ALL
          </button>
        </div>
        <div className="mb-14 grid grid-cols-2  gap-4 md:grid-cols-4">
          <Image src="Rectangle 23.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 24.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 25.svg" alt="" width={250} height={275} />
          <Image src="Rectangle 26.svg" alt="" width={250} height={275} />
        </div>

        <div className="mb-24 flex w-full justify-center">
          <button className="">
            <p className="orange-gradient flex h-14 w-60 items-center justify-center rounded-full text-white">
              Buy Coin and play Now
            </p>
          </button>
        </div>

        <p className="mb-28 text-center text-3xl font-semibold leading-[65px] ">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </p>

        <div className="mb-12 w-full md:w-1/2">
          <strong className="text-3xl ">Lorem Ipsum</strong>
          <p className="mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </div>

        <div className="relative mb-48">
          <Image
            src="/dot-square.png"
            alt=""
            width={180}
            height={140}
            className="absolute  top-[-60px] right-40 hidden md:block"
          />
          <Image src="/Rectangle 4.svg" alt="" width={1400} height={500} />
        </div>

        <div className="hidden items-center justify-between md:flex">
          <div className="flex h-[350px] w-[310px] flex-col items-center rounded-2xl bg-[#F5F5F5] px-4">
            <div className="mb-7 w-full border-b-[2px] border-[#D4D4D4] py-7 text-center">
              <strong className="text-3xl font-semibold">Personal</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#5A5A5A]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-[#363535]">
                  {' '}
                  12,99{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>Create personal dashboard.</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  Organize your notes and{' '}
                  <strong className="font-normal text-[#2c2a2a]">
                    workflows
                  </strong>
                  .
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  <strong className="font-normal text-[#2c2a2a]">5GB</strong> of
                  space.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </div>
          {/* second card */}
          <div className="flex h-[410px] w-[310px] flex-col items-center rounded-2xl bg-[#1E1E1E] px-4 text-white">
            <div className="mb-7 w-full border-b-[2px] border-[#FFFFFF] py-7 text-center">
              <div className="orange-gradient m-auto mb-4 flex h-8 w-14 items-center justify-center rounded-xl">
                -30%
              </div>
              <strong className="text-3xl font-semibold">Pro Plan</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#FFFFFF]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-white">
                  {' '}
                  24,90{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>
                  All features in <span className="text-white">Personal</span>.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  {' '}
                  <span className="text-white">Unlock</span> Teams to create a
                  work group.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#FFFFFF] p-1 text-[#3F3F3F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  {' '}
                  <span className="text-white">20GB</span> of shared space.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </div>

          {/* third card */}

          <div className="flex h-[350px] w-[310px] flex-col items-center rounded-2xl bg-[#F5F5F5] px-4">
            <div className="mb-7 w-full border-b-[2px] border-[#D4D4D4] py-7 text-center">
              <strong className="text-3xl font-semibold">Enterprise</strong>
              <p className="mt-5 flex items-center justify-center text-[10px] text-[#5A5A5A]">
                €{' '}
                <strong className="mx-[2px] text-lg font-medium text-[#363535]">
                  {' '}
                  54,90{' '}
                </strong>{' '}
                / user
              </p>
            </div>
            <div className="mb-7 space-y-3 text-[13px] text-[#AEAEAE]">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p>
                  All features in{' '}
                  <span className="text-[#4D4D4D]">Pro Plan</span>.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  Unlock <span className="text-[#4D4D4D]">Database</span> to
                  manage your data.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 rounded-full bg-[#5A5A5A] p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <p className="">
                  <span className="text-[#4D4D4D]">500GB</span> / 5 shared
                  spaces.
                </p>
              </div>
            </div>

            <button className="">
              <p className="orange-gradient flex h-10 items-center justify-center rounded-full px-4 text-sm text-white">
                Choose this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGame;
