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
    <div className="container m-auto w-[1400px] max-w-full">
      <strong className="text-color  text-[58px]">Leaderboard</strong>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-8 p-20 px-10">
          <div className="flex flex-col gap-10 text-center">
            <strong className="text-5xl">Freefire Leaderboard</strong>
            <TopLeaderBoard
              leaders={leaders.filter(
                (card) => card.pos === 1 || card.pos === 2 || card.pos === 3
              )}
            />

            <div className="overflow-x-auto bg-transparent">
              <table className="table w-full bg-transparent">
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
                        className=" border-y-[1px] border-[#5F59598A] py-3 text-xl"
                      >
                        <th className="border-y-[1px] border-[#5F59598A] bg-transparent py-3 pr-0 pl-7 font-semibold">
                          {item.pos}
                        </th>
                        <td className="flex flex-row bg-transparent  py-3">
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
                            <div className="flex flex-col">
                              <strong>{item.name}</strong>
                              <span className="text-[#B7B3B3]">
                                {item.userName}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="border-y-[1px] border-[#5F59598A] bg-transparent px-0 py-3 font-bold">
                          {prizes.find((item2) => item2.pos == item.pos)?.prize}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 p-20">
          <strong className=" text-center text-5xl ">Prize</strong>
          <div className="flex flex-col gap-[75px] text-[54px] normal-case">
            <div className="mb-0 flex flex-row gap-12">
              <strong className=" font-extrabold">1.</strong>
              <Image
                src="/favicon.ico"
                alt={"no img"}
                width={100.31}
                height={80.25}
              />
              <strong className="text-color text-[54px]">
                {prizes.find((item) => item.pos === 1)?.prize}
              </strong>
            </div>
            <div className="mb-0 flex flex-row gap-12">
              <strong className=" font-extrabold">2.</strong>
              <Image
                src="/favicon.ico"
                alt={"no img"}
                width={100.31}
                height={80.25}
              />
              <strong className="text-color text-[54px]">
                {prizes.find((item) => item.pos === 2)?.prize}
              </strong>
            </div>
            <div className="mb-0 flex flex-row gap-12">
              <strong className=" font-extrabold">3.</strong>
              <Image
                src="/favicon.ico"
                alt={"no img"}
                width={100.31}
                height={80.25}
              />
              <strong className="text-color text-[54px]">
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
