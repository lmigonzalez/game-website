/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
const wagerSelection = () => {
  return (
    <>
      <Head>
        <title>Wager Selection</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navBarBehavior={1}>
        <section className="m-auto w-[1200px] max-w-full  px-4 py-24 text-black">
          <h1 className="orange-gradient h-20 bg-clip-text text-6xl font-bold text-transparent">
            Select Wager
          </h1>
          <p>
            To start playing a game, you'll need to select the game you want to
            play and enter into the game wager. Once you've selected your game,
            you'll need to enter into the game wager. This is the amount of
            money you are willing to bet on the game. Make sure to enter a wager
            that you are comfortable with.
          </p>
          <div className="my-grid mt-14 grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-[450px] w-full rounded-lg bg-white">
              <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
                <strong className="text-3xl">Small</strong>

                <p className="text-[7.87px] lg:text-base">Normal</p>

                <div className="orange-gradient custom-shadow-bottom absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold">
                  ¥1k
                </div>
              </div>
              <div className="space-y-5 px-4 pt-24">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>30% Winning Chance</p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px]  w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <Link
                  href="/player-waiting"
                  className="orange-gradient m-auto flex h-14 w-80 items-center justify-center rounded-full text-white"
                >
                  Select this Wager
                </Link>
              </div>
            </div>

            {/* 2 */}

            <div className="h-[450px] w-full rounded-lg bg-white">
              <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
                <strong className="text-3xl">Medium</strong>
                <p className="text-[7.87px] lg:text-base">Gold</p>
                <div className="orange-gradient custom-shadow-bottom absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold">
                  ¥10k
                </div>
              </div>
              <div className="space-y-5 px-4 pt-24">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>60% Winning Chance</p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="flex justify-center">
                  <button className="m-auto h-14 w-80 rounded-full border-2 border-[#DB0F29] text-center">
                    <Link
                      href="/player-waiting"
                      className="flex items-center justify-center "
                    >
                      <p className="text-color font-semibold">
                        {' '}
                        Select this Wager
                      </p>
                    </Link>{' '}
                  </button>
                </div>
              </div>
            </div>

            {/* 3 */}

            <div className="h-[450px] w-full rounded-lg bg-white">
              <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
                <strong className="text-3xl">Large</strong>
                <p className="text-[7.87px] lg:text-base">Platinum</p>
                <div className="orange-gradient custom-shadow-bottom absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold">
                  ¥100k
                </div>
              </div>
              <div className="space-y-5 px-4 pt-24">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>90% Winning Chance</p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="flex justify-center">
                  <button className="m-auto h-14 w-80 rounded-full border-2 border-[#DB0F29] text-center">
                    <Link
                      href="/player-waiting"
                      className="flex items-center justify-center "
                    >
                      <p className="text-color font-semibold">
                        {' '}
                        Select this Wager
                      </p>
                    </Link>{' '}
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden w-full lg:block"></div>

            {/* 4 */}
            <div className="h-[450px] w-full rounded-lg bg-white">
              <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
                <strong className="text-3xl">Free</strong>
                <p className="text-[7.87px] lg:text-base">Basic</p>
                <div className="orange-gradient custom-shadow-bottom absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold">
                  Free
                </div>
              </div>
              <div className="space-y-5 px-4 pt-24">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>10% Winning Chance</p>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="h-[18.08px] w-[18.08px] rounded-full bg-[#1AA260] p-1 text-white lg:h-6 lg:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className="flex items-center justify-center">
                  <button className="m-auto h-14 w-80 rounded-full border-2 border-[#DB0F29] text-center">
                    <Link
                      href="/player-waiting"
                      className="flex items-center justify-center "
                    >
                      <p className="text-color font-semibold">
                        {' '}
                        Select this Wager
                      </p>
                    </Link>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full"></div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default wagerSelection;
