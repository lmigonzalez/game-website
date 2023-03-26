import React from 'react';

const OurGallery = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold">Our Gallery</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{' '}
      </p>

      <div>Gallery goes here!!!</div>
      <div className="mb-24 flex w-full justify-center">
        <button className="">
          <p className="orange-gradient mt-24 flex h-14 w-36 items-center justify-center rounded-lg text-white">
            SEE ALL
          </p>
        </button>
      </div>

      <div className='text-start space-y-6 w-1/2 mb-16'>
        <strong className='text-3xl font-semibold'>Lorem Ipsum</strong>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </p>
      </div>

      <div className='bg-black text-white flex justify-between items-center p-10 rounded-xl'>
        <div className='text-start w-1/2'>
          <strong className='text-3xl font-medium'>Stay in the loop</strong>
          <p className='mt-3'>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{' '}
          </p>
        </div>
        <div className='bg-white w-[385px] h-12 flex items-center justify-between px-2 rounded-lg'>
          <input className='h-full bg-transparent pl-4' type="text" placeholder="Enter email address" />
          <button className=" h-full">
            <p className="orange-gradient flex h-9 w-24 items-center justify-center rounded-lg text-white">
              Continue
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
