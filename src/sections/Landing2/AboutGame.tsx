import React from 'react';
import Image from 'next/image';
const AboutGame = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full  px-4 py-24">
      <div className=" mb-14 flex items-center justify-between">
        <strong className="text-3xl">About Game</strong>
        <button className="h-14 w-36 rounded bg-zinc-300 text-xl font-medium">
          SEE ALL
        </button>
      </div>
      <div className="mb-14 flex items-center justify-between">
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

      <p className="mb-28 text-center text-3xl font-semibold leading-[65px]">
        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
        industry.
      </p>

      <div className="mb-12 w-1/2">
        <strong className="text-3xl ">Lorem Ipsum</strong>
        <p className="mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>

      <div className="relative mb-48">
        <Image
          src="/dot-square.png"
          alt=""
          width={180}
          height={140}
          className="absolute top-[-60px] right-40"
        />
        <Image src="/Rectangle 4.svg" alt="" width={1400} height={500} />
      </div>


      <div className='flex justify-between items-center'>
        <div className='bg-[#F5F5F5] rounded-2xl w-[310px] h-[350px] flex flex-col items-center px-4'>
          <div className='py-7 w-full text-center border-b-[2px] border-[#D4D4D4] mb-7'>
            <strong className='font-semibold text-3xl'>Personal</strong>
            <p className='mt-5 text-[#5A5A5A] text-[10px] flex items-center justify-center'>
              € <strong className='font-medium text-lg text-[#363535] mx-[2px]'> 12,99 </strong> / user
            </p>
          </div>
          <div className='space-y-3 mb-7 text-[#AEAEAE] text-[13px]'>
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

              <p className=''>Organize your notes and <strong className='text-[#2c2a2a] font-normal'>workflows</strong>.</p>
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

			  <p className=''><strong className='text-[#2c2a2a] font-normal'>5GB</strong> of space.</p>
            </div>

          </div>

		  <button className="">
              <p className="orange-gradient flex h-10 px-4 items-center justify-center rounded-full text-sm text-white">
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
		<div className='bg-[#1E1E1E] rounded-2xl w-[310px] h-[410px] flex flex-col items-center px-4 text-white'>

          <div className='py-7 w-full text-center border-b-[2px] border-[#FFFFFF] mb-7'>
			<div className='orange-gradient w-14 h-8 rounded-xl flex items-center justify-center m-auto mb-4'>-30%</div>
            <strong className='font-semibold text-3xl'>Pro Plan</strong>
            <p className='mt-5 text-[#FFFFFF] text-[10px] flex items-center justify-center'>
              € <strong className='font-medium text-lg text-white mx-[2px]'> 24,90 </strong> / user
            </p>
          </div>
          <div className='space-y-3 mb-7 text-[#AEAEAE] text-[13px]'>
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

              <p>All features in <span className='text-white'>Personal</span>.</p>
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

              <p className=''> <span className='text-white'>Unlock</span> Teams to create a work group.</p>
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

			  <p className=''> <span className='text-white'>20GB</span>  of shared space.</p>
            </div>

          </div>

		  <button className="">
              <p className="orange-gradient flex h-10 px-4 items-center justify-center rounded-full text-sm text-white">
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

		<div className='bg-[#F5F5F5] rounded-2xl w-[310px] h-[350px] flex flex-col items-center px-4'>
          <div className='py-7 w-full text-center border-b-[2px] border-[#D4D4D4] mb-7'>
            <strong className='font-semibold text-3xl'>Enterprise</strong>
            <p className='mt-5 text-[#5A5A5A] text-[10px] flex items-center justify-center'>
              € <strong className='font-medium text-lg text-[#363535] mx-[2px]'> 54,90 </strong> / user
            </p>
          </div>
          <div className='space-y-3 mb-7 text-[#AEAEAE] text-[13px]'>
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

              <p>All features in <span className='text-[#4D4D4D]'>Pro Plan</span>.</p>
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

              <p className=''>Unlock <span className='text-[#4D4D4D]'>Database</span>  to manage your data.</p>
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

			  <p className=''><span className='text-[#4D4D4D]'>500GB</span>  / 5 shared spaces.</p>
            </div>

          </div>

		  <button className="">
              <p className="orange-gradient flex h-10 px-4 items-center justify-center rounded-full text-sm text-white">
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
  );
};

export default AboutGame;
