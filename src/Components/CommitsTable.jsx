import { FaStar } from "react-icons/fa"
import { PaginationArrow } from "./PaginationArrow"

import "./CommitsTable.css"

export function CommitsTable({
    arrayType,
    pgNumber, setPgNumber,
    startIndex, setStartIndex,
    endIndex, setEndIndex,
    commitsPerPg
}){
    const arrayLength = arrayType?.length
    const noOfPages = Math.ceil(arrayLength/commitsPerPg)
    const slicedArray = arrayType.slice(startIndex, endIndex)

    const headers = ["Commit", "Favourite", "Author", "Date (YYYY-MM-DD)"]

    return(
        <div
            className="rendered-commits-repo"
        >
            <div
                className="commit-grid grid-nav"
            >
                {headers.map((title, index) => (
                    <p
                        key={index}
                        className="commit-nav-title"
                    >
                        {title}
                    </p>
                ))}
            </div>

            {slicedArray.map((repo, index) => {
                return(
                    <div
                        key={index}
                        className="commit-grid"
                    >
                        <p
                            className="commit-text"
                        >
                            {repo.commit.message}
                        </p>

                        <FaStar 
                            className="fave-icon"
                        />

                        <p>
                            {repo.author.login}
                        </p>

                        <div>
                            <p>
                                {repo.commit.author?.date?.slice(0, 10)}
                            </p>

                            <p>
                                {repo.commit.author?.date?.slice(11, 19)}
                            </p>
                        </div>

                        <button
                            className="commit-info-button"
                        >
                            More Information
                        </button>
                    </div>
                )
            })}

            <PaginationArrow 
                currentPg={pgNumber}
                setCurrentPg={setPgNumber}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                endIndex={endIndex}
                setEndIndex={setEndIndex}
                instanceNumber={commitsPerPg}
                lastPg={noOfPages}
            />
        </div>
    )
}