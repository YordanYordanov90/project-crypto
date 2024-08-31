export async function getCoinDetails(id) {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch details for coin: ${id}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching coin details:", error);
      throw new Error("Failed to fetch coin details");
    }
  }
  