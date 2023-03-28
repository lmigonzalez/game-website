import React from 'react';

const OurGallery = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full py-24 text-center">
      <div className="px-4">
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

        <div className="mb-16 hidden w-1/2 space-y-6 text-start md:block">
          <strong className="text-3xl font-semibold">Lorem Ipsum</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between md:rounded-xl bg-black py-10 px-4 text-white md:flex-row md:mx-4">
        <div className="mb-8 text-start md:mb-0 md:w-1/2">
          <strong className="text-3xl font-medium">Stay in the loop</strong>
          <p className="mt-3">
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{' '}
          </p>
        </div>

        <div className="flex h-12 w-full md:w-[385px] items-center justify-between rounded-lg bg-white px-2">
          <input
            className="h-full bg-transparent pl-4"
            type="text"
            placeholder="Enter email address"
          />
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
