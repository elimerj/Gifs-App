import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setpreviousTerms([query, ...previousTerms.slice(0, 7)]);

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
    console.log(gifsCache);
  };

  return {
    //Properties
    gifs,
    previousTerms,

    //Methos /Actions
    handleTermClicked,
    handleSearch,
  };
};
