/* eslint-disable react-hooks/rules-of-hooks */
import { testNft } from './api/testdb';
import NftCard from '@/components/NftCard';
import classNames from 'classnames';
import { useState } from 'react';
import Info from '@/components/info';
import Layout from '@/components/Layout';
const cn = classNames;

export default function dropv() {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  return (
    <Layout>
      <main className="bg-white">
        <div className="tabs flex justify-center gap-4 ">
          <a
            className={cn('tab-bordered tab w-12 text-2xl text-[roboto]', {
              ' text-color border-gradient-orange  tab-active': showInfo,
            })}
            onClick={() => setShowInfo(true)}
          >
            Info
          </a>
          <a
            className={cn('tab-bordered tab w-14 text-2xl text-[roboto]', {
              'text-color border-gradient-orange tab-active': !showInfo,
            })}
            onClick={() => setShowInfo(false)}
          >
            Shop
          </a>
        </div>

        <div
          className={cn(
            'm-10 grid grid-flow-col grid-rows-2 gap-10 whitespace-nowrap',
            { 'hidden ': showInfo }
          )}
        >
          {testNft.map((item, i) => (
            <NftCard {...item} key={i} />
          ))}
        </div>
        <div className={cn({ 'hidden ': !showInfo })}>
          <Info />
        </div>
      </main>
    </Layout>
  );
}
