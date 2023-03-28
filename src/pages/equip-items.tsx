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
  const [whereEver, setWhereEver] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (whereEver) {
      setActive(dropDown);
      setDropDown(false);
    }
    setWhereEver(false);
  }, [whereEver]);

  return (
    <div className="grid grid-cols-1" onClick={() => setWhereEver(true)}>
      <div className="flex flex-col gap-10">
        <strong className="text-color text-[32px] lg:text-[58px]">
          Inventory
        </strong>
        <div className="grid w-fit grid-flow-row grid-cols-2 gap-8">
          {inventory?.map((item, idx) => (
            <ItemCard
              key={`inventory-item-${idx}`}
              img={item.img}
              equipped={false}
            />
          ))}
        </div>
      </div>
      <div className=" hidden items-center gap-4 lg:flex lg:flex-col">
        <strong className="text-color text-[58px]">Preview</strong>
        <Image
          src={preview?.src}
          alt={"no img"}
          width={338}
          height={337}
          className="w-fill mt-6 rounded-2xl"
        />

        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="orange-gradient btn m-1 flex h-12 w-[338px] flex-row items-center justify-between rounded-xl border-none px-5 text-[#FCDDEC]"
          >
            <span id="dropDownBox">Select Game</span>
            <Image
              src={"/down-svgrepo-com (2).svg"}
              alt={"down"}
              width={20}
              height={20}
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-[338px] bg-base-100 p-2 shadow"
          >
            {games.map((item) => (
              <li
                key={`game-${item.name}`}
                onClick={() => {
                  let a: HTMLLabelElement = document.getElementById(
                    "dropDownBox"
                  ) as HTMLLabelElement;
                  a.textContent = item.name;
                }}
              >
                {" "}
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="dropdown-bottom dropdown w-[338px]"
          onClick={() => setDropDown(true)}
        >
          <button tabIndex={0} className="h-12 w-full">
            <div
              className={`orange-gradient flex h-full w-full items-center justify-between ${
                active ? "rounded-t-xl" : "rounded-xl"
              } px-5 text-justify text-[#FCDDEC]`}
            >
              <span>Select Avatar </span>
              {
                <Image
                  src={
                    !active
                      ? "/down-svgrepo-com (2).svg"
                      : "/down-svgrepo-com (3).svg"
                  }
                  alt={"down"}
                  width={20}
                  height={20}
                />
              }
            </div>
          </button>
          <div
            tabIndex={0}
            className="hide-scroll-bar dropdown-content flex max-w-[338px] flex-row overflow-hidden  overflow-x-scroll rounded-b-xl"
          >
            {avatars?.map((item, idx) => (
              <Image
                key={`avatar-${idx}`}
                src={item.src}
                alt={"no img"}
                width={59}
                height={59}
                onClick={() => {}}
              />
            ))}
          </div>{" "}
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-6 py-16 lg:mr-[140px]">
        <strong className="text-color text-[32px] lg:text-[58px]">
          Equipped Items
        </strong>
        <div className="grid grid-cols-2  gap-10 lg:grid-cols-3 lg:gap-[19.08px]">
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
