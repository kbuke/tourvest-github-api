import { useState } from "react"
import { CommitsTable } from "../../../Components/CommitsTable"
import "./RenderFaveCommits.css"
import { SortCommits } from "../../../Components/SortCommits"

export function RenderFaveCommits({
    favourites,
    toggleFavourites,
    repoCommits,
    setSha,
    sortDates
}){
    const [currentPg, setCurrentPg] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)

    const faveCommit = repoCommits.filter(repo => favourites.includes(repo.sha))

    const sortCommits = SortCommits({
        array: faveCommit,
        sortDates
    })

    return(
        sortCommits.length === 0?
            <div
                className="no-fave-commit-div"
            >
                <p>
                    You have not favourited any commits in this repo yet.
                </p>
            </div>
            :
            <CommitsTable 
                arrayType={faveCommit}
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