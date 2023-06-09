import { Inft } from "@/pages/api/testdb";
import Image from "next/image";
import { FC, useReducer, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const Modal: FC<Inft> = (nft) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div
          className={`${montserrat.className} modal-box bg-white text-black`}
        >
          <div className="flex justify-end">
            <label
              htmlFor="my-modal"
              className="btn-outline btn-circle btn border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className=" flex flex-col items-center justify-center gap-6 text-center text-[16px]">
            <p className="orange-gradient bg-clip-text text-4xl font-black leading-10 text-transparent">
              COLLECT YOUR NFT <br />
              BEFORE END
            </p>
            <div className="flex flex-auto">
              <Image src={"8Qz2gKJ2.svg"} alt={""} width={196} height={196} />
            </div>
            <div className="flex w-2/3 flex-col gap-6">
              <div className="flex flex-row justify-between border-b-2">
                <span className="font-semibold">Remaining:</span>
                <span className=" mb-2">
                  {nft.packsLeft - quantity}/{nft.packsCount}
                </span>
              </div>
              <div className="flex flex-row justify-between border-b-2">
                <span className="font-semibold">Price: </span>
                <span className=" mb-3">
                  {nft.price * quantity}{" "}
                  <span className="font-semibold"> ETH</span>
                </span>
              </div>
              <div className="flex flex-row justify-between border-b-2">
                <span className="mb-2 flex font-semibold">Quantity: </span>
                <a
                  className="hover cursor-pointer font-semibold hover:font-bold"
                  onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : 0)}
                >
                  -
                </a>
                <span>{quantity}</span>
                <a
                  className="hover cursor-pointer font-semibold hover:font-bold"
                  onClick={() =>
                    quantity < nft.packsLeft ? setQuantity(quantity + 1) : 0
                  }
                >
                  +
                </a>
                <span>
                  {nft.price}
                  <span className="font-semibold"> ETH</span>
                </span>
              </div>
            </div>

            {/* <label
              htmlFor="my-modal"
              className="orange-gradient w-30 btn rounded-full border-none text-base normal-case "
              onClick={() => setQuantity(0)}
            >
              Mint Now
            </label> */}

            <button
              onClick={() => setQuantity(0)}
              className="orange-gradient rounded-full py-4 px-14 text-white"
              style={{
                background:
                  "linear-gradient(92.48deg, #d80027 2.08%, #fb9e3c 117.25%)",
              }}
            >
              Mint Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
