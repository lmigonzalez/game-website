import { leaderBoard, prizes, testNft } from "../pages/api/testdb";
import React from "react";
import Layout from "@/components/Layout";
import LeaderBoard from "@/components/LeaderBoard";

export default function LeaderBoardPage() {
  return (
    <Layout navBarBehavior={1}>
      <LeaderBoard leaders={leaderBoard} prizes={prizes} />
    </Layout>
  );
}
