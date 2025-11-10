import { useState } from "react";
import { CommitsTable } from "../../../Components/CommitsTable";

export function RenderCommits({
    repoCommits,
    favourites,
    toggleFavourites
}){
    const [currentPg, setCurrentPg] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)

    return(
        repoCommits.length === 0?
            <div>

            </div>
        :
            <CommitsTable 
                arrayType={repoCommits}
                pgNumber={currentPg}
                setPgNumber={setCurrentPg}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                endIndex={endIndex}
                setEndIndex={setEndIndex}
                commitsPerPg={5}
                favourites={favourites}
                toggleFavourites={toggleFavourites}
            />
    )
}