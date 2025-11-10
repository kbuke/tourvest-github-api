import { useState } from "react"
import { Outlet } from "react-router"

import "./index.css"

function App() {
  
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  return (
    <>
      <Outlet 
        context = {
          {
            repos: repos, setRepos: setRepos,

            isLoading: isLoading, setIsLoading: setIsLoading,

            error: error, setError: setError
          }
        }
      />
    </>
  )
}

export default App
