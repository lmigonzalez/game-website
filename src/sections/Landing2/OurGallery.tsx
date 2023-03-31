import React from "react";
import Image from "next/image";
const OurGallery = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full py-24 text-center">
      <div className="px-4">
        <h2 className="mb-4 text-3xl font-bold">Our Gallery</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>

        {/* <div className='grid grid-cols-3 gap-4 mt-16'>
          <Image src='Rectangle 15.svg' alt='' width={382} height={223} />
          <Image src='Rectangle 16.svg' alt='' width={382} height={223} />
          <Image src='Rectangle 17.svg' alt='' width={382} height={223} />

          <Image src='Rectangle 19.svg' alt='' width={382} height={223} />
          <Image src='Rectangle 18.svg' alt='' width={382} height={223} />
          <Image src='Rectangle 20 (11).svg' alt='' width={382} height={223} />
        </div> */}

        <div className="mt-16 flex flex-wrap  gap-7 justify-center">
          <Image src="Rectangle 15.svg" alt="" width={382} height={223} />
          <Image src="Rectangle 16.svg" alt="" width={382} height={223} />
          <Image src="Rectangle 17.svg" alt="" width={352} height={223} />

          <Image src="Rectangle 19.svg" alt="" width={246} height={223} />
          <Image src="Rectangle 18.svg" alt="" width={401} height={223} />
          <Image src="Rectangle 20 (11).svg" alt="" width={469} height={223} />
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

        <div className="flex h-12 w-full items-center justify-between rounded-lg bg-white px-2 md:w-[385px]">
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
