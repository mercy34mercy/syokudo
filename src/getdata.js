import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();  // <-- Generics で受け取った型を data の型とする
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);  // <-- 引数で受け取った url を fetch する
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};

export default useFetch