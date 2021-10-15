import { useState, useEffect } from "react";

const WeatherWidget = ({ city }) => {
  const [{ status, weatherData, error }, setWeatherData] = useState({
    status: "loading",
  });

  useEffect(() => {
    if (!city) return;
    const url = `https://wttr.in/${city}?format=j1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({ status: "success", weatherData: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  if (!city) return null; // Early return

  if (status === "loading") return "Chargement en cours...";
  if (status === "error") return "Erreur: " + error;

  //   return <pre>{JSON.stringify(weatherData, null, "  ")}</pre>;
  return weatherData.current_condition[0].lang_fr[0].value;
};

export default WeatherWidget;
