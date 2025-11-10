import { useEffect, useState } from "react";
import ReactSelect from "react-select"

import "./SortRepos.css"

export function SortRepos({
    setRepos, 
    allRepos,
    setCurrentPg
}){
    const [searchRepo, setSearchRepo] = useState("")
    const [repoDates, setRepoDates] = useState("Latest")

    // Define values in the date drop-down box
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

    useEffect(() => {
        if(!allRepos) return

        let filteredRepos = [...allRepos]

        // Filter Repositories by name
        if (searchRepo.trim() !== ""){
            filteredRepos = filteredRepos.filter(repo => 
                repo.name.toLowerCase().includes(searchRepo.toLowerCase())
            )
        }

        // Filter by date
        filteredRepos.sort((a, b) => {
            const firstDate = new Date(a.created_at)
            const secondDate = new Date(b.created_at)

            if (repoDates === "Latest"){
                return secondDate - firstDate
            } else {
                return firstDate - secondDate
            }
        })
        setRepos(filteredRepos)
    }, [searchRepo, allRepos, repoDates])

    return(
        <div
            className="repo-sort-flex"
        >
            <ReactSelect 
                className="repo-filter select-dates"
                options={dateOptions}
                value={dateOptions.find(option => option.value === repoDates)}
                onChange={option => setRepoDates(option?.value || "Latest")}
            />

            <input 
                className="repo-filter repo-search-input"
                type="text"
                placeholder="Filter Repositories by Name"
                onChange={e => 
                    {
                        setSearchRepo(e.target.value)
                        setCurrentPg(1)
                    }
                }
            />
        </div>
    )
}