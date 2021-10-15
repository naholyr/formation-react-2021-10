import { useState, useEffect } from "react";

const WeatherWidget = ({ city }) => {
  const [status, setStatus] = useState({
    status: "loading",
  });
  useEffect(() => {
    if (!city) return;
    const controller = new AbortController();
    const url = `https://de.wttr.in/${city}?format=j1`;
    fetch(url, {
      method: "GET",
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const text = json.nearest_area[0].areaName[0].value;
        const temp = json.current_condition[0].temp_C;
        setStatus({
          status: "success",
          weatherText: "A " + text + " il fait " + temp + " degrés",
        });
      })
      .catch((err) => {
        setStatus({ status: "error", error: err.name });
        if (err.name === "AbortError") {
        } else {
          console.error("Error", err.name);
        }
      });
  }, [city]);
  //   //   controller.abort();

  if (!city) return null;
  if (status.status === "loading") return "Chargement...";
  if (status.status === "error") return "Erreur: " + status.error;

  return <pre>{status.weatherText}</pre>;
};

export default WeatherWidget;
