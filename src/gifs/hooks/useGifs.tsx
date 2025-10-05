import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {


    const gifsCache = useRef<Record<string, Gif[]>>({});

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState <Gif[]>([]);


    const handleTermClick = async (term: string) => {

        console.log(gifsCache.current);
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term]);
            return;
        }

        // console.log({ term });
        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
    };

    const handleSearch = async (query: string) => {
        query = query.toLowerCase().trim();

        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);
        gifsCache.current[query] = gifs
        // console.log(gifs);
    };

    return {
        //Values
        gifs,
        previousTerms,
        //Methods
        handleSearch,
        handleTermClick
    }
}
