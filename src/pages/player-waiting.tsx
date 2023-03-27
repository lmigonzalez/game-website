import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import MatchingCard from "@/components/MatchingCard";

export default function asd() {
  return (
    <Layout>
      <div className="container m-auto w-[1440] p-8">
        <div className="flex flex-col gap-8">
          <p className=" font-semibold">
            <strong className="text-color text-6xl">
              Searching for opponent
            </strong>
            <br />
            <br />
            You're currently waiting for your opponent to join. Please hang
            tight and they'll be with you soon. Thanks for playing!
          </p>
          <div className="grid grid-flow-row"></div>
        </div>
        <div className="grid grid-flow-col grid-rows-1 gap-14">
          <MatchingCard ocuppied={true} />
          <MatchingCard ocuppied={false} />
          <MatchingCard ocuppied={false} />
          <MatchingCard ocuppied={false} />
        </div>
      </div>
    </Layout>
  );
}
