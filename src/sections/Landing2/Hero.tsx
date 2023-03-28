import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className="relative m-auto w-[1400px] max-w-full  px-4">
      <Image
        className="absolute top-1/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3
		"
        src="/ane-gameservices-icon-removebg-preview 1.svg"
        alt=""
        width={629}
        height={629}
      />
      <div className=' w-full md:w-1/2 relative z-10 '>
        <h1 className='font-bold text-5xl mb-7 leading-[77.6px]'>Work that we <br/> produce for our <br/> clients</h1>
        <p className='mb-14 leading-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <button>
          <p className="orange-gradient flex h-14 w-48 items-center justify-center rounded-full text-white">
            Get more details
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
