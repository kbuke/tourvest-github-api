import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";

import "./CommitsPopUp.css"
import { RenderCommits } from "./RenderCommits";
import { userFaveCommit } from "../../../Stores/userFaveCommit";

export function CommitsPopUp({
    selectedRepo, setSelectedRepo,
    username, 
    isloading, setIsLoading,
    error, setError,
}){
    const [sha, setSha] = useState(null)
    const [commitOption, setCommitOption] = useState("All Commits")
    const [repoCommits, setRepoCommits] = useState([])
    const [sortDates, setSortDates] = useState("Latest")

    const favourites = userFaveCommit((state) => state.favourites)
    const toggleFavourites = userFaveCommit((state) => state.toggleFavourites)


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
            {isloading ?
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
                        </div>
                    }

                    <RenderCommits 
                        repoCommits={repoCommits}
                        favourites={favourites}
                        toggleFavourites={toggleFavourites}
                    />  

                    <div
                        className="commit-button-container"
                    >
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