import { useState } from "react";

import "./RenderRepos.css"
import { PaginationArrow } from "../../../Components/PaginationArrow";
import { SortRepos } from "./SortRepos";

export function RenderRepos({
    repos, setRepos,
    allRepos
}){
    // State that only 6 repositories will be shown per page
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(6)

    const [currentPg, setCurrentPg] = useState(1)

    const numberOfRepos = repos?.length 

    const renderedRepos = repos.slice(startIndex, endIndex)

    const numberOfPages = Math.ceil(numberOfRepos / 6)

    return(
        <div
            className="repo-section"
        >
            <h1
                className="repo-section-heading"
            >
                Repositories
            </h1>

            <SortRepos 
                setRepos={setRepos}
                allRepos={allRepos}
            />

            <div
                className="repo-grid"
            >
                {renderedRepos.map((repo, index) => {
                    return(
                        <div
                            className="repo-container"
                            key={index}
                        >
                            <p
                                className="repo-date"
                            >
                                {repo?.created_at?.slice(0, 10)}
                            </p>

                            <p
                                className="repo-name"
                            >
                                {repo?.name}
                            </p>

                            <p
                                className="repo-language-text"
                            >
                                {repo?.language?
                                <>
                                    <span>
                                        Language: </span>
                                    {repo.language}
                                </>
                                :
                                "No Language to Display"
                                }
                            </p>

                            <button
                                className="commit-button"
                            >
                                Commits
                            </button>
                        </div>
                    )
                })}
            </div>

            <PaginationArrow 
                currentPg={currentPg}
                setCurrentPg={setCurrentPg}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                endIndex={endIndex}
                setEndIndex={setEndIndex}
                instanceNumber={6}
                lastPg={numberOfPages}
            />
        </div>
    )
}