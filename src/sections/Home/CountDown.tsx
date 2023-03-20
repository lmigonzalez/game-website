import React, { useState, useEffect } from 'react';
import { Audiowide, Poppins, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { Inft } from '@/pages/api/testdb';
import { timeUnits } from '@/utils/unitTime';
import { motion } from 'framer-motion';
const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
});

const jetBrains = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

interface CountdownProps {
  duration: number;
  screenWidth: number;
}

const CountDown: React.FC<CountdownProps & Inft> = ({
  duration,
  screenWidth,
  ...nft
}) => {
  const [initialValue, setInitialValue] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialValue((value) => value - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [initialValue]);

  return screenWidth > 768 ? (
    <section className={`${audiowide.className}`}>
      <div className="relative py-14 px-10">
        <video
          className="absolute top-0 left-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/countdown-video.mp4" type="video/mp4" />
        </video>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className={`flex w-full items-center justify-center px-4 text-center md:space-x-10 lg:space-x-24`}
        >
          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient  font-bold  md:text-6xl lg:text-8xl`}
                  style={{
                    ['--value' as string]:
                      initialValue > 86400000
                        ? timeUnits(initialValue)?.days
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              DAYS
            </p>
          </div>

          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient font-bold md:text-6xl lg:text-8xl`}
                  style={{
                    ['--value' as string]:
                      initialValue > 3600000
                        ? timeUnits(initialValue)?.hours
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              HOURS
            </p>
          </div>

          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient  font-bold  md:text-6xl lg:text-8xl`}
                  style={{
                    ['--value' as string]:
                      initialValue > 60000
                        ? timeUnits(initialValue)?.minutes
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              MINUTES
            </p>
          </div>
          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient font-bold md:text-6xl lg:text-8xl`}
                  style={{
                    ['--value' as string]:
                      initialValue > 1000
                        ? timeUnits(initialValue)?.seconds
                        : 0,
                  }}
                ></span>
              </span>
            </div>

            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              SECONDS
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className={`${poppins.className} relative mt-20 flex items-center justify-center space-x-5`}
        >
          {' '}
          <Link href="/dropv" className="">
            <button
              className="w-full rounded-full border-2
          border-[#DB0F29] 
          py-4 text-center md:w-48"
            >
              {' '}
              <p className="text-color">View Drop</p>{' '}
            </button>
          </Link>
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-1/2 border-none text-base normal-case text-white md:w-48"
          >
            Mint Now
          </label>
        </motion.div>
      </div>
    </section>
  ) : (
    <section className={`${audiowide.className}`}>
      <div className="relative py-14 px-10">
        <video
          className="absolute top-0 left-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/countdown-video.mp4" type="video/mp4" />
        </video>
        <div
          className={`flex w-full items-center justify-center space-x-1 text-center`}
        >
          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient text-5xl font-bold `}
                  style={{
                    ['--value' as string]:
                      initialValue > 86400000
                        ? timeUnits(initialValue)?.days
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              DAYS
            </p>
          </div>

          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient text-5xl font-bold `}
                  style={{
                    ['--value' as string]:
                      initialValue > 3600000
                        ? timeUnits(initialValue)?.hours
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              HOURS
            </p>
          </div>

          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient text-5xl font-bold `}
                  style={{
                    ['--value' as string]:
                      initialValue > 60000
                        ? timeUnits(initialValue)?.minutes
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              MINUTES
            </p>
          </div>
          <div className="">
            <div className="">
              <span className="countdown font-mono">
                <span
                  className={`${audiowide.className} text-gradient text-5xl font-bold`}
                  style={{
                    ['--value' as string]:
                      initialValue > 1000
                        ? timeUnits(initialValue)?.seconds
                        : 0,
                  }}
                ></span>
              </span>
            </div>

            <p
              className={`${jetBrains.className} orange-gradient relative  mt-6 ml-8 bg-clip-text text-xs font-normal text-transparent md:text-base`}
            >
              SECONDS
            </p>
          </div>
        </div>
        <div
          className={`${poppins.className} relative mt-20 flex w-full items-center justify-center space-x-5`}
        >
          {' '}
          <Link href="/dropv" className=" w-1/2">
            <button
              className="w-full  rounded-full border-2
            border-[#DB0F29] 
            py-4 text-center"
            >
              {' '}
              <p className="text-color">View Drop</p>{' '}
            </button>
          </Link>
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-1/2 border-none text-base normal-case text-white md:w-48"
          >
            Mint Now
          </label>
        </div>
      </div>
    </section>
  );
};

export default CountDown;

{
}
