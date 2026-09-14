import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMeteoData } from "../services/MeteoService";

export function Result() {
  const { city } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
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
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <>
      {errorMessage ? (
        <div>
          <p>Error: {errorMessage}</p>
          <Link to="/">Back to Search</Link>
        </div>
      ) : null} 

      {meteoData ? (
        <div>
          <Link to="/">Back to Search</Link>
          <h1>Weather in {city}</h1>
          <p>Temperature: {meteoData.current_weather.temperature}°C</p>
          <p>Wind Speed: {meteoData.current_weather.wind_speed} km/h</p>
        </div>
      ) : (
        !errorMessage && (
          <p>Loading...</p>
        )
      )}
    </>
  );
}