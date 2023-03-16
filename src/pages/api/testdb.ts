export type nft = INftDetail & INftCard;

export const testNft: nft[]  = [{
  id: "1234",
  name: "Alberto",
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
},{
  id: "4322134",
  name: "Fernando",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 7,
  price: 213,
  packsLeft: 0,
  live: true,
  timeRemain: 12343432,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 0
},{
  id: "43235",
  name: "Calixto",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 0,
  live: true,
  timeRemain: 234254534,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 4
},{
  id: "1234",
  name: "Alberto",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 1,
  live: true,
  timeRemain: 6000000,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 2
},{
  id: "1234",
  name: "Alberto",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 1,
  live: true,
  timeRemain: 6000000,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 5
},{
  id: "1234",
  name: "Alberto",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 1,
  live: true,
  timeRemain: 6000000,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 6
},{
  id: "1234",
  name: "Alberto",
  img: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
  packsCount: 100,
  maxCount: 5,
  price: 200,
  packsLeft: 1,
  live: true,
  timeRemain: 6000000,
  whitelist: "Soldout",
  presale: "Soldout",
  collectiblesCount: 6
}];



export interface INftCard {
  id: string;
  name: string;
  img: string;
  packsCount: number;
  collectiblesCount: number;
  price: number;
  packsLeft: number;
}

export interface INftDetail {
  id: string;
  name: string;
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