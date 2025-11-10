import { useState } from "react";
import { CommitsTable } from "../../../Components/CommitsTable";
import { SortCommits } from "../../../Components/SortCommits";

import "./RenderCommits.css"

export function RenderCommits({
    repoCommits,
    favourites,
    toggleFavourites,
    sortDates,
    setSha
}){
    const [currentPg, setCurrentPg] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)

    // Sort commits based on their times using SortCommits compnent
    const sortCommits = SortCommits({
        array: repoCommits,
        sortDates
    })

    return(
        sortCommits.length === 0?
            <div
                className="no-commit-container"
            >
                <p
                    className="no-commit-text"
                >
                    There are no commits to diaply in this repo.
                </p>
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
                setSha={setSha}
                arrowClassName={"commit-arrow"}
            />
    )
}