// components/SavedCoin.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { db } from '@/firebase';
import { useAuth } from '@/contex/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { removeCoinFromWatchlist } from '@/app/actions/CoinActions';
import Image from 'next/image';

const SavedCoin = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(doc(db, 'users', user.email), (doc) => {
        setCoins(doc.data()?.watchList || []);
      });

      return () => unsubscribe();
    }
  }, [user?.email]);

  const handleRemoveCoin = async (coinId: string) => {
    if (user?.email) {
      await removeCoinFromWatchlist(user.email, coinId);
    }
  };

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don&apos;t have any coins saved. Please save a coin to add it to your watch list.
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin.rank}</td>
                <td>
                  <div className="flex items-center">
                    <Image width={20} height={20} src={coin.image} className="w-8 mr-4" alt={coin.name} />
                    <div>
                      <p className="hidden sm:table-cell">{coin.name}</p>
                      <p className="text-gray-500 text-left text-sm">{coin.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="pl-8">
                  <AiOutlineClose
                    onClick={() => handleRemoveCoin(coin.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
