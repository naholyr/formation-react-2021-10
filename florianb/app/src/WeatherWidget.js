import { useState, useEffect } from "react";

const WeatherWidget = ({ city }) => {
  const [{ status, weatherData, error }, setWeather] = useState({
    status: "loading",
  });

  useEffect(() => {
    if (!city) return;

    const url = `https://wttr.in/${city}?format=j1`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeather({ status: "success", weatherData: data, error: null });
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      console.log("cleanup");
    };
  }, [city]);

  if (!city) return null;
  if (status === "loading") return "Chargement en cours";
  if (error) return error;

  return (
    <div>
      <p>
        La météo de {city} est{" "}
        {weatherData?.current_condition[0]?.weatherDesc[0]?.value}
        <br />
        La température est de {weatherData?.current_condition[0]?.temp_C}
      </p>
    </div>
  );
};

export default WeatherWidget;
