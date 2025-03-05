import { useEffect, useState } from "react";

function useTags() {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        setTags(extractTags(data.notes));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, isLoading, error };
}

export default useTags;

const extractTags = (notes) => {
  const tags = new Set();
  notes.forEach((note) => note.tags?.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
};
