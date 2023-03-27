import React, {useState} from 'react';
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
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialValue)
  const [showConnectWallet, setShowConnectWallet] = useState(false)

  function handleDisplayWallet(){
    setShowConnectWallet(!showConnectWallet)
  }

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.name)
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    console.log(formValues)
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Selected NFT details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="flex min-h-screen relative">
        {/* <Tutorial/> */}
        {/* <CryptoPaymentDetails/> */}
        {/* <CryptoPaymentDetails2/> */}
        {/* <CryptoPaymentUpdated/> */}
        {/* <ChooseBundle/> */}
        {/* <ConnectToWallet2/> */}
        {/* <SuccessStat/> */}
        {/* <EnterCardDetails/> */}
        {showConnectWallet && <ConnectToWallet handleDisplayWallet = {handleDisplayWallet}/>}
        <div className="flex items-center justify-start w-1/2 bg-[url('/hot-air-balloons.jpg')] bg-cover bg-center bg-no-repeat">
          <strong className='absolute top-0 left-0  py-16 px-11 text-black'>Logo Here</strong>
          <div className='w-60 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-4 ml-11 text-white'>
            <p className='p-2 rounded-lg mb-3 bg-black w-fit'>Logo</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="relative flex w-1/2 flex-col items-center justify-center text-black px-4">
          <div className='flex items-center justify-end space-x-4  w-full mr-4 absolute top-0 left-0  py-16 px-11'>
            <p>have an account?</p>
            <Link className='text-color' href="/">Sign in!</Link>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <strong className='text-2xl '>Get Started</strong>
            <p className='text-[#7E7E7E]'>Getting started is easy</p>
            
            <div className='flex justify-between items-center space-x-3 mt-11 mb-3'>
              <button className='bg-white h-11 w-32 border-[#D80027] border-[1px] border-solid rounded flex items-center justify-center'> <Image className='mr-2' src={'/google.png'} alt='google icon' width={25} height={25}/> Google</button>


              <button onClick={handleDisplayWallet} className='bg-white h-11 w-32 border-[#DEDEDE] border-[1px] border-solid rounded flex items-center justify-center'> <Image className='mr-2' src={'/fox.png'} alt='google icon' width={25} height={25}/> MetaMask</button>
            </div>
          </div>
          <div className='flex items-center justify-between w-[400px] max-w-full space-x-4 mb-8'>
            <hr className='w-full h-[2px] bg-[#DBDBDB]'/>
            <p className='whitespace-nowrap'>Or continue with</p>
            <hr className='w-full h-[2px] bg-[#DBDBDB]'/>
          </div>
          <form
            className="flex w-[400px] max-w-full flex-col space-y-5 text-[#5A5A5A] text-base mb-12"
            autoComplete="false"
            onSubmit={handleSubmit}
          >
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="text"
              name='fullName'
              value={formValues.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6 "
              type="email"
              name='email'
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email"
              />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="password"
              name='password'
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              />
            <input
              className="h-16 rounded-lg border-[1px] border-solid border-[#D9D9D9] bg-white px-6"
              type="password"
              name='confirmPassword'
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <button type="submit">
              <p className='orange-gradient text-white h-16 rounded-lg flex items-center justify-center'>Create Account</p>
            </button>
          </form>

          <p className='text-[#5A5A5A] text-center'>
            By continuing you indicate that you read and agreed to the Terms of
            Use
          </p>


        </div>
      </section>
    </>
  );
};

export default signUp;
