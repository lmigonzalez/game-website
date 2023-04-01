import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
const Hero = () => {
  return (
    <>
      <section className="hidden md:block relative m-auto w-[1400px] max-w-full  px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            className="absolute top-1/4 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform md:top-1/2
		"
            src="/ane-gameservices-icon-removebg-preview 1.svg"
            alt=""
            width={629}
            height={629}
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className=" relative z-10 w-full md:w-1/2 "
        >
          <h1 className="mb-7 text-5xl font-bold leading-[77.6px]">
            Work that we <br /> produce for our <br /> clients
          </h1>
          <p className="mb-14 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
          <button>
            <p className="orange-gradient flex h-14 w-48 items-center justify-center rounded-full text-white">
              Get more details
            </p>
          </button>
        </motion.div>
      </section>


      {/* Small screen */}

      <section className="block md:hidden relative m-auto w-[1400px] max-w-full  px-4">
        <div>
          <Image
            className="absolute top-1/4 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform md:top-1/2
		"
            src="/ane-gameservices-icon-removebg-preview 1.svg"
            alt=""
            width={629}
            height={629}
          />
        </div>

        <div className=" relative z-10 w-full md:w-1/2 ">
          <h1 className="mb-7 text-5xl font-bold leading-[77.6px]">
            Work that we <br /> produce for our <br /> clients
          </h1>
          <p className="mb-14 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
          <button>
            <p className="orange-gradient flex h-14 w-48 items-center justify-center rounded-full text-white">
              Get more details
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
