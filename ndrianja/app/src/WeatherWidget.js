// https://wttr.in/VILLE.png
// JSON: https://wttr.in/VILLE?format=j1
// plain-text: https://wttr.in/VILLE?T

import React, { useState, useEffect, useRef } from "react";
import useIsMountedRef from "./useIsMountedRef";

//const url = `https://wttr.in/${"Paris"}?T`;
//const controller = new AbortController();

const extractWeatherTextFromHTML = (html) =>
  html
    .replace(/^.*<pre.*?> *(.+) *<\/pre>.*$/ims, "$1")
    .replace(/&quot;/g, '"')
    .split("\n")
    .slice(0, -2)
    .join("\n");

const WeatherWidget = ({ city }) => {
  const status = useWeather(city);

  if (!city) return null;
  if (status.status === "loading") return "Loading...";
  if (status.status === "loading") return "Error..." + status.error;
  return <div className="WeatherWidget">{status.weatherText}</div>;
};

const useWeather = (city) => {
  const [status, setStatus] = useState({});
  const requestedCityRef = useRef();
  const isMounted = useIsMountedRef();

  useEffect(() => {
    if (!city) return;

    const url = `https://wttr.in/${city}?T`;
    setStatus({ status: "Loading" });
    requestedCityRef.current = city;

    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        if (requestedCityRef.current !== city) return;

        if (!isMounted.current) return;

        setStatus({
          status: "success",
          weatherText: extractWeatherTextFromHTML(text),
        });
      })
      .catch((err) => {
        setStatus({
          status: "error",
          error: "Error",
        });
      });
    //const controller = new AbortController();
    return () => {
      // cleanup: abort precedent useEffect
    };
  }, [city, isMounted]);

  return status;
};

export default WeatherWidget;
