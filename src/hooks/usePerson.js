import { useEffect, useState } from "react";

function usePerson(pid) {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${pid}/`);
      const data = await response.json();
      setPerson(data);
    };

    fetchData();
  }, [pid]);

  return { person };
}

export default usePerson;
