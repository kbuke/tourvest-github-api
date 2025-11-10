import { useState, useEffect } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { PaginationArrow } from "../../../Components/PaginationArrow";

import "./CommitInfo.css"

export function CommitInfo({
    selectedRepo,
    username,
    sha,
    setError
}){
    const [commitInfo, setCommitInfo] = useState([])
    const [currentPg, setCurrentPg] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndindex] = useState(5)
    const [localLoading, setLocalLoading] = useState(false)

    useFetch(
        username && selectedRepo && sha?
            `repos/${username}/${selectedRepo}/commits/${sha}`
            : 
            null, {
            setData: setCommitInfo,
            setIsLoading: setLocalLoading,
            setError,
            onSuccess: null
        }
    )

    // console.log("Is Loading", localLoading)

    // Get specific information on the commits details
    const effectedFiles = commitInfo?.files
    const numberOfFiles = effectedFiles?.length 
    
    // Determine how many files to render per page
    const sliceFiles = effectedFiles?.slice(startIndex, endIndex)

    // Determine how many pages each commit needs to show all file changes
    // Rendering 5 files per page
    const numberOfPages = Math.ceil(numberOfFiles/5)

    const fileHeaders = ["File Name", "Additions", "Deletions"]

    return(
        localLoading ?
        <div
            className="loader"
        ></div>
        :
        <div
            className="commit-specifics-container"
        >
           <p>
                Commit: <span
                    className="commited-message"
                >{commitInfo?.commit?.message} </span> made at <span
                    className="commit-time"
                >
                {commitInfo?.commit?.author?.date.slice(11, 19)} </span> on <span
                    className="commit-time"
                >{commitInfo?.commit?.author?.date.slice(0, 10)}</span>
            </p> 

            <div
                className="file-info-container"
            >
                <span
                    className="file-impact-text"
                >
                    {numberOfFiles} Files Impacted:
                </span>

                <div
                    className="impacted-file-grid file-grid-titles"
                >
                    {fileHeaders.map((title, index) => (
                        <p
                            key={index}
                            className="effected-file-titles"
                        >
                            {title}
                        </p>
                    ))}
                </div>
        

                {sliceFiles?.map((file, index) => (
                    <div
                        className="impacted-file-grid"
                        key={index}
                    >
                        <p
                            className="effected-file-info"
                        >
                            {file?.filename}
                        </p>

                        <p
                            className="effected-file-info"
                        >
                            {file?.additions}
                        </p>

                        <p
                            className="effected-file-info"
                        >
                            {file?.deletions}
                        </p>
                    </div>
                ))}
            </div>
            <PaginationArrow 
                currentPg={currentPg}
                setCurrentPg={setCurrentPg}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                endIndex={endIndex}
                setEndIndex={setEndindex}
                instanceNumber={5}
                lastPg={numberOfPages}
                additionalClassName={"commit-info-arrows"}
            />
        </div>

        
    )
}