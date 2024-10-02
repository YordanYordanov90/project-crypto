import Image from "next/image";
import { getNFTs } from "../actions/getNFT";
import Link from "next/link";

type NFT = {
  id: string;
  name: string;
  symbol: string;
  asset_platform_id: string;
};

export default async function NFTsPage() {
  let nfts: NFT[];

  try {
    // Fetch the NFTs
    nfts = await getNFTs();
    console.log(nfts);
  } catch (error) {
    return (
      <div className="text-red-500 text-center mt-5">
        Failed to load NFTs{" "}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
          <Link href="/">Try Again</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto border shadow-xl p-6 rounded-2xl mt-24">
      <h1 className="text-2xl text-center my-1 py-1 font-bold">Top NFTs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft: NFT) => (
          <div
            key={nft.id}
            className=" flex flex-col items-center p-4 border rounded-lg hover:scale-105 ease-in-out duration-300 "
          >
            <Image
              height={80}
              width={80}
              className="rounded-full mb-4"
              src={`/nft-placeholder.png`} 
              alt={nft.name}
            />
            <div className="text-center">
              <p className="font-bold text-lg">{nft.name}</p>
              <p className="uppercase text-gray-500">{nft.symbol}</p>
              <p className="text-gray-600">{nft.asset_platform_id || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
