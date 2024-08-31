// app/your-page/actions.ts
export async function getTrendingCoins() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from CoinGecko");
    }
    const data = await response.json();
    return data.coins; // Returning only the coins array
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch trending coins");
  }
}
