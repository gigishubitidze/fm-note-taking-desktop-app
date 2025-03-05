import { useEffect, useState } from "react";

function usePeople() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people`);
      const data = await response.json();
      setPeople(data);
    };

    fetchData();
  }, []);

  return { people };
}

export default usePeople;
