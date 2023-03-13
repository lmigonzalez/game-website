import React, { useState, useEffect } from 'react';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

interface CountdownProps {
  duration: number;
}

const CountDown: React.FC<CountdownProps> = ({ duration }) => {
  const [countdown, setCountdown] = useState<number>(duration);
  const [previousCountdown, setPreviousCountdown] = useState<number>(
    duration - 1
  );
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousCountdown(countdown);
      setCountdown(countdown - 1);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const hours: number = Math.floor(countdown / 3600);
  const minutes: number = Math.floor((countdown % 3600) / 60);
  const seconds: number = countdown % 60;
  return (
    <div className="relative w-48 h-24">
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="text-center">
          <span
            className={`text-4xl font-bold ${
              animate ? 'animate-countdown-new' : ''
            }`}
            data-countdown={hours}
          >
            {hours.toString().padStart(2, '0')}
          </span>
          <span className="text-lg font-medium text-gray-500">Hours</span>
        </div>
        <div className="text-center">
          <span
            className={`text-4xl font-bold ${
              animate ? 'animate-countdown-new' : ''
            }`}
            data-countdown={minutes}
          >
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-lg font-medium text-gray-500">Minutes</span>
        </div>
        <div className="text-center relative">
          <span
            className={`text-4xl font-bold ${
              animate ? 'animate-countdown-new' : ''
            }`}
            data-countdown={seconds}
            style={{ top: animate ? '-100%' : 0 }}
          >
            {seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-lg font-medium text-gray-500 absolute top-0 w-full">
            Seconds
          </span>
          <span
            className={`text-4xl font-bold ${
              animate ? 'animate-countdown-old' : ''
            }`}
            data-countdown={previousCountdown % 60}
            style={{ top: animate ? 0 : '100%' }}
          >
            {previousCountdown % 60}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

{
  /* <div className="py-8 px-10 bg-black w-full flex justify-center">
  <div className="text-transparent bg-clip-text orange-gradient text-8xl">
    00:
  </div>
  <div className="text-transparent bg-clip-text orange-gradient text-8xl">
    00:
  </div>
  <div className="text-transparent bg-clip-text orange-gradient text-8xl">
    00
  </div>
</div>; */
}
