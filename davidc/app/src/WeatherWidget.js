// https://wttr.in/VILLE.png
// JSON: https://wttr.in/VILLE?format=j1
// plain-text: https://wttr.in/VILLE?T

import { useState, useEffect } from "react";
// const url = `https://wttr.in/${"Lyon"}?T`;

const WeatherWidget = ({ cityselected }) => {
  const [status, setWeatherText] = useState({ status: "loading" });

  useEffect(() => {
    if (!cityselected) return;

    // const url = `https://wttr.in/${cityselected}?format=j1`;
    const url = `https://wttr.in/${cityselected}?T`;
    //const controller = new AbortController();
    fetch(url, {
      method: "GET",
      //signal: controller.signal,
    }) // Promise<response>
      .then((response) => response.text()) // Promise<text>
      .then((html) => {
        // Succès:
        const text = extractWeatherTextFromHTML(html);
        setWeatherText({ status: "success", weatherText: text });
      });
  }, [cityselected]);

  if (!cityselected) return null;
  if (status.status === "loading") return "Chargement en cours ...";
  if (status.status === "error") return "Erreur: " + status.error;

  return <pre>{status.weatherText}</pre>;
};

export default WeatherWidget;

const extractWeatherTextFromHTML = (html) =>
  html
    .replace(/^.*<pre.*?> *(.+) *<\/pre>.*$/ims, "$1")
    .replace(/&quot;/g, '"')
    .split("\n")
    .slice(0, -2)
    .join("\n");
