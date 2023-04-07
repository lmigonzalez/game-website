import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";
import TopLeaderCard from "./TopLeaderCard";
import { ITopLeaderCard } from "@/pages/api/testdb";
import TopLeaderBoard from "./TopLeaderBoard";

const LeaderBoard: FC<{
  leaders: ITopLeaderCard[];
  prizes: { pos: number; prize: string }[];
}> = ({ leaders, prizes }) => {
  return (
    <div className=" w-[1400px] max-w-full px-4 m-auto text-black">
      <strong className="text-color text-[32px] md:text-[58px]">
        Leaderboard
      </strong>
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="mt-[45px] flex flex-col gap-8 px-10 pb-[100px] md:p-20">
          <div className="flex flex-col gap-10 text-center">
            <strong className="text-[28.95px] md:text-5xl ">
              Freefire Leaderboard
            </strong>
            <TopLeaderBoard
              leaders={leaders.filter(
                (card) => card.pos === 1 || card.pos === 2 || card.pos === 3
              )}
            />

            <div className="overflow-x-auto bg-transparent">
              <table className="table w-full border-collapse bg-transparent">
                {/* head */}
                <tbody>
                  {/* row 1 */}

                  {leaders
                    .filter(
                      (card) =>
                        card.pos !== 1 && card.pos !== 2 && card.pos !== 3
                    )
                    .sort((a, b) =>
                      a.pos == b.pos ? 0 : a.pos < b.pos ? -1 : 1
                    )
                    .map((item) => (
                      <tr
                        key={`leaderB-${item.pos}`}
                        className="border-b-2 border-[#5F59598A]  bg-transparent text-xl first:border-t-2"
                      >
                        <th className=" border-b-2 border-[#5F59598A] bg-transparent pr-0 pl-7 font-semibold">
                          {item.pos}
                        </th>
                        <td className="border-b-2 border-[#5F59598A] bg-transparent">
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <Image
                                  src={item.img.src}
                                  alt={"noImg"}
                                  width={47}
                                  height={47}
                                  className="rounded-3xl"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.name}</div>
                              <div className="text-sm opacity-50">
                                {item.userName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-b-2 border-[#5F59598A] bg-transparent text-center font-bold">
                          {prizes.find((item2) => item2.pos == item.pos)?.prize}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-8 md:gap-16 md:p-20">
          <strong className="text-left text-base md:text-center md:text-5xl ">
            Prize
          </strong>
          <div className="flex flex-wrap gap-[25.95px] text-[18.86px] normal-case md:gap-[75px] md:text-[54px]">
            <div className="mb-0 flex  flex-row items-center justify-around gap-4 md:gap-12">
              <strong className=" font-extrabold">1.</strong>
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shrink-0 md:h-[107px] md:w-[107px]"
              >
                <path
                  d="M96.9688 26.75H86.9375V23.4062C86.9375 21.6326 86.2329 19.9316 84.9788 18.6775C83.7246 17.4233 82.0236 16.7188 80.25 16.7188H26.75C24.9764 16.7188 23.2754 17.4233 22.0212 18.6775C20.7671 19.9316 20.0625 21.6326 20.0625 23.4062V26.75H10.0312C8.25761 26.75 6.55662 27.4546 5.30247 28.7087C4.04832 29.9629 3.34375 31.6639 3.34375 33.4375V40.125C3.34375 44.5591 5.10518 48.8116 8.24056 51.9469C9.79304 53.4994 11.6361 54.7309 13.6645 55.5711C15.6929 56.4113 17.867 56.8438 20.0625 56.8438H21.5881C23.5578 63.0858 27.3133 68.6138 32.3905 72.7447C37.4677 76.8755 43.6441 79.4281 50.1562 80.087V90.2812H40.125C39.2382 90.2812 38.3877 90.6335 37.7606 91.2606C37.1335 91.8877 36.7812 92.7382 36.7812 93.625C36.7812 94.5118 37.1335 95.3623 37.7606 95.9894C38.3877 96.6165 39.2382 96.9688 40.125 96.9688H66.875C67.7618 96.9688 68.6123 96.6165 69.2394 95.9894C69.8665 95.3623 70.2188 94.5118 70.2188 93.625C70.2188 92.7382 69.8665 91.8877 69.2394 91.2606C68.6123 90.6335 67.7618 90.2812 66.875 90.2812H56.8438V80.0745C70.1937 78.7244 81.2698 69.3577 85.2991 56.8438H86.9375C91.3716 56.8438 95.6241 55.0823 98.7594 51.9469C101.895 48.8116 103.656 44.5591 103.656 40.125V33.4375C103.656 31.6639 102.952 29.9629 101.698 28.7087C100.443 27.4546 98.7424 26.75 96.9688 26.75ZM20.0625 50.1562C17.402 50.1562 14.8506 49.0994 12.9693 47.2182C11.0881 45.3369 10.0312 42.7855 10.0312 40.125V33.4375H20.0625V46.8125C20.0625 47.9271 20.1168 49.0417 20.2255 50.1562H20.0625ZM80.25 46.4363C80.25 61.2826 68.3421 73.4538 53.7048 73.5625H53.5C46.4055 73.5625 39.6015 70.7442 34.5849 65.7276C29.5683 60.711 26.75 53.907 26.75 46.8125V23.4062H80.25V46.4363ZM96.9688 40.125C96.9688 42.7855 95.9119 45.3369 94.0307 47.2182C92.1494 49.0994 89.598 50.1562 86.9375 50.1562H86.7285C86.8657 48.921 86.9355 47.6792 86.9375 46.4363V33.4375H96.9688V40.125Z"
                  fill="url(#paint0_linear_259_1655)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_259_1655"
                    x1="3.34375"
                    y1="56.8438"
                    x2="123.535"
                    y2="63.3626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D80027" />
                    <stop offset="1" stop-color="#FB9E3C" />
                  </linearGradient>
                </defs>
              </svg>
              <strong className="text-color text-[18.86px] md:text-[54px]">
                {prizes.find((item) => item.pos === 1)?.prize}
              </strong>
            </div>
            <div className="mb-0 flex flex-row items-center justify-around gap-4 md:gap-12">
              <strong className=" font-extrabold">2.</strong>
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shrink-0 md:h-[107px] md:w-[107px]"
              >
                <path
                  d="M96.9688 26.75H86.9375V23.4062C86.9375 21.6326 86.2329 19.9316 84.9788 18.6775C83.7246 17.4233 82.0236 16.7188 80.25 16.7188H26.75C24.9764 16.7188 23.2754 17.4233 22.0212 18.6775C20.7671 19.9316 20.0625 21.6326 20.0625 23.4062V26.75H10.0312C8.25761 26.75 6.55662 27.4546 5.30247 28.7087C4.04832 29.9629 3.34375 31.6639 3.34375 33.4375V40.125C3.34375 44.5591 5.10518 48.8116 8.24056 51.9469C9.79304 53.4994 11.6361 54.7309 13.6645 55.5711C15.6929 56.4113 17.867 56.8438 20.0625 56.8438H21.5881C23.5578 63.0858 27.3133 68.6138 32.3905 72.7447C37.4677 76.8755 43.6441 79.4281 50.1562 80.087V90.2812H40.125C39.2382 90.2812 38.3877 90.6335 37.7606 91.2606C37.1335 91.8877 36.7812 92.7382 36.7812 93.625C36.7812 94.5118 37.1335 95.3623 37.7606 95.9894C38.3877 96.6165 39.2382 96.9688 40.125 96.9688H66.875C67.7618 96.9688 68.6123 96.6165 69.2394 95.9894C69.8665 95.3623 70.2188 94.5118 70.2188 93.625C70.2188 92.7382 69.8665 91.8877 69.2394 91.2606C68.6123 90.6335 67.7618 90.2812 66.875 90.2812H56.8438V80.0745C70.1937 78.7244 81.2698 69.3577 85.2991 56.8438H86.9375C91.3716 56.8438 95.6241 55.0823 98.7594 51.9469C101.895 48.8116 103.656 44.5591 103.656 40.125V33.4375C103.656 31.6639 102.952 29.9629 101.698 28.7087C100.443 27.4546 98.7424 26.75 96.9688 26.75ZM20.0625 50.1562C17.402 50.1562 14.8506 49.0994 12.9693 47.2182C11.0881 45.3369 10.0312 42.7855 10.0312 40.125V33.4375H20.0625V46.8125C20.0625 47.9271 20.1168 49.0417 20.2255 50.1562H20.0625ZM80.25 46.4363C80.25 61.2826 68.3421 73.4538 53.7048 73.5625H53.5C46.4055 73.5625 39.6015 70.7442 34.5849 65.7276C29.5683 60.711 26.75 53.907 26.75 46.8125V23.4062H80.25V46.4363ZM96.9688 40.125C96.9688 42.7855 95.9119 45.3369 94.0307 47.2182C92.1494 49.0994 89.598 50.1562 86.9375 50.1562H86.7285C86.8657 48.921 86.9355 47.6792 86.9375 46.4363V33.4375H96.9688V40.125Z"
                  fill="url(#paint0_linear_259_1655)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_259_1655"
                    x1="3.34375"
                    y1="56.8438"
                    x2="123.535"
                    y2="63.3626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D80027" />
                    <stop offset="1" stop-color="#FB9E3C" />
                  </linearGradient>
                </defs>
              </svg>
              <strong className="text-color text-[18.86px] md:text-[54px]">
                {prizes.find((item) => item.pos === 2)?.prize}
              </strong>
            </div>
            <div className="mb-0 flex flex-row items-center justify-around gap-4 md:gap-12">
              <strong className=" font-extrabold">3.</strong>
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shrink-0 md:h-[107px] md:w-[107px]"
              >
                <path
                  d="M96.9688 26.75H86.9375V23.4062C86.9375 21.6326 86.2329 19.9316 84.9788 18.6775C83.7246 17.4233 82.0236 16.7188 80.25 16.7188H26.75C24.9764 16.7188 23.2754 17.4233 22.0212 18.6775C20.7671 19.9316 20.0625 21.6326 20.0625 23.4062V26.75H10.0312C8.25761 26.75 6.55662 27.4546 5.30247 28.7087C4.04832 29.9629 3.34375 31.6639 3.34375 33.4375V40.125C3.34375 44.5591 5.10518 48.8116 8.24056 51.9469C9.79304 53.4994 11.6361 54.7309 13.6645 55.5711C15.6929 56.4113 17.867 56.8438 20.0625 56.8438H21.5881C23.5578 63.0858 27.3133 68.6138 32.3905 72.7447C37.4677 76.8755 43.6441 79.4281 50.1562 80.087V90.2812H40.125C39.2382 90.2812 38.3877 90.6335 37.7606 91.2606C37.1335 91.8877 36.7812 92.7382 36.7812 93.625C36.7812 94.5118 37.1335 95.3623 37.7606 95.9894C38.3877 96.6165 39.2382 96.9688 40.125 96.9688H66.875C67.7618 96.9688 68.6123 96.6165 69.2394 95.9894C69.8665 95.3623 70.2188 94.5118 70.2188 93.625C70.2188 92.7382 69.8665 91.8877 69.2394 91.2606C68.6123 90.6335 67.7618 90.2812 66.875 90.2812H56.8438V80.0745C70.1937 78.7244 81.2698 69.3577 85.2991 56.8438H86.9375C91.3716 56.8438 95.6241 55.0823 98.7594 51.9469C101.895 48.8116 103.656 44.5591 103.656 40.125V33.4375C103.656 31.6639 102.952 29.9629 101.698 28.7087C100.443 27.4546 98.7424 26.75 96.9688 26.75ZM20.0625 50.1562C17.402 50.1562 14.8506 49.0994 12.9693 47.2182C11.0881 45.3369 10.0312 42.7855 10.0312 40.125V33.4375H20.0625V46.8125C20.0625 47.9271 20.1168 49.0417 20.2255 50.1562H20.0625ZM80.25 46.4363C80.25 61.2826 68.3421 73.4538 53.7048 73.5625H53.5C46.4055 73.5625 39.6015 70.7442 34.5849 65.7276C29.5683 60.711 26.75 53.907 26.75 46.8125V23.4062H80.25V46.4363ZM96.9688 40.125C96.9688 42.7855 95.9119 45.3369 94.0307 47.2182C92.1494 49.0994 89.598 50.1562 86.9375 50.1562H86.7285C86.8657 48.921 86.9355 47.6792 86.9375 46.4363V33.4375H96.9688V40.125Z"
                  fill="url(#paint0_linear_259_1655)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_259_1655"
                    x1="3.34375"
                    y1="56.8438"
                    x2="123.535"
                    y2="63.3626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D80027" />
                    <stop offset="1" stop-color="#FB9E3C" />
                  </linearGradient>
                </defs>
              </svg>
              <strong className="text-color text-[18.86px] md:text-[54px]">
                {prizes.find((item) => item.pos === 3)?.prize}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaderBoard;
