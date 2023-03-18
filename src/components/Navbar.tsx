import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`${
        poppins.className
      } absolute top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-4 py-10 text-black ${
        router.asPath === '/dropv' ? 'text-white' : 'text-black'
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

        <Link
          href="contact"
          className="orange-gradient rounded py-3 px-7 text-white"
        >
          Contact us
        </Link>

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
      {showMenu && (
        <div className= {`absolute left-0 top-0 z-10 block w-full ${router.asPath === '/dropv' ? 'bg-black' : 'bg-white'}  pb-8 pt-32 shadow-xl md:hidden`}>
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
