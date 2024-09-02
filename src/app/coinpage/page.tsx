import CoinList from "@/components/CoinList"; // Import the Client Component
import { getCoins } from "@/app/actions/coins"; // Server action to fetch coins
import TrendingPage from "@/components/Trending";

export default async function CoinsPage() {
  const coins = await getCoins(); // Fetch coins on the server side

  if (!coins) {
    return <div>Failed to load coin data. Please try again later.</div>;
  }

  return (
    <>
      <div className="container border border-secondary rounded-2xl mt-10 shadow-xl mx-auto">
        <CoinList coins={coins} />{" "}
        {/* Pass the coins data to the Client Component */}
      </div>
      <TrendingPage />
    </>
  );
}
