import React from 'react';

const wagerSelection = () => {
  return (
    <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
      <h1 className="orange-gradient mb-4 bg-clip-text text-6xl font-bold text-transparent">
        Select Wager
      </h1>
      <p>
        To start playing a game, you'll need to select the game you want to play
        and enter into the game wager. Once you've selected your game, you'll
        need to enter into the game wager. This is the amount of money you are
        willing to bet on the game. Make sure to enter a wager that you are
        comfortable with.
      </p>
      <div className="my-grid mt-14 grid grid-cols-3 items-center justify-items-center gap-4">
        <div className="h-[450px] rounded-lg bg-white">
          <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
            <strong className="text-3xl">Small</strong>
            <p>Normal</p>
            <div className="orange-gradient absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold custom-shadow-bottom">
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
              <p className="orange-gradient flex h-14 w-[315px] items-center justify-center rounded-full text-white">
                Select this Wager
              </p>
            </button>
          </div>
        </div>

        {/* 2 */}

        <div className="h-[450px] rounded-lg bg-white">
          <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
            <strong className="text-3xl">Medium</strong>
            <p>Gold</p>
            <div className="orange-gradient absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold custom-shadow-bottom">
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
              className="h-14 w-[315px]  rounded-full border-2
            			border-[#DB0F29] text-center"
            >
              {' '}
              <p className="text-color font-medium"> Select this Wager</p>{' '}
            </button>
          </div>
        </div>

        {/* 3 */}

        <div className="h-[450px] rounded-lg bg-white">
          <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
            <strong className="text-3xl">Large</strong>
            <p>Platinum</p>
            <div className="orange-gradient absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold custom-shadow-bottom">
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
              className="h-14 w-[315px]  rounded-full border-2
            			border-[#DB0F29] text-center"
            >
              {' '}
              <p className="text-color font-medium"> Select this Wager</p>{' '}
            </button>
          </div>
        </div>

        {/* 4 */}

        <div className="h-[450px] rounded-lg bg-white">
          <div className="orange-gradient relative h-36 rounded-t-lg pt-3 text-center text-white">
            <strong className="text-3xl">Free</strong>
            <p>BASIC</p>
            <div className="orange-gradient absolute -bottom-32 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-[4px] border-solid border-white text-4xl font-bold custom-shadow-bottom">
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
                className="h-6 w-6 rounded-full bg-[#1AA260] p-1 text-white"
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
              className="h-14 w-[315px]  rounded-full border-2
            			border-[#DB0F29] text-center"
            >
              {' '}
              <p className="text-color font-medium"> Select this Wager</p>{' '}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default wagerSelection;
