import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleTermClicked, previousTerms, handleSearch, gifs } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        barDescription={"Busca lo que quieras"}
        onQuery={handleSearch}
      />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs*/}
      <GifsList gifs={gifs} />
    </>
  );
};
