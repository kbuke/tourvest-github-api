import { useEffect, useState } from "react"
import { useOutletContext, useParams, useNavigate } from "react-router"
import { useFetch } from "../../Hooks/useFetch"
import { ImgComponent } from "../../Components/ImgComponent"

import "./Repo.css"
import { NavBar } from "./RepoComponents/NavBar"
import { RenderRepos } from "./RepoComponents/RenderRepos"
import { CommitsPopUp } from "./RepoComponents/CommitsPopup"

export function Repo(){
    const [repos, setRepos] = useState([])
    const [allRepos, setAllRepos] = useState([])
    const [selectedRepo, setSelectedRepo] = useState(null)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

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

    // When a user manually enters an incorrect url that passes are routing check, still send them back to the home page
    const navigate = useNavigate()
    // Set up an alert for 3-seconds in the above case
    useEffect(() => {
        if(error){
            setShowErrorMessage(true)

            const timer = setTimeout(() => {
                navigate("/", {replace: true})
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [error, navigate])

    const userRepo = repos[0]?.owner

    return(
        <>
            {showErrorMessage && (
                <div
                    className="error-alert"
                >
                    User: <strong>{username}</strong> is not registered on GutHub. Redirecting...
                </div>
            )}
            <div
                className="user-div"
            >
                <ImgComponent 
                    src={userRepo?.avatar_url}
                    className={"user-img"}
                    alt={`${username}Img`}
                />

                <>
                    <p
                        className="git-username"
                    >
                        {username}
                    </p>
                </>
            </div>

            <NavBar />

            <RenderRepos 
                repos={repos}
                setRepos = {setRepos}
                allRepos = {allRepos}
                setSelectedRepo={setSelectedRepo}
            />

            {selectedRepo ?
                <CommitsPopUp 
                    setSelectedRepo={setSelectedRepo}
                    selectedRepo={selectedRepo}
                    username={username}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    error={error}
                    setError={setError}
                />
                :
                null
            }
        </>
    )
}