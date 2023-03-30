/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const gamesListing = () => {
  return (
    <>
      <Head>
        <title>Games </title>
        <meta name="description" content="Available Games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navBarBehavior={1}>
        <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
          <h1 className="orange-gradient mb-4 bg-clip-text text-6xl   font-bold text-transparent ">
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
          <div className="hide-scroll-bar relative mt-24 h-[282px] w-full overflow-y-hidden overflow-x-scroll">
            <div className="absolute flex space-x-5 ">
              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/Rectangle-20.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2 */}

              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/COD-MW.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 */}

              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/NBA.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/Pes-2023.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              {/* 5 */}

              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/Rectangle-20.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
                    <button className="h-8  w-24 rounded-full bg-white">
                      <p className="orange-gradient bg-clip-text text-transparent">
                        Play Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* 6 */}

              <div className=" flex h-[282.2px] w-[226px] items-end bg-[url('/COD-MW.svg')]">
                <div className="orange-gradient h-[118px] w-full p-4 text-white">
                  <p className="text-sm font-normal">
                    The Witcher 3: Wild Hunt{" "}
                  </p>
                  <p className="text-xs opacity-75">Fighting, Action</p>

                  <div className=" mt-6 w-full">
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
      </Layout>
    </>
  );
};

export default gamesListing;
