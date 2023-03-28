import React from "react";
import Image from "next/image";
const gamesListing2 = () => {
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

      <div className="my-grid mt-14 grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-2">
        <div className="w-fit">
          <div>
            <Image src="/1048227 1.svg" alt="" width={505} height={285} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="orange-gradient bg-clip-text font-bold text-transparent">
              Free Fire
            </p>
            <button type="submit">
              <p className="orange-gradient flex h-8 w-32 items-center justify-center rounded-full text-xs text-white ">
                Play Now
              </p>
            </button>
          </div>
        </div>

        <div className="w-fit">
          <div>
            <Image src="/1136546 1.svg" alt="" width={505} height={285} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="orange-gradient bg-clip-text font-bold text-transparent">
              Free Fire
            </p>
            <button type="submit">
              <p className="orange-gradient flex h-8 w-32 items-center justify-center rounded-full text-xs text-white ">
                Play Now
              </p>
            </button>
          </div>
        </div>

        <div className="w-fit">
          <div>
            <Image src="/1044063 1.svg" alt="" width={505} height={285} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="orange-gradient bg-clip-text font-bold text-transparent">
              Free Fire
            </p>
            <button type="submit">
              <p className="orange-gradient flex h-8 w-32 items-center justify-center rounded-full text-xs text-white ">
                Play Now
              </p>
            </button>
          </div>
        </div>

        <div className="w-fit">
          <div>
            <Image src="/1048227 1.svg" alt="" width={505} height={285} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="orange-gradient bg-clip-text font-bold text-transparent">
              Free Fire
            </p>
            <button type="submit">
              <p className="orange-gradient flex h-8 w-32 items-center justify-center rounded-full text-xs text-white ">
                Play Now
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gamesListing2;
