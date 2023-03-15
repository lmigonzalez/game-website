import React, { useState, useEffect } from "react";
import { Audiowide, Poppins } from "next/font/google";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import { MintButton } from "@/components/MintButton";
import { nft } from "@/pages/api/testdb";
const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

interface CountdownProps {
  duration: number;
}

const CountDown: React.FC<CountdownProps & nft> = ({ duration, ...nft }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [initialValue, setInitialValue] = useState(duration);

  const time = moment({
    hour: Math.floor(initialValue / 10000),
    minute: Math.floor(initialValue / 100) % 100,
    second: initialValue % 100,
  });
  const seconds = time.second();
  const minutes = time.minute();
  const hours = time.hour();

  const [secondLast, setSecondLast] = useState(9);
  const [secondFirst, setSecondFirst] = useState(5);

  const [minutesLast, setMinutesLast] = useState(
    parseInt(minutes.toString()[0])
  );
  const [minutesFirst, setMinutesFirst] = useState(
    parseInt(minutes.toString()[1])
  );

  const [hoursLast, setHoursLast] = useState(parseInt(hours.toString()[0]));
  const [hoursFirst, setHoursFirst] = useState(parseInt(hours.toString()[1]));

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setInitialValue(initialValue - 1);
    //   secondsCountDown();
    //   minutesCountDown();
    //   hoursCountDown();
    // }, 1000);
    // return () => clearInterval(interval);
  }, [initialValue]);

  function secondsCountDown() {
    setSecondLast(secondLast === 0 ? 9 : secondLast - 1);

    if (secondLast === 0) {
      setSecondFirst(secondFirst === 0 ? 5 : secondFirst - 1);
    }
  }

  function minutesCountDown() {
    if (secondFirst === 0 && secondLast === 0) {
      setMinutesLast(minutesLast === 0 ? 9 : minutesLast - 1);
    }
    if (minutesLast === 0 && secondFirst === 0 && secondLast === 0) {
      setMinutesFirst(minutesFirst === 0 ? 5 : minutesFirst - 1);
    }
  }

  function hoursCountDown() {
    if (hoursFirst === 0 && hoursLast === 0) {
      return;
    }
    if (
      minutesFirst === 0 &&
      minutesLast === 0 &&
      secondFirst === 0 &&
      secondLast === 0
    ) {
      setHoursLast(hoursLast === 0 ? 9 : hoursLast - 1);
    }
    if (
      hoursLast === 0 &&
      minutesFirst === 0 &&
      minutesLast === 0 &&
      secondFirst === 0 &&
      secondLast === 0
    ) {
      setHoursFirst(hoursFirst > 0 ? hoursFirst - 1 : 0);
    }
  }

  return (
    <section className={`${audiowide.className}`}>
      <div className=" bg-black py-8 px-10">
        <div className="flex w-full items-center justify-center space-x-24 text-center">
          <div className="">
            <div className="space-x-4">
              <span className="orange-gradient bg-clip-text text-8xl text-transparent">
                {hoursFirst || 0}
              </span>
              <span className="orange-gradient bg-clip-text text-8xl text-transparent">
                {hoursLast}
              </span>
            </div>
            <p className="orange-gradient bg-clip-text  text-transparent">
              HOURS
            </p>
          </div>

          <div className="">
            <div className="space-x-4">
              <span className="orange-gradient bg-clip-text text-8xl text-transparent">
                {minutesFirst}
              </span>
              <span className="orange-gradient bg-clip-text text-8xl text-transparent">
                {minutesLast}
              </span>
            </div>
            <p className="orange-gradient bg-clip-text  text-transparent">
              MINUTES
            </p>
          </div>
          <div className="">
            <div className="space-x-4">
              <span className="orange-gradient relative top-0 bg-clip-text text-8xl text-transparent">
                {secondFirst}
              </span>

              <span className="orange-gradient bg-clip-text text-8xl text-transparent">
                {secondLast}
              </span>
            </div>

            <p className="orange-gradient bg-clip-text  text-transparent">
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
            onClick={() => location.replace("/nft")}
          >
            {" "}
            <p className="text-color">View Drop</p>{" "}
          </button>
          <label
            htmlFor="my-modal"
            className="orange-gradient btn-circle btn h-14 w-48 border-none text-base normal-case"
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
