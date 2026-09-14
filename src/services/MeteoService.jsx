
export const fetchMeteoData = async (city) => {
  // Open Meteo API doc: https://open-meteo.com/en/docs/geocoding-api
  // 1: use geocoding to get lat lng from city name
  const geocodingResponse = await fetch(`${import.meta.env.API_URL}/v1/search?name=${city}`);
  const geocodingData = await geocodingResponse.json();
  if (!geocodingData.results || geocodingData.results.length === 0) {
    throw new Error(`No results found for city: ${city}`);
  }
  const { latitude, longitude } = geocodingData.results[0];
  // Open Meteo API doc: https://open-meteo.com/en/docs/geocoding-api
  // 2: use lat lng to get weather data
  const meteoResponse = await fetch(`${import.meta.env.API_URL}/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const meteoData = await meteoResponse.json();
  return meteoData;
};
