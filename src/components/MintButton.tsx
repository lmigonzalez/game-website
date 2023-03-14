import { nft } from "@/pages/api/testdb";
import { FC } from "react";

export const MintButton: FC<nft> = (nft) => {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="orange-gradient btn rounded-full text-center font-[roboto]"
      >
        Mint Now
      </label>
    </>
  );
};
