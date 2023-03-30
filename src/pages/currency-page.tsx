import Layout from '@/components/layout/Layout';
import React, { useState } from 'react';

const CurrencyPage = () => {
  const [selectedRow, setSelectedRow] = useState(0);

  const table = [
    {
      id: 1,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'win',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 2,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'Lose',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 3,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'win',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 4,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'win',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 5,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'Lose',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 6,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'win',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
    {
      id: 7,
      Player: 'Sample',
      Amount: '¥ 500k',
      Game: 'Call of Duty',
      Status: 'Lose',
      Wallet: '0x2C396bcB8...Bb85',
      PurchaseDate: '22/03/2023  11:00AM',
      ReceivedDate: '22/03/2023  11:00AM',
    },
  ];

  function handleSelectedRow(id: number) {
    if (id === selectedRow) {
      setSelectedRow(0);
      return;
    }
    setSelectedRow(id);

    console.log(id);
  }

  return (
    <Layout navBarBehavior={1}>
      <section className="m-auto w-[1400px] max-w-full  px-4 py-24 text-black">
        <div className="rounded-lg border-[2px] border-[#D80027] py-8 px-4">
          <div className=" flex items-center justify-between">
            <h1 className="orange-gradient mb-4 bg-clip-text text-3xl  font-bold   text-transparent ">
              Purchase Currency History
            </h1>
            <div className="flex  h-8 items-center justify-center space-x-2">
              <input
                type="text"
                placeholder="Search"
                className="h-full w-1/2 rounded border-[2px]  border-black bg-transparent px-2 text-black"
              />
              <select
                id="options"
                className="h-full w-1/2 rounded border-[2px]  border-black bg-transparent px-2 text-black"
              >
                <option value="" selected>
                  Filters
                </option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
              </select>
            </div>
          </div>

          <table className="mt-7 w-full  border-collapse text-center text-[#7F8A94]">
            <thead>
              <tr className="h-8 border-[1px] border-b-[#C0C0C0]">
                <th>Player</th>
                <th>Amount</th>
                <th>Game</th>
                <th>Status</th>
                <th>Wallet</th>
                <th>Purchase Date and Time</th>
                <th>Received Date and Time</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item) => {
                return (
                  <tr
                    onClick={() => handleSelectedRow(item.id)}
                    key={item.id}
                    className={`h-16 border-[1px] border-b-[#C0C0C0] ${
                      selectedRow === item.id
                        ? 'bg-[#0ECF2D] bg-opacity-50 text-black'
                        : 'bg-transparent'
                    }`}
                  >
                    <td>{item.Player}</td>
                    <td>{item.Amount}</td>
                    <td>{item.Game}</td>
                    <td className={`${item.Status === 'Lose' ? 'orange-gradient bg-clip-text text-transparent': ''}`}>{item.Status}</td>
                    <td>{item.Wallet}</td>
                    <td>{item.PurchaseDate}</td>
                    <td>{item.ReceivedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-8 text-end">
            <button>
              <p className="orange-gradient bg-clip-text font-bold text-transparent">
                View More...
              </p>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrencyPage;
