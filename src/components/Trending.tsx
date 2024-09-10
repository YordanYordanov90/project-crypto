import Image from "next/image";
import { getTrendingCoins } from "@/app/actions/trending";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function TrendingPage() {
  let coins;
  let btcToUsdRate;

  try {
    // Fetch trending coins
    coins = await getTrendingCoins();

    // Fetch the BTC to USD conversion rate
    btcToUsdRate = await getBTCtoUSDConversionRate();
  } catch (error) {
    return (
      <div className="text-red-500 text-center mt-5">
        Failed to load trending coins{" "}
        <Button asChild>
          <Link href="/">Try Again</Link>{" "}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto border shadow-xl p-4 rounded-2xl mt-24">
      <h1 className="text-2xl text-center my-1 py-1 font-bold">
        Trending Coins
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coins.map((coin: any) => (
          <div
            key={coin.item.id}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <Image
                  height={50}
                  width={50}
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt={coin.item.name}
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                {/* Update the image to a dollar symbol */}
                <Image
                  height={50}
                  width={50}
                  className="w-4 mr-2"
                  src="/dollar.png" // This is a placeholder URL; replace with a better dollar image if needed
                  alt="USD"
                />
                {/* Convert BTC price to USD */}
                <p>${(coin.item.price_btc * btcToUsdRate).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to get BTC to USD conversion rate
async function getBTCtoUSDConversionRate() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  );
  const data = await response.json();
  return data.bitcoin.usd;
}
