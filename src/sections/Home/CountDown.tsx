import React, { useState, useEffect } from "react";
import { Audiowide, Poppins, JetBrains_Mono } from "next/font/google";
import { nft } from "@/pages/api/testdb";
import { timeUnits } from "@/utils/unitTime";
const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

interface CountdownProps {
  duration: number;
}

const CountDown: React.FC<CountdownProps & nft> = ({ duration, ...nft }) => {
  const [initialValue, setInitialValue] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialValue((value) => value - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [initialValue]);

  return (
    <section className={`${audiowide.className}`}>
      <div className=" bg-black py-14 px-10">
        <div
          className={`flex w-full items-center justify-center space-x-24 text-center`}
        >
          <div className="text-start">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className={`${audiowide.className} text-gradient text-8xl font-bold`}
                  style={{
                    ["--value" as string]:
                      initialValue > 3600000
                        ? timeUnits(initialValue)?.hours
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient mt-6  ml-8 bg-clip-text font-normal text-transparent`}
            >
              HOURS
            </p>
          </div>

          <div className="text-start">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className={`${audiowide.className} text-gradient text-8xl font-bold`}
                  style={{
                    ["--value" as string]:
                      initialValue > 60000
                        ? timeUnits(initialValue)?.minutes
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p
              className={`${jetBrains.className} orange-gradient mt-6  ml-8 bg-clip-text font-normal text-transparent`}
            >
              MINUTES
            </p>
          </div>
          <div className="">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className={`${audiowide.className} text-gradient text-8xl font-bold`}
                  style={{
                    ["--value" as string]:
                      initialValue > 1000
                        ? timeUnits(initialValue)?.seconds
                        : 0,
                  }}
                ></span>
              </span>
            </div>

            <p
              className={`${jetBrains.className} orange-gradient mt-6  ml-8 bg-clip-text font-normal text-transparent`}
            >
              SECONDS
            </p>
          </div>
        </div>
        <div
          className={`${poppins.className} mt-20 flex items-center justify-center space-x-5 `}
        >
          {" "}
          <button
            className=" w-48  rounded-full border-2
            border-[#DB0F29] 
            py-4 text-center"
            onClick={() => location.replace("/dropv")}
          >
            {" "}
            <p className="text-color">View Drop</p>{" "}
          </button>
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-48 border-none text-base normal-case text-white"
          >
            Mint Now
          </label>
        </div>
      </div>
    </section>
  );
};

export default CountDown;

{
}
