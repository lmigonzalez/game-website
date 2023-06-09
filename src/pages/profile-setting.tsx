import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
const profileSetting = () => {
  return (
    <>
      <Head>
        <title>Profile Settings</title>
        <meta name="description" content="My Profile Settings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navBarBehavior={1}>
        <section className="m-auto flex min-h-screen w-[1200px] max-w-full flex-col gap-8 px-4 py-24 md:flex-row">
          <div className="w-1/2 max-w-[250px] text-black md:w-1/4">
            <div className="relative mb-4">
              <Image
                className="relative z-10 rounded-2xl"
                src="/profile-big-img.png"
                alt=""
                width={275}
                height={275}
              />
              <div className="absolute -bottom-2 -right-2 z-0 h-full w-full rounded-2xl border-[1px] border-[#DB0F29]"></div>
            </div>
            <strong className="text-3xl">Jeremy Rose</strong>
          </div>
          <div className=" text-black md:w-3/4">
            <form className="flex flex-col gap-4 rounded-lg border-[1px] border-[#DB0F29] p-4">
              <strong className="text-xl">Profile Basics</strong>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="h-12 rounded border-[1px] border-[#ADB3C4] bg-transparent"
                  />
                </div>

                <div className="flex flex-col md:w-1/2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="h-12 rounded border-[1px] border-[#ADB3C4] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                  <label>Email</label>
                  <input
                    type="text"
                    className="h-12 rounded border-[1px] border-[#ADB3C4] bg-transparent"
                  />
                </div>

                <div className="flex flex-col md:w-1/2">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="h-12 rounded border-[1px] border-[#ADB3C4] bg-transparent"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p>Profile Picture</p>

                <div className="flex items-end space-x-4 md:items-center">
                  <div className="relative">
                    <Image
                      className="rounded-lg"
                      src="/profile-pic.svg"
                      alt=""
                      width={80}
                      height={80}
                    />
                    <div className="absolute top-1 right-1 rounded bg-[#FF0100] p-[2px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>

                  <button type="submit">
                    <p className="orange-gradient flex h-12 w-36 items-center justify-center rounded text-white">
                      Change Image
                    </p>
                  </button>
                </div>
                <p>Image size 300*300</p>
              </div>
            </form>

            <div className="mt-8 rounded-lg border-[1px] border-[#DB0F29] p-4">
              <strong>Wallet Setting</strong>
              <div>
                <div className="flex flex-col items-center gap-4  rounded-md py-6 md:flex-row">
                  <div className="flex h-[60px] w-full  items-center justify-between gap-4 rounded border-[2px] border-[#ADB3C4]  p-2 md:w-[500px]">
                    <div className="flex space-x-4 ">
                      <strong>Metamask</strong>
                      <div className=" hidden  space-x-3 md:flex">
                        <p>Networks</p>
                        <Image
                          src={"/help-info-svgrepo-com.svg"}
                          alt={""}
                          width={12.97}
                          height={12.97}
                        />
                      </div>
                    </div>

                    <Image
                      className=""
                      src={"/fox.png"}
                      alt="google icon"
                      width={33}
                      height={30}
                    />
                  </div>

                  <div className="flex w-full flex-row items-center justify-between text-[#9D9D9D]">
                    <button className=" md:hidden">
                      <p className="orange-gradient flex h-10 w-48 items-center justify-center rounded text-sm text-white">
                        + Add Another Wallet
                      </p>
                    </button>
                    <div className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="hidden w-full md:block">
                  <button className="">
                    <p className="orange-gradient flex h-10 w-48 items-center justify-center rounded text-sm text-white">
                      + Add Another Wallet
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden justify-end space-x-3 border-t-[2px] border-solid border-[#CDD6D7] py-7 px-8 md:flex">
              <button
                className=" flex h-12 w-32 items-center
				justify-center rounded border-2 border-[#DB0F29] py-4"
              >
                {" "}
                <p className="text-color">Cancel</p>{" "}
              </button>

              <button type="submit">
                <p className="orange-gradient flex h-12 w-32 items-center justify-center rounded text-white">
                  Save
                </p>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default profileSetting;
