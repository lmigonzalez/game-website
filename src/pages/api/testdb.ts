import { ImageLoaderProps } from "next/image";

export type Inft = INftDetail & INftCard;

export const defaultNFT:Inft = {
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
}

export const testNft: Inft[]  = [{
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

export interface ITopLeaderCard {
  pos: number;
  name: string;
  userName: string;
  img: ImageLoaderProps;
}

export const leaderBoard:ITopLeaderCard[] = [{
        pos: 1,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 2,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 3,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 4,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 5,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 6,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 7,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 8,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 9,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 10,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},{
        pos: 11,
        name:"fulano",
        userName:"@username",
        img:{
        src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
        width: 100,
        quality: undefined,
      }
},
]

export const prizes: { pos: number, prize: string }[] = [{ pos: 1, prize: "$100k" },
  { pos: 2, prize: "$50k" },
  { pos: 3, prize: "$10k" },
  { pos: 4, prize: "$100" },
  { pos: 5, prize: "$100" },
  { pos: 6, prize: "$100" },
  { pos: 7, prize: "$100" },
  { pos: 8, prize: "$100" },
  { pos: 9, prize: "$100" },
  { pos: 10, prize: "$100" },
  { pos: 11, prize: "$100" },
  { pos: 12, prize: "$100" },
  { pos: 13, prize: "$100" },
  { pos: 14, prize: "$100" },
  { pos: 15, prize: "$100" },
]

