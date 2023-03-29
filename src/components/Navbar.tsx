import React, { FC, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import classNames from "classnames";
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Navbar: FC<{ behavior: number }> = ({ behavior }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useStateContext();

  return (
    <header
      className={`${
        poppins.className
      } absolute top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-4 py-10 text-black ${
        router.asPath === "/dropv" ? "text-white" : "text-black"
      }`}
    >
      <p className="font-bold">LOGO</p>

      <nav className="flex items-center ">
        <ul className="mr-8 hidden space-x-14 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          {(behavior === 1 || behavior === 0) && (
            <li className="">
              <Link href="/news">News</Link>
            </li>
          )}
        </ul>

        {user && (behavior === 1 || behavior === 0) ? (
          <div className="mr-5 hidden h-[48px] flex-row items-center gap-2 text-[20px] md:flex ">
            <Image
              src={user.avatar}
              alt={"no img"}
              width={48}
              height={48}
              className="rounded-full"
            />
            <strong>${user.money}k</strong>
          </div>
        ) : (
          <div className="dropdown-end dropdown">
            <label
              tabIndex={0}
              className="btn m-1 w-auto border-none bg-transparent p-0 hover:bg-transparent"
            >
              <Image
                className="h-8 w-8 rounded-full"
                src="/michael-dam.jpg"
                alt=""
                width={32}
                height={32}
              />
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
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow-lg"
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
        )}

        {(behavior === 1 || behavior === 0) &&
          (user ? (
            <Link
              href="buy-currency"
              className={classNames(
                `orange-gradient rounded py-3 px-7 text-white md:flex`,
                { hidden: behavior !== 1 }
              )}
            >
              Buy Currency
            </Link>
          ) : (
            <Link
              href="contact"
              className={classNames(
                `orange-gradient rounded py-3 px-7 text-white md:flex`,
                { hidden: behavior !== 1 }
              )}
            >
              Contact us
            </Link>
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
            <ul className="flex flex-col items-center justify-center space-y-6">
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
  );
};

export default Navbar;
