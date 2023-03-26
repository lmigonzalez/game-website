import React from 'react';
import Image from 'next/image';
const gamesListing = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
      <h1 className="orange-gradient mb-4 bg-clip-text text-6xl   font-bold text-transparent ">
        Popular Games
      </h1>
      <p className="font-medium">
        We help you discover and explore the many games we have to offer.We have
        a large variety of games for you to choose from, including action,
        adventure, puzzle, simulation, strategy, and more. We are constantly
        adding new games to our library, so check back often to see what's new.
        ur game listing screen is designed to make it easy for you to find the
        games you want to play. You can search for games by name, sort games by
        category, popularity, or price, and view screenshots and trailers for
        each game.
      </p>

      <div className="hide-scroll-bar relative mt-24 h-[282px] w-full overflow-y-hidden overflow-x-scroll">
        <div className="absolute flex space-x-5">
          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/Rectangle-20.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">The Witcher 3: Wild Hunt </p>
              <p className="text-xs opacity-75">Fighting, Action</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/COD-MW.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">
                Call of Duty Modern warfare II{' '}
              </p>
              <p className="text-xs opacity-75">Fighting, Action</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/NBA.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">NBA 2K23 </p>
              <p className="text-xs opacity-75">Sport</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/Pes-2023.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">Pes 2023 </p>
              <p className="text-xs opacity-75">Sport</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* 5 */}

          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/Rectangle-20.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">GTA VI </p>
              <p className="text-xs opacity-75">Fighting, Action</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* 6 */}

          <div className=" h-[282px] w-[226px]">
            <div className="h-[164px] w-full bg-[url('/Rectangle-20.svg')] bg-cover bg-top bg-no-repeat ">
              {/* <Image
              src="/Rectangle-20.svg"
              alt=""
              fill
            /> */}
            </div>

            <div className="orange-gradient relative h-[118px] w-full space-y-2 p-2 text-white">
              <p className="text-sm font-normal">
                Call of Duty Modern warfare II{' '}
              </p>
              <p className="text-xs opacity-75">Fighting, Action</p>

              <div className="absolute bottom-3 left-0 w-full  px-2">
                <button className="h-8  w-24 rounded-full bg-white">
                  <p className="orange-gradient bg-clip-text text-transparent">
                    Play Now
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gamesListing;
