import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { CommitInfo } from "./CommitInfo";

import "./CommitsPopUp.css"

import { RenderCommits } from "./RenderCommits";
import { userFaveCommit } from "../../../Stores/userFaveCommit";
import { RenderFaveCommits } from "./RenderFaveCommits";
import ReactSelect from "react-select"
import { ImPrevious } from "react-icons/im";

export function CommitsPopUp({
    selectedRepo, setSelectedRepo,
    username, 
    isLoading, setIsLoading,
    error, setError,
}){
    const [sha, setSha] = useState(null)
    const [commitOption, setCommitOption] = useState("All Commits")
    const [repoCommits, setRepoCommits] = useState([])
    const [sortDates, setSortDates] = useState("Latest")

    const favourites = userFaveCommit((state) => state.favourites)
    const toggleFavourites = userFaveCommit((state) => state.toggleFavourites)

    console.log("Commit Pop Up isLoading", isLoading)


    const dateOptions = [
        {
            label: "Latest - Oldest",
            value: "Latest"
        },
        {
            label: "Oldest - Latest",
            value: "Oldest"
        }
    ]

    useFetch(
        `repos/${username}/${selectedRepo}/commits`, {
            setData: setRepoCommits,
            setIsLoading,
            setError,
            onSuccess: null
        }
    )

    const commitFilterOptions = ["All Commits", "Favourite Commits"]

    return(
        <div
            className="repo-popup"
        >
            {isLoading ?
                <div
                    className="loader"
                >
                </div>
                :
                <div
                    className="commit-container"
                >
                    <h1
                        className="chosen-repo-title"
                    >
                        {selectedRepo}
                    </h1>

                    {sha?
                        null 
                        :
                        <div
                            className="commit-options-container"
                        >
                            {commitFilterOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className={`commit-options ${commitOption.toLowerCase() === option.toLowerCase()? "selected" : ""}`}
                                    onClick={() => setCommitOption(option)}
                                >
                                    {option}
                                </div>
                            ))}

                            <ReactSelect 
                                className="commit-select"
                                options={dateOptions}
                                value={dateOptions.find(option => option.value === sortDates)}
                                onChange={option => setSortDates(option?.value || "Latest")}
                            />
                        </div>
                    }

                    {sha?
                        <CommitInfo 
                            selectedRepo={selectedRepo}
                            username={username}
                            sha={sha}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            error={error}
                            setError={setError}
                        />
                        :
                        commitOption.toLowerCase() === "all commits" ?
                            <RenderCommits 
                                repoCommits={repoCommits}
                                favourites={favourites}
                                toggleFavourites={toggleFavourites}
                                sortDates={sortDates}
                                setSha={setSha}
                            />
                            :
                            <RenderFaveCommits 
                                favourites={favourites}
                                toggleFavourites={toggleFavourites}
                                repoCommits={repoCommits}
                                setSha={setSha}
                                sortDates={sortDates}
                            />
                    }

                    <div
                        className="commit-button-container"
                    >
                        {sha ?
                            <button
                                className="commit-buttons back-commit-button"
                                onClick={() => setSha(null)}
                            >
                                Back to All Commits
                            </button>
                            :
                            null
                        }
                        <button
                            className="commit-buttons close-commit-button"
                            onClick={() => setSelectedRepo(null)}
                        >
                            Close
                        </button> 
                    </div>
                </div>
            }
        </div>
    )
}