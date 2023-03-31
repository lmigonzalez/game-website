/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";

const wagerSelection = () => {
  return (
    <>
      <Head>
        <title>Wager Selection</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
        <h1 className="orange-gradient h-20 bg-clip-text text-6xl font-bold text-transparent">
          Select Wager
        </h1>
        <p>
          To start playing a game, you'll need to select the game you want to
          play and enter into the game wager. Once you've selected your game,
          you'll need to enter into the game wager. This is the amount of money
          you are willing to bet on the game. Make sure to enter a wager that
          you are comfortable with.
        </p>
        <div className="my-grid mt-14 grid grid-cols-2   gap-4 lg:grid-cols-3">
          <div className="container h-[216px] w-[185.83px] rounded-lg bg-white lg:h-[450px] lg:w-[384.2px]">
            <div className="orange-gradient relative h-[65.59px] w-full rounded-t-lg pt-1 text-center text-white lg:h-36 lg:pt-3">
              <strong className="text-[13.12px] lg:text-3xl">Small</strong>
              <p className="text-[7.87px] lg:text-base">Normal</p>
              <div className="orange-gradient custom-shadow-bottom absolute top-[73px] left-1/2 flex h-[61.21px] w-[61.21px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-solid border-white text-[17.62px] font-bold lg:top-[145px] lg:h-32 lg:w-32 lg:border-[4px] lg:text-4xl">
                ¥1k
              </div>
            </div>
            <div className="space-y-2 px-4 pt-[56px] text-[6.12px] lg:space-y-5 lg:pt-24 lg:text-base">
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

              <button className=" h-full">
                <p className="orange-gradient flex h-[26.23px] w-[152.16px] items-center justify-center rounded-full text-white lg:h-14 lg:w-[315px]">
                  Select this Wager
                </p>
              </button>
            </div>
          </div>

          {/* 2 */}

          <div className="container h-[216px] w-[185.83px] rounded-lg bg-white lg:h-[450px] lg:w-[384.2px]">
            <div className="orange-gradient relative h-[65.59px] w-full rounded-t-lg pt-1 text-center text-white lg:h-36 lg:pt-3">
              <strong className="text-[13.12px] lg:text-3xl">Medium</strong>
              <p className="text-[7.87px] lg:text-base">Gold</p>
              <div className="orange-gradient custom-shadow-bottom absolute top-[73px] left-1/2 flex h-[61.21px] w-[61.21px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-solid border-white text-[17.62px] font-bold lg:top-[145px] lg:h-32 lg:w-32 lg:border-[4px] lg:text-4xl">
                ¥10k
              </div>
            </div>
            <div className="space-y-2 px-4 pt-[56px] text-[6.12px] lg:space-y-5 lg:pt-24 lg:text-base">
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
              <button
                className="h-[26.23px] w-[152.16px] rounded-full border-2 border-[#DB0F29] text-center
            			lg:h-14 lg:w-[315px]"
              >
                {" "}
                <p className="text-color text-[7.87px] font-medium lg:text-base">
                  {" "}
                  Select this Wager
                </p>{" "}
              </button>
            </div>
          </div>

          {/* 3 */}

          <div className="container h-[216px] w-[185.83px] rounded-lg bg-white lg:h-[450px] lg:w-[384.2px]">
            <div className="orange-gradient relative h-[65.59px] w-full rounded-t-lg pt-1 text-center text-white lg:h-36 lg:pt-3">
              <strong className="text-[13.12px] lg:text-3xl">Large</strong>
              <p className="text-[7.87px] lg:text-base">Platinum</p>
              <div className="orange-gradient custom-shadow-bottom absolute top-[73px] left-1/2 flex h-[61.21px] w-[61.21px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-solid border-white text-[17.62px] font-bold lg:top-[145px] lg:h-32 lg:w-32 lg:border-[4px] lg:text-4xl">
                ¥100k
              </div>
            </div>
            <div className="space-y-2 px-4 pt-[56px] text-[6.12px] lg:space-y-5 lg:pt-24 lg:text-base">
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
              <button
                className="h-[26.23px] w-[152.16px] rounded-full border-2 border-[#DB0F29] text-center
            			lg:h-14 lg:w-[315px]"
              >
                {" "}
                <p className="text-color text-[7.87px] font-medium lg:text-base">
                  {" "}
                  Select this Wager
                </p>{" "}
              </button>
            </div>
          </div>

          {/* 4 */}

          <div className="container h-[216px] w-[185.83px] rounded-lg bg-white lg:h-[450px] lg:w-[384.2px]">
            <div className="orange-gradient relative h-[65.59px] w-full rounded-t-lg pt-1 text-center text-white lg:h-36 lg:pt-3">
              <strong className="text-[13.12px] lg:text-3xl">Free</strong>
              <p className="text-[7.87px] lg:text-base">Basic</p>
              <div className="orange-gradient custom-shadow-bottom absolute top-[73px] left-1/2 flex h-[61.21px] w-[61.21px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-solid border-white text-[17.62px] font-bold lg:top-[145px] lg:h-32 lg:w-32 lg:border-[4px] lg:text-4xl">
                Free
              </div>
            </div>
            <div className="space-y-2 px-4 pt-[56px] text-[6.12px] lg:space-y-5 lg:pt-24 lg:text-base">
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
              <button
                className="h-[26.23px] w-[152.16px] rounded-full border-2 border-[#DB0F29] text-center
            			lg:h-14 lg:w-[315px]"
              >
                {" "}
                <p className="text-color text-[7.87px] font-medium lg:text-base">
                  {" "}
                  Select this Wager
                </p>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default wagerSelection;
