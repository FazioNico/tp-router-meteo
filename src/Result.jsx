import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const fetchMeteoData = async (city) => {
  // Open Meteo API doc: https://open-meteo.com/en/docs/geocoding-api
  // 1: use geocoding to get lat lng from city name
  const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  const geocodingData = await geocodingResponse.json();
  if (!geocodingData.results || geocodingData.results.length === 0) {
    throw new Error(`No results found for city: ${city}`);
  }
  const { latitude, longitude } = geocodingData.results[0];
  // Open Meteo API doc: https://open-meteo.com/en/docs/geocoding-api
  // 2: use lat lng to get weather data
  const meteoResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const meteoData = await meteoResponse.json();
  return meteoData;
};

export function Result() {
  const { city } = useParams();
  const [meteoData, setMeteoData] = useState(null);

  useEffect(() => {
    if (!city) {
      // Handle the case where city is not provided
      console.error("City parameter is missing");
    }
    fetchMeteoData(city)
      .then((data) => {
        setMeteoData(data);
        console.log("Meteo data fetched:", data);
      });
  }, []);

  return (
    <>
      {meteoData ? (
        <div>
          <Link to="/">Back to Search</Link>
          <h1>Weather in {city}</h1>
          <p>Temperature: {meteoData.current_weather.temperature}°C</p>
          <p>Wind Speed: {meteoData.current_weather.wind_speed} km/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}