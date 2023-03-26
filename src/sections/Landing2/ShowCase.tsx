import React from 'react';
import Image from 'next/image';
const ShowCase = () => {
  return (
    <section className="flex items-center justify-start bg-[url('/hot-air-balloons.jpg')] bg-cover bg-center bg-no-repeat py-28">
      <div className="m-auto w-[1400px] max-w-full  px-4 text-center text-white">
        <strong className="text-3xl font-bold leading-[56px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </strong>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className='flex items-center justify-between mt-24'>
          <div className='flex flex-col items-center space-y-6'>
            <Image src="/Group 48.svg" alt="" width={65} height={65} />
            <p className='font-medium'>Mobile Game App</p>
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

		  <div className='flex flex-col items-center space-y-6'>
            <Image src="/Group 49.svg" alt="" width={65} height={65} />
            <p className='font-medium'>PC Game</p>
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

		  <div className='flex flex-col items-center space-y-6'>
            <Image src="/Group 50.svg" alt="" width={65} height={65} />
            <p className='font-medium'>PS4 Game</p>
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

		  <div className='flex flex-col items-center space-y-6'>
            <Image src="/Group 51.svg" alt="" width={65} height={65} />
            <p className='font-medium'>AR/VR Solutions</p>
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
        </div>


		<div className='flex items-center justify-center mt-24 '>
          <div className='flex flex-col items-center space-y-6 w-1/4'>
            <Image src="/Group 52.svg" alt="" width={65} height={65} />
            <p className='font-medium'>Online Chat Option</p>
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

		  <div className='flex flex-col items-center space-y-6 w-1/4'>
            <Image src="/Group 53.svg" alt="" width={65} height={65} />
            <p className='font-medium'>3D Modelings</p>
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
        </div>
      </div>
    </section>
  );
};

export default ShowCase;