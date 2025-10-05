import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

    const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Gif finder 🎆"
                description="Discover and share the perfect gif"
            />

            {/* Search */}
            <SearchBar 
                placeholder="Find what you want..."
                onQuery={ handleSearch }
            />

            {/* Busquedas previas */}
            {/* Previous Searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClick} />

            {/* Gifs */}
            {/* GifList: Props => gifs: Gif[] */}
            <GifList gifs={gifs} />
        </>
    )
}
