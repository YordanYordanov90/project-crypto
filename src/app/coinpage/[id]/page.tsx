import { getCoinDetails } from "@/app/actions/coinDetails";
import Image from "next/image";

export default async function CoinDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  let coinDetails;

  try {
    coinDetails = await getCoinDetails(id);
  } catch (error) {
    return <div className="text-center mt-24">Failed to load coin details</div>;
  }

  if (!coinDetails) {
    return <div className="text-center mt-24">Coin details not available</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-8 sm:mt-12">
      {/* Coin Header */}
      <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
        <div className="flex items-center text-black mb-4 sm:mb-0">
          <Image
            src={coinDetails.image?.large || "/placeholder-image.png"}
            alt={coinDetails.name}
            width={80}
            height={80}
            className="mr-4 sm:mr-6"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{coinDetails.name}</h1>
            <p className="text-gray-500 text-lg uppercase">{coinDetails.symbol}</p>
          </div>
        </div>
        <div className="text-center sm:text-right text-black">
          <p className="text-xl sm:text-2xl font-semibold">
            $
            {coinDetails.market_data?.current_price?.usd?.toLocaleString() || "N/A"}
          </p>
          <p className="text-sm">Current Price</p>
        </div>
      </div>

      {/* Coin Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="bg-white text-black shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Market Cap</h2>
          <p className="text-xl font-bold">
            $
            {coinDetails.market_data?.market_cap?.usd?.toLocaleString() || "N/A"}
          </p>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">24h Change</h2>
          <p
            className={`text-xl font-bold ${
              coinDetails.market_data?.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coinDetails.market_data?.price_change_percentage_24h?.toFixed(2) || "N/A"}%
          </p>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Total Volume</h2>
          <p className="text-xl font-bold">
            $
            {coinDetails.market_data?.total_volume?.usd?.toLocaleString() || "N/A"}
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white text-black shadow-md rounded-lg p-4 sm:p-6 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Additional Information</h2>
        <div className="space-y-2">
          <p><strong>Circulating Supply:</strong> {coinDetails.market_data?.circulating_supply?.toLocaleString() || "N/A"}</p>
          <p><strong>Total Supply:</strong> {coinDetails.market_data?.total_supply?.toLocaleString() || "N/A"}</p>
          <p><strong>Max Supply:</strong> {coinDetails.market_data?.max_supply?.toLocaleString() || "N/A"}</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white text-black shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Description</h2>
        <div
          className="text-black leading-relaxed"
          dangerouslySetInnerHTML={{ __html: coinDetails.description?.en || "N/A" }}
        />
      </div>
    </div>
  );
}
