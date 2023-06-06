import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quickgold.es/archivos-cache/Fixingsevilla.txt")
      .then((response) => response.json())
      .then((sevilla) => {
        setData(sevilla);
        setLoading(true);
      });
  }, []);
  return {
    data,
    loading,
  };
};
