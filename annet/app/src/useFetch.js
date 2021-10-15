// (probably better) alternative:
// https://usehooks-typescript.com/react-hook/use-fetch

import { useEffect, useState } from "react";

const useFetch = (url, { type = "json", lag = 0, ...fetchOptions } = {}) => {
  const [result, setResult] = useState({ status: "none" });

  useEffect(() => {
    if (!url) return;

    // Contrôle de l'annulation
    const controller = new AbortController();
    const abort = () => {
      controller.abort();
    };

    // Démarrer la requête:
    setResult({ status: "pending" });
    fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })
      .then((response) => {
        return response[type]().then((body) => {
          setResult({ status: "success", response, body });
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // Ne rien faire car le "abort" est fait:
          // soit au changement d'url (passage à pending)
          // soit au unmount (modif du state impossible)
        } else {
          setResult({ status: "error", error });
        }
      });

    // Annuler la requête au cleanup
    return abort;

    // Limitation: on ne redéclenche le fetch qu'en cas de changement de l'url
    // si on le faisait au changement des options, l'objet change tout
    // le temps et ça rendrait la comparaison compliquée à faire
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return result;
};

export default useFetch;
