import { useState } from "react"
import { Outlet } from "react-router"

import "./index.css"

function App() {
  
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [error, setError] = useState([])

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
