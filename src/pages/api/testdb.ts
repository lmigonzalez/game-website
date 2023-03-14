


export type nft = INftDetail & INftCard;

export const testNft: nft  = {
  id: "1234",
  numb: "Abcdef",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 1,
  live: true,
  timeRemain: 6000000,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 1
};

export interface INftCard {
  id: string;
  numb: string;
  img: string;
  packsCount: number;
  collectiblesCount: number;
  price: number;
  packsLeft: number;
}

export interface INftDetail {
  id: string;
  numb: string;
  img: string;
  maxCount: number;
  price: number;
  packsCount: number;
  packsLeft: number;
  live: Boolean;
  timeRemain: number;
  whitelist: number | string;
  presale: number | string;
}