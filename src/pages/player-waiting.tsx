/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import MatchingCard from "@/components/MatchingCard";
import Head from "next/head";

const PlayersWaiting = () => {
  return (
    <>
      <Head>
        <title>Waiting..</title>
        <meta name="description" content="Waiting for players" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navBarBehavior={1}>
        <div className="container m-auto w-[1440] p-8">
          <div className="flex flex-col gap-20">
            <p className=" text-xs font-semibold md:text-base">
              <strong className="text-color whitespace-nowrap text-3xl md:text-6xl">
                Searching for opponent
              </strong>
              <br />
              <br />
              You're currently waiting for your opponent to join. Please hang
              tight and they'll be with you soon. Thanks for playing!
            </p>
            <div className="grid grid-flow-row"></div>
          </div>
          <div className="mb-[138px] grid grid-flow-col grid-rows-2 gap-14 md:grid-rows-1">
            <MatchingCard
              ocuppied={true}
              img={{
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 251,
                quality: undefined,
              }}
              name={"Bal. $700"}
            />
            <MatchingCard ocuppied={false} />
            <MatchingCard ocuppied={false} />
            <MatchingCard ocuppied={false} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PlayersWaiting;
