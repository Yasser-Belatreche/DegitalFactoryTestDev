import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { search } from "../../../apis/search";

const useSearchResult = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchTerm = searchParams.get("q");
    if (!searchTerm) return;

    setLoading(true);

    search(searchTerm)
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [searchParams]);

  return { loading, data };
};

export { useSearchResult };
