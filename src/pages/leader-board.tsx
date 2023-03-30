import { leaderBoard, prizes, testNft } from "../pages/api/testdb";
import React from "react";
import Layout from "@/components/layout/Layout";
import LeaderBoard from "@/components/LeaderBoard";
import Head from "next/head";

export default function LeaderBoardPage() {
  return (
    <>
      <Head>
        <title>Leader Board </title>
        <meta name="description" content="Leader Board" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout navBarBehavior={1}>
        <LeaderBoard leaders={leaderBoard} prizes={prizes} />
      </Layout>
    </>
  );
}
