export async function getNFTs() {
  try {
    // Optional delay for simulation
    const response = await fetch(
      "https://api.coingecko.com/api/v3/nfts/list?per_page=10&page=1",

      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from CoinGecko");
    }

    const data = await response.json();
    return data; // Return the fetched NFT data
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch NFTs");
  }
}
