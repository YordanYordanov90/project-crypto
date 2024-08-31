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
    <div className="max-w-[1140px] mx-auto p-6 mt-24">
      {/* Coin Header */}
      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex items-center text-black">
          <Image
            src={coinDetails.image?.large || "/placeholder-image.png"}
            alt={coinDetails.name}
            width={80}
            height={80}
            className="mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold">{coinDetails.name}</h1>
            <p className="text-gray-500 text-xl uppercase">
              {coinDetails.symbol}
            </p>
          </div>
        </div>
        <div className="text-right text-black">
          <p className="text-2xl font-semibold">
            $
            {coinDetails.market_data?.current_price?.usd?.toLocaleString() ||
              "N/A"}
          </p>
          <p className="">Current Price</p>
        </div>
      </div>

      {/* Coin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white text-black shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Market Cap</h2>
          <p className="text-2xl font-bold">
            $
            {coinDetails.market_data?.market_cap?.usd?.toLocaleString() ||
              "N/A"}
          </p>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">24h Change</h2>
          <p
            className={`text-2xl font-bold ${
              coinDetails.market_data?.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coinDetails.market_data?.price_change_percentage_24h?.toFixed(2) ||
              "N/A"}
            %
          </p>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Volume</h2>
          <p className="text-2xl font-bold">
            $
            {coinDetails.market_data?.total_volume?.usd?.toLocaleString() ||
              "N/A"}
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white flex items-center justify-center space-x-8 text-black shadow-md rounded-lg p-6">
        <h2 className="text-xl text-black font-semibold ">
          Additional Information
        </h2>
        <p className="text-black ">
          <strong>Circulating Supply:</strong>{" "}
          {coinDetails.market_data?.circulating_supply?.toLocaleString() ||
            "N/A"}
        </p>
        <p className="text-black ">
          <strong>Total Supply:</strong>{" "}
          {coinDetails.market_data?.total_supply?.toLocaleString() || "N/A"}
        </p>
        <p className="text-black">
          <strong>Max Supply:</strong>{" "}
          {coinDetails.market_data?.max_supply?.toLocaleString() || "N/A"}
        </p>
      </div>

      <div className="bg-white mt-8 text-black shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Description</h2>
        <div
          className="text-gray-700 leading-relaxed description-container"
          dangerouslySetInnerHTML={{ __html: coinDetails.description?.en || "N/A" }}
        />
      </div>
    </div>
  );
}
