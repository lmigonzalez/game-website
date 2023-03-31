/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Modal } from "@/components/modals/Modal";
import { NftCard } from "@/components/NftCard";
import { testNft } from "../pages/api/testdb";

import React, { useEffect, useState } from "react";

import { JoinUs } from "@/components/JoinUs";
import { timeUnits } from "@/utils/unitTime";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import MatchingCard from "@/components/MatchingCard";

export default function asd() {
  return (
    <Layout navBarBehavior={23}>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Social Security Number
          </span>
          <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          <p className="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100">
            We need this to steal your identity.
          </p>
        </label>
      </form>
    </Layout>
  );
}
