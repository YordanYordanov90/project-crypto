"use client";

import { useState } from "react";
import CoinItem from "@/components/CoinItem";
import SearchCoin from "@/components/SearchCoin";

export default function CoinList({ coins }: { coins: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(coins);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query)
    );
    setFilteredCoins(filtered);
    console.log(filtered);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 justify-between my-5 max-w-[1140px] mx-auto items-center ">
        <h1 className="text-2xl text-center hidden md:block font-bold">
          Search Crypto
        </h1>
        <SearchCoin
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      </div>

      {/* Coin table */}
      <table className="min-w-full divide-y mt-10 divide-gray-200">
        <thead>
          <tr className="text-left">
            <th></th>
            <th>Rank</th>
            <th>Name</th>
            <th></th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </>
  );
}
