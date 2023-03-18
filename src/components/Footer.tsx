/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={`mt-auto bg-black font-light text-white`}>
      <div className="mb-8 flex flex-col justify-between space-x-0 space-y-6 border-b-2 border-solid px-4 py-10 md:flex-row  md:space-y-0 md:space-x-16">
        <div className="space-y-4 ">
          <p className="font-extrabold">LOGO</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p className="hidden md:block">@Lorem</p>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-between">
          <h3 className="mb-4 whitespace-nowrap font-medium">About us</h3>
          <ul className="space-y-4">
            <li>
              {" "}
              <Link href="/">Zeux</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">Portfolio</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">Careers</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">Contact us</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Contact us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p>+123 89097 890</p>
        </div>

        <div>
          <ul className="mr-4 flex h-full items-end gap-4">
            <li>
              {" "}
              <Link href="/">
                <Image
                  src="/facebook-round-svgrepo-com.svg"
                  alt=""
                  width={75}
                  height={75}
                />
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">
                <Image
                  src="/instagram-svgrepo-com.svg"
                  alt="asd"
                  width={75}
                  height={75}
                />
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">
                <Image
                  src="/twitter-2-svgrepo-com.svg"
                  alt=""
                  width={75}
                  height={75}
                />
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/">
                <Image
                  src="/linkedin-round-svgrepo-com.svg"
                  alt=""
                  width={75}
                  height={75}
                />
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <p className="w-full py-8 text-center">
        Copyright ® 2022 All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
