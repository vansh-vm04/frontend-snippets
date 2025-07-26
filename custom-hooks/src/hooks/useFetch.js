import { useEffect, useState } from "react";

export function useFetch(link) {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  async function getData(link) {
    setLoading(true);
    const res = await fetch(link);
    if (!res) return { error: "Error" };
    const json = await res.json();
    setLoading(false);
    console.log(json);
    setdata(json);
  }

  useEffect(() => {
    getData(link);
  }, [link]);

  return {
    data: data,
    loading: loading,
  };
}
