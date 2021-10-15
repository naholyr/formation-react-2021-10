import React, { useState, useEffect, useRef } from "react";
//import "./WeatherWidget.scss";
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
  const requestedCityRef = useRef();
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
    setStatus({ status: "loading" });
    requestedCityRef.current = city;
    fetch(url)
      .then((response) => response.text())
      .then((html) => sleep(delayByCity[city]).then(() => html))
      .then((html) => {
        //console.log();
        if (requestedCityRef.current !== city) return;
        const text = extractWeatherTextFromHTML(html);
        setStatus({ status: "success", weatherText: text });
      })
      .catch((error) => {
        setStatus({ status: "error", error: error.message });
      });
  }, [city]);
  //city ? "Check weather for " + city : "Weather of  <sélectionner une ville>";
  if (status.status === "loading") return "loading...";
  if (status.status === "error") return "erreur " + status.error;
  return <div className="WeatherWidget">{status.weatherText}</div>;
};

export default WeatherWidget;

const extractWeatherTextFromHTML = (html) =>
  html
    .replace(/^.*<pre.*?> *(.+) *<\/pre>.*$/ims, "$1")
    .replace(/&quot;/g, '"')
    .split("\n")
    .slice(0, -2)
    .join("\n");
