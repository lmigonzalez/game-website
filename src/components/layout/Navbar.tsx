import React, { FC, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";
import classNames from "classnames";
import BuyCurrency from "../BuyCurrency";

// const poppins = Poppins({
//   weight:["400", "500", "700"],
//   subsets:["latin"]
// })

const Navbar: FC<{ behavior: number }> = ({ behavior }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useStateContext();
  const [buying, setBuying] = useState(false);

  return (
    <>
      {buying && (
        <BuyCurrency
          handleDisplayWallet={() => {
            setBuying(!buying);
          }}
        />
      )}
      <header
        className={`absolute top-0 left-0 z-10 flex w-full flex-row items-center justify-between bg-transparent px-4 py-10 ${
          router.asPath === "/dropv" ? "text-white" : "text-black"
        }`}
      >
        <p className="font-bold text-black">LOGO</p>

        <nav className="flex items-center text-black">
          <ul className="mr-8 hidden space-x-4 md:flex lg:space-x-14">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            {behavior !== 4 && (
              <li>
                <Link href="/games-listing">Games</Link>
              </li>
            )}
            {(behavior === 1 || behavior === 3 || behavior === 4) && (
              <li className="">
                <Link href="/news">News</Link>
              </li>
            )}
          </ul>

          {behavior === 1 && user && (
            <>
              <div className="dropdown dropdown-end shrink-0 text-black ">
                <label
                  tabIndex={0}
                  className="btn m-1 flex w-auto flex-row gap-2 border-none bg-transparent p-0 hover:bg-transparent"
                >
                  <Image
                    className="h-12 w-12 rounded-full"
                    src="/profile-pic.svg"
                    alt=""
                    width={1200}
                    height={1200}
                  />
                  <span className="text-xl font-bold text-black">
                    {user.name}
                  </span>
                  <Image
                    className=""
                    src="/triangle-down-svgrepo-com.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu w-32 rounded-md bg-white text-sm text-black shadow-lg"
                >
                  <li>
                    <Link href={"/profile-setting"}>View Profile</Link>
                  </li>
                  <li>
                    <Link href={"/equip-items"}>Inventory</Link>
                  </li>
                  <li>
                    <Link href={""} onClick={() => setBuying(true)}>
                      Buy Currency
                    </Link>
                  </li>
                  <li>
                    <Link href={"/profile-setting"}>Setting</Link>
                  </li>
                  <li>
                    <Link href={"/profile-setting"}>Logout</Link>
                  </li>
                </ul>
              </div>
              <div
                className="orange-gradient ml-3 hidden shrink-0 cursor-pointer rounded-lg py-3 px-7 text-white md:block "
                onClick={() => setBuying(true)}
              >
                Buy Currency
              </div>
            </>
          )}

          {behavior === 2 &&
            (user ? (
              <div className="dropdown dropdown-end text-black">
                <label
                  tabIndex={0}
                  className="btn m-1 w-auto border-none bg-transparent p-0 hover:bg-transparent"
                >
                  <div className="h-8 w-8 rounded-full">
                    <Image
                      className="h-8 w-8 rounded-full object-cover object-center"
                      src="/profile-pic.svg"
                      alt=""
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <Image
                    className=""
                    src="/triangle-down-svgrepo-com.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box w-52 p-2 text-black shadow-lg"
                >
                  <li>
                    <a>View Profile</a>
                  </li>
                  <li>
                    <a>Setting</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            ))}

          {(behavior === 3 || behavior === 0) &&
            (user ? (
              <Link
                href="contact"
                className={classNames(
                  `orange-gradient rounded py-3 px-7 text-white md:flex`
                )}
              >
                Contact us
              </Link>
            ) : (
              ""
            ))}

          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="relative z-20 ml-6 block md:hidden"
          >
            {!showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          {behavior === 4 && (
            <Link
              href="contact"
              className={classNames(
                `orange-gradient rounded py-3 px-7 text-white md:flex`
              )}
            >
              Sign in / Sign Up
            </Link>
          )}
        </nav>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ y: -200, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ damping: 10, stiffness: 100, duration: 0.1 }}
              className={`absolute left-0 top-0 z-10 block w-full ${
                router.asPath === "/dropv" ? "bg-black" : "bg-white"
              }  pb-8 pt-32 shadow-xl md:hidden`}
            >
              <ul className="flex flex-col items-center justify-center space-y-6 text-black">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="">
                  <Link href="/news">News</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
