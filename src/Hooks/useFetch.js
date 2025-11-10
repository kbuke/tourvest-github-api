import { useEffect } from "react"

export function useFetch(additionalUrl, {setData, setIsLoading, setError, onSuccess = null}) {

    useEffect(() => {
        if (!additionalUrl) return

        const controller = new AbortController()

        setIsLoading(true)
        setError(null)

        fetch(`https://api.github.com/${additionalUrl}`, {
            signal: controller.signal,
        })
            .then(res => {
                if (res.status === 404){
                    throw new Error("User not found! Please try again")
                }

                if (res.status === 403){
                    throw new Error("You have sent to many requests, please wait while it reloads.")
                }
                
                if (!res.ok) throw new Error(`Error ${res.status}`)
                return res.json()
            })
            .then(data => {
                setData(data)
                if (onSuccess) onSuccess()
            })
            .catch(err => {
                if(err.name !== "AbortError"){
                    setError(err.message)
                }
            })
            .finally(() => setTimeout(() => setIsLoading(false), 100)); // 100ms delay


            return () => controller.abort()

    }, [additionalUrl])
}