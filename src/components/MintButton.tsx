import { nft } from "@/pages/api/testdb";
import { FC } from "react";

export const MintButton: FC<nft> = (nft) => {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="orange-gradient btn h-full w-full rounded-full border-none text-xl normal-case"
      >
        Mint Now
      </label>
    </>
  );
};
