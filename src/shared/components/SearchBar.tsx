import { useEffect, useState } from "react";

interface SearchBarProps {
  barDescription?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({
  barDescription = "Buscar",
  onQuery,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    //deben tener una tarea puntual y especifica
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 1000);
    //onQuery(query);

    return () => {
      //console.log("Limpieza");
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    //setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder={barDescription}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
};
