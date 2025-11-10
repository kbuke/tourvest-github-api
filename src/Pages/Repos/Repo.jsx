import { useState } from "react"
import { useOutletContext, useParams } from "react-router"
import { useFetch } from "../../Hooks/useFetch"

export function Repo(){
    const [repos, setRepos] = useState([])
    const [allRepos, setAllRepos] = useState([])
    const [selectedRepo, setSelectedRepo] = useState(null)

    const appData = useOutletContext()
    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading
    const error = appData?.error
    const setError = appData?.setError

    const param = useParams()
    const username = param?.username

    useFetch(
        username? `users/${username}/repos` : null, {
            setData: (data) => {
                setRepos(data)
                setAllRepos(data)
            },
            setIsLoading,
            setError,
            onSuccess: null
        }
    )

    const userRepo = repos[0]?.owner

    return(
        <>
        </>
    )
}