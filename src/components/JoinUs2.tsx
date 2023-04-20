import Image from 'next/image';

export const JoinUs2 = () => {
  return (
    <div className="orange-gradient m-auto  flex h-[164px] w-[1200px] max-w-full flex-col items-center justify-center gap-2 rounded-lg py-16 text-white md:h-[289.78px]">
      <Image
        className=""
        src={'/discord-icon-svgrepo-com.svg'}
        alt={''}
        width={46}
        height={37}
      />
      <h3 className=" text-2xl font-bold sm:text-5xl mb-4">Join Our Comunity</h3>
      <button className="rounded-3xl bg-white px-6 py-1 text-base text-black md:px-12 md:py-3">
        Join Discord
      </button>
    </div>
  );
};
