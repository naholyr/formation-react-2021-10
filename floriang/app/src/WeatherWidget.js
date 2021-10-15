import { useState, useEffect } from "react";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const delayByCity = {
  Paris: 3000,
  Limoges: 2000,
  "Le Mans": 8000,
  "Villefranche-sur-Saône": 1000,
};

const WeatherWidget = ({ city }) => {
  const [{ status, weatherText, error }, setWeatherData] = useState({
    status: "loading",
  });

  useEffect(() => {
    if (!city) return;

    const url = `https://wttr.in/${city}?T`;
    fetch(url)
      .then((response) => response.text())
      .then((html) => sleep(delayByCity[city]).then(() => html))
      .then((html) => {
        const text = extractWeatherTextFromHTML(html);
        setWeatherData({ status: "success", weatherText: text });
      })
      .catch((error) => {
        setWeatherData({ status: "error", error: error.message });
      });
  }, [city]);

  if (!city) return null; // early-return
  if (status.status === "loading") return "Chargement en cours…";
  if (status.status === "error") return "Erreur: " + status.error;
  return <div className="WeatherWidget">{weatherText}</div>;
};

export default WeatherWidget;

const extractWeatherTextFromHTML = (html) =>
  html
    .replace(/^.*<pre.*?> *(.+) *<\/pre>.*$/ims, "$1")
    .replace(/&quot;/g, '"')
    .split("\n")
    .slice(0, -2)
    .join("\n");
