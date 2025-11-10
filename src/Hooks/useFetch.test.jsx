import {render} from "@testing-library/react"
import { vi, describe, it, expect } from "vitest"
import { useFetch } from "./useFetch"


describe("useFetch", () => {
    it("calls setData and setIsLoading correctly", async() => {
        const setData = vi.fn()
        const setIsLoading = vi.fn()
        const setError = vi.fn()

        // Carry out a practice fetch
        global.fetch = vi.fn(() => 
            Promise.resolve({ok: true, json: () => Promise.resolve({success:true})})
        )

        const TestComponent = () => {
            useFetch("test-url", {setData, setIsLoading, setError})
            return null
        }

        render(<TestComponent />)

        await new Promise(r => setTimeout(r, 0))

        expect(setIsLoading).toHaveBeenCalledWith(true)
        expect(setData).toHaveBeenCalledWith({success: true})
        expect(setError).toHaveBeenCalledWith(null)
    })
})