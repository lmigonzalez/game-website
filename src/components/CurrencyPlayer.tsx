import React from "react";
import Image from "next/image";
interface MyProps {
  medal: boolean;
  images: number;
}
const CurrencyPlayer: React.FC<MyProps> = ({ medal, images }) => {
  const imagesArray = repeatImages(images);
  function repeatImages(images: number) {
    const array = [];
    for (let i = 0; i < 3 && i < images; i++) {
      array.push(
        <Image
          src="/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg"
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      );
    }

    return array;
  }

  console.log(imagesArray);
  return (
    <div className="flex items-center">
      {medal ? (
        <Image src="/medal-1.svg" alt="" width={32} height={32} />
      ) : (
        <div className="h-8 w-8"></div>
      )}
      <div className="ml-2 flex -space-x-3">
        {imagesArray.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      {images > 3 && <span className="-ml-6 text-white">+{images - 3}</span>}
    </div>
  );
};

export default CurrencyPlayer;
