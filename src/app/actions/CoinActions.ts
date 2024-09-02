// actions/coinActions.ts
import { db } from '@/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export const saveCoinToWatchlist = async (userEmail: string, coin: any) => {
  const userDoc = doc(db, 'users', userEmail);
  await updateDoc(userDoc, {
    watchList: arrayUnion(coin),
  });
};

export const removeCoinFromWatchlist = async (userEmail: string, coinId: string) => {
  const userDoc = doc(db, 'users', userEmail);
  await updateDoc(userDoc, {
    watchList: arrayRemove({ id: coinId }),
  });
};
