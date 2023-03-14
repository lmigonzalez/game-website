import { nft } from "@/pages/api/testdb";
import { FC } from "react";

export const Modal: FC<nft> = (nft) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col">
          {nft.name}
          <label htmlFor="my-modal" className="btn">
            Yay!
          </label>
        </div>
      </div>
    </>
  );
};
