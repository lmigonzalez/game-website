import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
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
          <li className="">
            <Link href="/news">News</Link>
          </li>
        </ul>

        {user ? (
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
          ""
        )}

        {user ? (
          <Link
            href="buy-currency"
            className="orange-gradient hidden rounded py-3 px-7 text-white md:flex"
          >
            Buy Currency
          </Link>
        ) : (
          <Link
            href="contact"
            className="orange-gradient hidden rounded py-3 px-7 text-white md:flex"
          >
            Contact us
          </Link>
        )}

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
