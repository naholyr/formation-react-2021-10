import React, { useState, useEffect } from "react";

//const url = `https://wttr.in/${"Lyon"}?T`;

const WeatherWidget = ({ city }) => {
  //const [{ status, weatherText, error }, setWeatherText] = useState({
  //  status: "loading",
  //});
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const delayByCity = {
    Paris: 3000,
    Limoges: 2000,
    "Le Mans": 8000,
    "Villefranche-sur-Saône": 1000,
  };
  const [status, setStatus] = useState({
    status: "starting",
  });
  // useEffect(() => {
  //    if ( !city) return null ;
  //    const url = `https://wttr.in/${city}?T`;
  //    const controller = new AbortController();
  //fetch(url, {
  //  method: "GET",
  //  signal: controller.signal,
  //}).then((response) => response.Text())
  //.then((text) => {
  //    console.log("Response body", text);
  //}).catch((err) => {
  //   console.log("error",err.name);
  //};

  //},[city]);

  useEffect(() => {
    if (!city) return;

    const url = `https://wttr.in/${city}?format=j1`;
    fetch(url)
      .then((response) => response.text())
      .then((text) => sleep(delayByCity[city]).then(() => text))
      .then((text) => {
        setStatus({ status: "success", weatherText: text });
      })
      .catch((error) => {
        setStatus({ status: "error", error: error.message });
      });
  }, [city]);
  //city ? "Check weather for " + city : "Weather of  <sélectionner une ville>";
  if (status.status === "loading") return "loading...";
  if (status.status === "error") return "erreur " + status.error;
  return <pre>{status.weatherText}</pre>;
};

export default WeatherWidget;
