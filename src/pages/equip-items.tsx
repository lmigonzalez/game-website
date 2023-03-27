import ItemCard from "@/components/ItemCard";
import Layout from "@/components/Layout";
import Image, { ImageLoaderProps } from "next/image";
import { FC, useEffect, useState } from "react";

interface Item {
  img: ImageLoaderProps;
}

const EquipItems: FC<{
  inventory: Item[];
  equippedItems: Item[];
  games: { name: string }[];
  avatars: ImageLoaderProps[];
  preview: ImageLoaderProps;
}> = ({ inventory, equippedItems, preview, games, avatars }) => {
  const [dropDown, setDropDown] = useState(false);
  const [whereEver, setWhereEver] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!dropDown) setActive(whereEver && dropDown);
    console.log(`${whereEver + "   " + dropDown + "   " + active}`);
    setDropDown(false);
  }, [whereEver]);

  return (
    <div className="grid grid-cols-2" onClick={() => setWhereEver(true)}>
      <div className="flex flex-col gap-10">
        <strong className="text-color text-[58px]">Inventory</strong>
        <div className="grid grid-flow-row grid-cols-2 gap-4">
          {inventory?.map((item, idx) => (
            <ItemCard
              key={`inventory-item-${idx}`}
              img={item.img}
              equipped={false}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4">
        <strong className="text-color text-[58px]">Preview</strong>
        <Image
          src={preview?.src}
          alt={"no img"}
          width={338}
          height={337}
          className="w-fill mt-6 rounded-2xl"
        />

        <div
          className="dropdown-bottom dropdown w-[338px]"
          onFocus={() => setDropDown(true)}
        >
          <button tabIndex={0} className="h-12 w-full">
            <div className="orange-gradient flex h-full w-full items-center justify-between rounded-xl px-5 text-justify text-[#FCDDEC]">
              <span>select </span>
              {active ? (
                <Image
                  src={"/down-svgrepo-com.svg"}
                  alt={"down"}
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={"/down-svgrepo-com (1).svg"}
                  alt={"down"}
                  width={20}
                  height={20}
                />
              )}
            </div>
          </button>
          <div
            tabIndex={0}
            className="dropd hide-scroll-bar dropdown-content flex max-w-[338px] flex-row overflow-hidden  overflow-x-scroll rounded-b-xl"
          >
            {avatars?.map((item, idx) => (
              <Image
                key={`avatar-${idx}`}
                src={item.src}
                alt={"no img"}
                width={59}
                height={59}
              />
            ))}
          </div>
        </div>
        <div className="dropdown-bottom dropdown w-[338px]">
          <button tabIndex={0} className="h-12 w-full">
            <div className="orange-gradient flex h-full w-full items-center justify-center rounded-xl text-[#FCDDEC]">
              Equiped
            </div>
          </button>
          <div
            tabIndex={0}
            className="dropd hide-scroll-bar dropdown-content flex max-w-[338px] flex-row overflow-hidden  overflow-x-scroll rounded-b-xl"
          >
            {avatars?.map((item, idx) => (
              <Image
                key={`avatar-${idx}`}
                src={item.src}
                alt={"no img"}
                width={59}
                height={59}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" col-span-2 mr-[340px]">
        <strong className="text-color text-[58px]">Equipped Items</strong>
        <div className="grid  grid-cols-3 gap-10">
          {equippedItems?.map((item, idx) => (
            <ItemCard
              key={`equipped-item-${idx}`}
              img={item.img}
              equipped={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <Layout>
      <div className="container m-auto w-[1440] p-8">
        <EquipItems
          inventory={[
            {
              img: {
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 0,
                quality: undefined,
              },
            },
            {
              img: {
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 0,
                quality: undefined,
              },
            },
          ]}
          equippedItems={[
            {
              img: {
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 0,
                quality: undefined,
              },
            },
            {
              img: {
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 0,
                quality: undefined,
              },
            },
            {
              img: {
                src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
                width: 0,
                quality: undefined,
              },
            },
          ]}
          games={[{ name: "fulanito" }, { name: "menganito" }]}
          avatars={[
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
            {
              src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
              width: 0,
              quality: undefined,
            },
          ]}
          preview={{
            src: "/C783SC6k02TS2lt15FiMpEypcfXDFJ2kW4aGeDMy 2.svg",
            width: 0,
            quality: undefined,
          }}
        />
      </div>
    </Layout>
  );
};

export default Test;
