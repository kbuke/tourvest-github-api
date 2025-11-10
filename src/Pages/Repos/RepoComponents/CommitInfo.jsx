import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";

export function CommitInfo({
    selectedRepo,
    username,
    sha,
    isloading,
    setIsLoading,
    error,
    setError
}){
    const [commitInfo, setCommitInfo] = useState([])
    const [page, setPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndindex] = useState(5)

    useFetch(
        `repos/${username}/${selectedRepo}/commits/${sha}`, {
            setData: setCommitInfo,
            setIsLoading,
            setError,
            onSuccess: null
        }
    )

    console.log(commitInfo)
}