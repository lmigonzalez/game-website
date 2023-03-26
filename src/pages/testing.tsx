/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-comment-textnodes */
import { leaderBoard, prizes, testNft } from "../pages/api/testdb";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Medal from "@/components/Medal";
import TopLeaderBoard from "@/components/TopLeaderBoard";
import LeaderBoard from "@/components/LeaderBoard";

export default function asd() {
  return (
    <Layout>
      <LeaderBoard leaders={leaderBoard} prizes={prizes} />
    </Layout>
  );
}
