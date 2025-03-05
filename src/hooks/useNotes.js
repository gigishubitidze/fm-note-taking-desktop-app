import { useEffect, useState } from "react";

function useNotes(filter, searchQuery) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      setError(null);
      setNotes([]);

      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        setNotes(filterNotes(data.notes, filter, searchQuery));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [filter, searchQuery]);

  return { notes, isLoading, error };
}

export default useNotes;

const filterNotes = (notes, filter, searchQuery) => {
  if (!notes.length) return [];

  let filtered = notes;

  switch (true) {
    case !filter || filter === "all":
      filtered = notes;
      break;
    case filter === "archived":
      filtered = notes.filter((note) => note.isArchived);
      break;
    case filter.startsWith("tag:"):
      const tag = filter.replace("tag:", "").trim();
      filtered = notes.filter((note) => note.tags.includes(tag));
      break;
    default:
      filtered = [];
      break;
  }

  if (searchQuery) {
    filtered = filtered.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery) ||
        note.tags.includes(searchQuery)
    );
  }

  return filtered;
};
