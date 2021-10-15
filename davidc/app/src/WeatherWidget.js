// https://wttr.in/VILLE.png
// JSON: https://wttr.in/VILLE?format=j1
// plain-text: https://wttr.in/VILLE?T

import { useState, useEffect } from "react";
// const url = `https://wttr.in/${"Lyon"}?T`;

// // Démarrer la requête:
// const controller = new AbortController();
// fetch(url, {
//   method: "GET",
//   signal: controller.signal,
// }) // Promise<response>
//   .then((response) => response.text()) // Promise<text>
//   .then((text) => {
//     // Succès:
//     console.log("Response body", text);
//   })
//   .catch((err) => {
//     if (err.name === "AbortError") {
//       // Requête annulée
//     } else {
//       // Erreur:
//       console.error("Error", err.name);
//     }
//   });

// // Abandonner la requête:
// controller.abort();

// const WeatherWidget = ({ city }) => {
//   if (!city) return null;
//   // const imgUrl = `https://wttr.in/${encodeURIComponent(city)}.png`;
//   // <img src={imgUrl} alt={`Météo de ${city}`} />
//   const weatherText = `TODO call https://wttr.in/${city}?T`;
//   return <pre>{weatherText}</pre>;
// };

const WeatherWidget = ({ cityselected }) => {
  const [status, setWeatherText] = useState({ status: "loading" });

  useEffect(() => {
    if (!cityselected) return;

    const url = `https://wttr.in/${cityselected}?format=j1`;

    //const controller = new AbortController();
    fetch(url, {
      method: "GET",
      //signal: controller.signal,
    }) // Promise<response>
      .then((response) => response.text()) // Promise<text>
      .then((text) => {
        // Succès:
        setWeatherText({ status: "success", weatherText: text });
      });
  }, [cityselected]);

  if (!cityselected) return null;
  if (status.status === "loading") return "Chargement en cours ...";
  if (status.status === "error") return "Erreur: " + status.error;

  return <pre>{status.weatherText}</pre>;
};

export default WeatherWidget;
