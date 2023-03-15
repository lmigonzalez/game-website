import React, { useState, useEffect, useRef } from 'react';
import { Audiowide, Poppins } from 'next/font/google';
import { timeUnits } from '@/utils/unitTime';
import moment from 'moment';

const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
});

interface CountdownProps {
  duration: number;
}

const CountDown: React.FC<CountdownProps> = ({ duration }) => {
  const [initialValue, setInitialValue] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialValue((value) => value - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [initialValue]);

  return (
    <section className={`${audiowide.className}`}>
      <div className=" bg-black py-8 px-10">
        <div className="flex w-full items-center justify-center space-x-24 text-center">
          <div className="">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className="text-gradient text-8xl font-bold"
                  style={{
                    ['--value' as string]:
                      initialValue > 3600000 ? timeUnits(initialValue)?.hours : 0,
                  }}
                ></span>
              </span>
            </div>
            <p className="orange-gradient bg-clip-text  text-transparent">
              HOURS
            </p>
          </div>

          <div className="">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className="text-gradient text-8xl font-bold"
                  style={{
                    ['--value' as string]:
                      initialValue > 60000
                        ? timeUnits(initialValue)?.minutes
                        : 0,
                  }}
                ></span>
              </span>
            </div>
            <p className="orange-gradient bg-clip-text  text-transparent">
              MINUTES
            </p>
          </div>
          <div className="">
            <div className="space-x-4">
              <span className="countdown font-mono text-8xl  ">
                <span
                  className="text-gradient text-8xl font-bold"
                  style={{
                    ['--value' as string]:
                      initialValue > 1000
                        ? timeUnits(initialValue)?.seconds
                        : 0,
                  }}
                ></span>
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
          {' '}
          <button
            className=" w-48  rounded-full border-2
            border-[#DB0F29] 
            py-4 text-center"
          >
            {' '}
            <p className="text-color">View Drop</p>{' '}
          </button>
          <button
            className="orange-gradient h-14 w-48 rounded-full bg-transparent text-white"
            style={{
              background:
                'linear-gradient(92.48deg, #d80027 2.08%, #fb9e3c 117.25%)',
            }}
          >
            Mint Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountDown;

{
}
