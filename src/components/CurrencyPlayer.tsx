import React from 'react';
import Image from 'next/image';
interface MyProps {
  medal: boolean;
  images: number;
}
const CurrencyPlayer: React.FC<MyProps> = ({ medal, images }) => {
	const imagesArray = repeatImages(images)
  function repeatImages(images: number) {
    const array = [];
    for (let i = 0; i < images; i++) {
      array.push(
        <Image
          src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
          alt=""
          width={32}
          height={32}
		  className='rounded-full'
        />
      );
    }

	return array
  }

  console.log(imagesArray)
  return (
    <div className='flex items-center'>
      {medal ? <Image src="/medal.svg" alt="" width={32} height={32} /> : <div className='w-8 h-8'></div>}
      <div className='flex ml-2'>
        {imagesArray.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
	  <div></div>
    </div>
  );
};

export default CurrencyPlayer;
