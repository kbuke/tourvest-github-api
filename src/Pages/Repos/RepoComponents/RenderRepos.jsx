import { useState } from "react";

import "./RenderRepos.css"
import { PaginationArrow } from "../../../Components/PaginationArrow";
import { SortRepos } from "./SortRepos";

export function RenderRepos({
    repos, setRepos,
    allRepos, 
    setSelectedRepo
}){
    const [currentPg, setCurrentPg] = useState(1)

    const reposPerPg = 6
    
    const startIndex = (currentPg - 1) * reposPerPg
    const endIndex = startIndex + reposPerPg

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

            {renderedRepos.length > 0 ?
                <>
                    <SortRepos 
                        setRepos={setRepos}
                        allRepos={allRepos}
                        setCurrentPg={setCurrentPg}
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
                                        onClick={() => {
                                            setSelectedRepo(repo?.name)
                                        }}
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
                        setStartIndex={null}
                        endIndex={endIndex}
                        setEndIndex={null}
                        instanceNumber={6}
                        lastPg={numberOfPages}
                    />
                </>
                :
                <div
                    className="error-message-container"
                >
                    <p>
                        No Repository to Display
                    </p>
                </div>}
        </div>
    )
}