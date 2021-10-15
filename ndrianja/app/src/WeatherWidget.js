// https://wttr.in/VILLE.png
// JSON: https://wttr.in/VILLE?format=j1
// plain-text: https://wttr.in/VILLE?T

import React, { useState, useEffect } from "react";

//const url = `https://wttr.in/${"Paris"}?T`;
//const controller = new AbortController();

const WeatherWidget = ({ city }) => {
  const [status, setStatus] = useState({ status: "loading" });
  useEffect(() => {
    if (!city) return;
    const url = `https://wttr.in/${city}?T`;
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setStatus({ status: "success", weatherText: text });
      });
    //const controller = new AbortController();
    return () => {};
  }, [city]);

  if (!city) return null;
  if (status.status === "loading") return "Loading...";
  if (status.status === "loading") return "Error..." + status.error;

  return <pre>{status.weatherText}</pre>;
};

export default WeatherWidget;
