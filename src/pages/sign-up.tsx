import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ConnectToWallet from '@/components/ConnectToWallet';
import Tutorial from '@/components/Tutorial';
import CryptoPaymentDetails from '@/components/CryptoPaymentDetails';
import CryptoPaymentDetails2 from '@/components/CryptoPaymentDetails2';
import CryptoPaymentUpdated from '@/components/CryptoPaymentUpdated';
import ChooseBundle from '@/components/ChooseBundle';
import ConnectToWallet2 from '@/components/ConnectToWallet2';
import SuccessStat from '@/components/SuccessStat';
import EnterCardDetails from '@/components/EnterCardDetails';

const signUp = () => {
  const initialValue = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  function handleDisplayWallet() {
    setShowConnectWallet(!showConnectWallet);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formValues);
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="relative flex min-h-screen">
        {/* <Tutorial/> */}
        {/* <CryptoPaymentDetails/> */}
        {/* <CryptoPaymentDetails2/> */}
        {/* <CryptoPaymentUpdated/> */}
        {/* <ChooseBundle/> */}
        {/* <ConnectToWallet2/> */}
        {/* <SuccessStat/> */}
        {/* <EnterCardDetails/> */}
        {showConnectWallet && (
          <ConnectToWallet handleDisplayWallet={handleDisplayWallet} />
        )}
        <div className="flex w-full flex-col md:justify-center justify-start bg-[url('/hot-air-balloons.jpg')] bg-cover bg-center bg-no-repeat md:w-1/2 md:items-start">
          <div className="absolute top-0 left-0 flex  w-full  justify-between mt-8 px-11 md:w-1/2">
            <strong className="text-2xl text-black">Logo Here</strong>
            <Link className="text-color block md:hidden" href="/">
              Sign in!
            </Link>
          </div>
          <div className="mx-4 mt-36 h-fit w-72 rounded-xl bg-black bg-opacity-20 p-4 text-white backdrop-blur-lg md:ml-11">
            <p className="mb-3 w-fit rounded-lg bg-black p-2">Logo</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="item-center max-w-[600px]  flex md:hidden flex-col justify-center px-4">
            <strong className="my-9 text-center text-2xl text-white">
              Get Started
            </strong>
            <form
              className="mb-12 py-8 flex w-full flex-col space-y-5 text-base text-[#5A5A5A]"
              autoComplete="false"
              onSubmit={handleSubmit}
            >
              <input
                className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6 "
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              <input
                className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <input
                className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <button type="submit">
                <p className="orange-gradient flex h-16 items-center justify-center rounded-lg text-white">
                  Create Account
                </p>
              </button>
            </form>

            <p className="text-center text-white">Or continue with</p>

            <div className="mt-11 py-8 mb-3 flex items-center justify-center space-x-3">
              <button className="flex h-11 w-32 items-center justify-center rounded border-[1px] border-solid border-[#D80027] bg-white">
                {' '}
                <Image
                  className="mr-2"
                  src={'/google.png'}
                  alt="google icon"
                  width={25}
                  height={25}
                />{' '}
                Google
              </button>

              <button
                onClick={handleDisplayWallet}
                className="flex h-11 w-32 items-center justify-center rounded border-[1px] border-solid border-[#DEDEDE] bg-white"
              >
                {' '}
                <Image
                  className="mr-2"
                  src={'/fox.png'}
                  alt="google icon"
                  width={25}
                  height={25}
                />{' '}
                MetaMask
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden w-1/2 flex-col items-center justify-center px-4 text-black md:flex">
          <div className="absolute top-0 left-0 mr-4  flex w-full items-center justify-end space-x-4  mt-10 px-11">
            <p>have an account?</p>
            <Link className="text-color" href="/">
              Sign in!
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <strong className="text-2xl ">Get Started</strong>
            <p className="text-[#7E7E7E]">Getting started is easy</p>

            <div className="mt-11 mb-3 flex items-center justify-between space-x-3">
              <button className="flex h-11 w-32 items-center justify-center rounded border-[1px] border-solid border-[#D80027] bg-white">
                {' '}
                <Image
                  className="mr-2"
                  src={'/google.png'}
                  alt="google icon"
                  width={25}
                  height={25}
                />{' '}
                Google
              </button>

              <button
                onClick={handleDisplayWallet}
                className="flex h-11 w-32 items-center justify-center rounded border-[1px] border-solid border-[#DEDEDE] bg-white"
              >
                {' '}
                <Image
                  className="mr-2"
                  src={'/fox.png'}
                  alt="google icon"
                  width={25}
                  height={25}
                />{' '}
                MetaMask
              </button>
            </div>
          </div>
          <div className="mb-8 flex w-[400px] max-w-full items-center justify-between space-x-4">
            <hr className="h-[2px] w-full bg-[#DBDBDB]" />
            <p className="whitespace-nowrap">Or continue with</p>
            <hr className="h-[2px] w-full bg-[#DBDBDB]" />
          </div>
          <form
            className="mb-12 py-8 flex w-[400px] max-w-full flex-col space-y-5 text-base text-[#5A5A5A]"
            autoComplete="false"
            onSubmit={handleSubmit}
          >
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6 "
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <button type="submit">
              <p className="orange-gradient flex h-16 items-center justify-center rounded-lg text-white">
                Create Account
              </p>
            </button>
          </form>

          <p className="text-center text-[#5A5A5A] mb-8">
            By continuing you indicate that you read and agreed to the Terms of
            Use
          </p>
        </div>
      </section>
    </>
  );
};

export default signUp;
