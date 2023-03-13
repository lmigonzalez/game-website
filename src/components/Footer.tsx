import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className={`mt-auto bg-black text-white font-light`}>
      <div className="flex justify-between space-x-8 mb-8 border-solid border-b-2  px-4 py-10">
        <div className="space-y-4 ">
          <p className='font-extrabold'>LOGO</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <p>@Lorem</p>
        </div>
        <div className="h-full flex flex-col justify-between ">
          <h3 className="whitespace-nowrap">About us</h3>
          <ul className="space-y-4">
            <li>
              {' '}
              <Link href="/">Zeux</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">Portfolio</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">Careers</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">Contact us</Link>{' '}
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3>Contact us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <p>+123 89097 890</p>
        </div>

        <div>
          <ul className="flex items-end h-full mr-4">
            <li>
              {' '}
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>{' '}
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center w-full py-8">Copyright ® 2022 All rights Reserved</p>
    </footer>
  );
};

export default Footer;
