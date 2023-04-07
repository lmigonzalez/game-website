import React, { useState } from 'react';
import ConnectToWallet from './modals/ConnectToWallet';
import CryptoPaymentDetails from './modals/CryptoPaymentDetails';
// test
import CryptoPaymentSummary from './modals/CryptoPaymentSummary';
import Tutorial from './modals/Tutorial';
import CryptoPaymentDetails2 from './modals/CryptoPaymentDetails2';
import ChooseBundle from './modals/ChooseBundle';
import EnterCardDetails from './modals/EnterCardDetails';
import SuccessStat from './modals/SuccessStat';
import ConnectToWallet2 from './modals/ConnectToWallet2';

interface Props {
  handleDisplayWallet: () => void;
}
const BuyCurrency: React.FC<Props> = ({ handleDisplayWallet }) => {
  const [current, setCurrent] = useState(0);

  function nextWindow() {
    setCurrent((prev) => prev + 1);
  }

  function prevWindow() {
    setCurrent((prev) => prev - 1);
  }

  return (
    <div className='absolute z-50 left-0 top-0  h-screen w-full bg-black bg-opacity-50 flex items-end justify-center md:items-center'>
      {current === 0 && (
        <ConnectToWallet
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
        />
      )}
      {current === 1 && (
        <CryptoPaymentDetails
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
        />
      )}

      {current === 2 && (
        <CryptoPaymentSummary
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
        />
      )}

      {current === 3 && (
        <Tutorial
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
        />
      )}

      {current === 4 && (
        <CryptoPaymentDetails2
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
        />
      )}

      {current === 5 && (
        <ChooseBundle
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
          prevWindow={prevWindow}
        />
      )}

      {current === 6 && (
        <EnterCardDetails
          handleDisplayWallet={handleDisplayWallet}
          nextWindow={nextWindow}
          prevWindow={prevWindow}
        />
      )}

      {current === 7 && (
        <SuccessStat handleDisplayWallet={handleDisplayWallet} />
      )}
    </div>
  );
};

export default BuyCurrency;
