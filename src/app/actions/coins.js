export async function getCoins() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  try {
    
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true",
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from CoinGecko");
    }

    const data = await response.json();
    return data; // Return the data directly
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch coins");
  }
}
