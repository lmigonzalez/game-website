import React from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
  });

const Navbar = () => {
  return (
    <header className={`${poppins.className} flex justify-between items-center px-4 py-10`}>
      <p className='font-bold'>LOGO</p>

      <nav className='flex items-center'>
        <ul className='flex space-x-6 mr-8'>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className=''>
            <Link href="/news">News</Link>
          </li>
        </ul>

        <Link href='' className='py-3 px-7 rounded orange-gradient text-white'>Contact us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
