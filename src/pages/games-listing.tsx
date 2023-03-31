/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

const gamesListing = () => {
  return (
    <>
      <Layout navBarBehavior={1}>
        <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
          <h1 className="orange-gradient mb-4 bg-clip-text text-6xl font-bold text-transparent ">
            Popular Games
          </h1>
          <p className="font-medium">
            We help you discover and explore the many games we have to offer.We
            have a large variety of games for you to choose from, including
            action, adventure, puzzle, simulation, strategy, and more. We are
            constantly adding new games to our library, so check back often to
            see what's new. ur game listing screen is designed to make it easy
            for you to find the games you want to play. You can search for games
            by name, sort games by category, popularity, or price, and view
            screenshots and trailers for each game.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-x-2">
            <div className="relative flex h-[375px] w-[375px] items-end ">
              <Image
                src="/Group 1000001536.svg"
                alt=""
                width={375}
                height={375}
              />
              <button className="absolute left-4 bottom-4">
                <p className="orange-gradient flex h-8 w-20 items-center justify-center rounded-full text-xs text-white">
                  Play Now
                </p>
              </button>
            </div>

            <div className="relative flex h-[375px] w-[375px] items-end ">
              <Image
                src="/Fortnite-Transparent 1 (1).svg"
                alt=""
                width={375}
                height={375}
              />

              <button className="absolute left-4 bottom-4">
                <p className="orange-gradient flex h-8 w-20 items-center justify-center rounded-full text-xs text-white">
                  Play Now
                </p>
              </button>
            </div>

            <div className="relative flex h-[375px] w-[375px] items-end ">
              <Image
                src="/Group 1000001537.svg"
                alt=""
                width={375}
                height={375}
              />

              <button className="absolute left-4 bottom-4">
                <p className="orange-gradient flex h-8 w-20 items-center justify-center rounded-full text-xs text-white">
                  Play Now
                </p>
              </button>
            </div>

          </div>

          <div className="hide-scroll-bar relative mt-24 h-[282px] w-full overflow-y-hidden overflow-x-scroll">
            <div className="absolute flex space-x-5 ">

              <div className=" flex h-[282.2px] w-[226px] flex-col items-end shadow-md shadow-black">
                <div className="h-[164px] w-[226px]">
                  <Image src="/witcher.png" alt="" width={226} height={164} />
                </div>
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{' '}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 */}

              

              <div className="relative h-[282.2px] w-[226px] overflow-hidden">
                <Image
                  src={'/COD-MW.svg'}
                  alt={''}
                  width={300}
                  height={282.2}
                  className="absolute left-[-10px] min-w-[250px]"
                />

                <div className="orange-gradient absolute bottom-0 h-[118px] w-[226px] p-4 text-white">
                  <p className="whitespace-nowrap text-sm font-normal">
                    Call of Duty Modern Warfare II
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 */}

              <div className="relative h-[282.2px] w-[226px] overflow-hidden">
                <Image
                  src={'/NBA.svg'}
                  alt={''}
                  width={300}
                  height={282.2}
                  className="absolute left-[-10px] min-w-[250px]"
                />

                <div className="orange-gradient absolute bottom-0 h-[118px] w-[226px] p-4 text-white">
                  <p className="text-sm font-normal">NBA 2K23 </p>
                  <p className="text-xs opacity-75">Sport</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div className="relative h-[282.2px] w-[226px] overflow-hidden">
                <Image
                  src={'/Pes-2023.svg'}
                  alt={''}
                  width={300}
                  height={282.2}
                  className="absolute left-[-10px] min-w-[250px]"
                />

                <div className="orange-gradient absolute bottom-0 h-[118px] w-[226px] p-4 text-white">
                  <p className="text-sm font-normal">Pes 2023</p>
                  <p className="text-xs opacity-75">Sport</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5 */}

              <div className=" flex h-[282.2px] w-[226px] flex-col items-end shadow-md shadow-black">
                <div className="h-[164px] w-[226px] ">
                  <Image src="/GTA.png" alt="" width={226} height={164} />
                </div>
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">GTA VI </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div className="relative h-[282.2px] w-[226px] overflow-hidden">
                <Image
                  src={'/COD-MW.svg'}
                  alt={''}
                  width={300}
                  height={282.2}
                  className="absolute left-[-10px] min-w-[250px]"
                />

                <div className="orange-gradient absolute bottom-0 h-[118px] w-[226px] p-4 text-white">
                  <p className="whitespace-nowrap text-sm font-normal">
                    Call of Duty Modern Warfare II
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 flex w-full items-center justify-between">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>

                    <div className="flex space-x-2">
                      <Image src="/windows.svg" alt="" height={20} width={20} />
                      <Image
                        src="/playstation-icon.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default gamesListing;
