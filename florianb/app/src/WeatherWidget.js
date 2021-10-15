// https://wttr.in/VILLE.png
// JSON: https://wttr.in/VILLE?format=j1
// plain-text: https://wttr.in/VILLE?T

import "./WeatherWidget.scss";
import { useEffect, useRef, useState } from "react";
import useIsMountedRef from "./useIsMountedRef";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const delayByCity = {
  Paris: 3000,
  Limoges: 2000,
  "Le Mans": 8000,
  "Villefranche-sur-Saône": 1000,
};

const WeatherWidget = ({ city }) => {
  // { status: 'loading' }
  // { status: 'success', weatherText: '...' }
  // { status: 'error', error: '...' }
  const status = useWeather(city);

  if (!city) return null; // early-return
  if (status.status === "loading") return "Chargement en cours…";
  if (status.status === "error") return "Erreur: " + status.error;
  return <div className="WeatherWidget">{status.weatherText}</div>;

  // const imgUrl = `https://wttr.in/${encodeURIComponent(city)}.png`;
  // <img src={imgUrl} alt={`Météo de ${city}`} />
};

export default WeatherWidget;

const extractWeatherTextFromHTML = (html) =>
  html
    .replace(/^.*<pre.*?> *(.+) *<\/pre>.*$/ims, "$1")
    .replace(/&quot;/g, '"')
    .split("\n")
    .slice(0, -2)
    .join("\n");

const useWeather = (city) => {
  const [status, setStatus] = useState({});
  const requestedCityRef = useRef();

  const isMounted = useIsMountedRef();

  useEffect(() => {
    console.log("effect - setup", city);
    if (!city) return;

    const url = `https://wttr.in/${city}?T`;
    setStatus({ status: "loading" });
    requestedCityRef.current = city;
    fetch(url)
      .then((response) => response.text())
      .then((html) => sleep(delayByCity[city]).then(() => html))
      .then((html) => {
        // Race condition?
        // requestedCityRef.currenty = ville pour laquelle je suis en train d'attendre une réponse
        // city = ville pour laquelle je reçois la réponse
        if (requestedCityRef.current !== city) return;

        // Memory leak: ignore is component is destroyed
        console.log("isMounted?", city, isMounted.current);
        if (!isMounted.current) return;

        const text = extractWeatherTextFromHTML(html);
        setStatus({ status: "success", weatherText: text });
      })
      .catch((error) => {
        setStatus({ status: "error", error: error.message });
      });

    // Cleanup
    return () => {
      console.log("effect - clenaup", city);
      // TODO abort
    };
  }, [city, isMounted]);

  return status;
};
