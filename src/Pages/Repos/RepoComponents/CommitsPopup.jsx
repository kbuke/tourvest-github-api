import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";

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

    console.log(repoCommits)
}