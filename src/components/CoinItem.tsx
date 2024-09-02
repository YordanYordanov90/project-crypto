import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Link from "next/link";

const CoinItem = ({ coin }: any) => {
  const [savedCoin, setSavedCoin] = useState(false);

  const saveCoin = async () => {
    setSavedCoin(!savedCoin);
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoin} className="w-[40px]">
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="flex h-8 items-center">
          <Link href={`/coinpage/${coin.id}`}>
            <Image
              width={20}
              height={20}
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
          </Link>
          {/* Wrap coin name in Link */}
          <Link href={`/coinpage/${coin.id}`}>
            <p className="hidden sm:table-cell cursor-pointer">{coin.name}</p>
          </Link>
        </div>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;