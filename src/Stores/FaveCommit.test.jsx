import { describe, it, expect, beforeEach } from "vitest";
import { userFaveCommit } from "./userFaveCommit";

beforeEach(() => {
    const {clearFavourites} = userFaveCommit.getState()
    clearFavourites()
    // Clear local storage so this does not persist
    localStorage.clear()
})

describe("userFaveCommit store", () => {
    it("initializes with an empty favourites array", () => {
        const {favourites} = userFaveCommit.getState()
        expect(favourites).toEqual([])
    })

    it("adds a favourite commit", () => {
        const {addFavourite} = userFaveCommit.getState()
        addFavourite("test123")

        const {favourites} = userFaveCommit.getState()
        expect (favourites).toEqual(["test123"])
    })

    it("removes a favourite commit", () => {
        const {addFavourite, removeFavourite} = userFaveCommit.getState()
        addFavourite("test123")
        removeFavourite("test123")

        const {favourites} = userFaveCommit.getState()
        expect(favourites).not.toContain("test123")
    })

    it("toggles favourites correctly", () => {
        const {toggleFavourites} = userFaveCommit.getState()
        
        toggleFavourites("test123")
        expect(userFaveCommit.getState().favourites).toContain("test123")

        toggleFavourites("test123")
        expect(userFaveCommit.getState().favourites).not.toContain("test123")
    })

    it("clears all favourites", () => {
        const {addFavourite, clearFavourites} = userFaveCommit.getState()

        addFavourite("t")
        addFavourite("e")
        addFavourite("s")
        addFavourite("t")
        clearFavourites()

        const {favourites} = userFaveCommit.getState()
        expect(favourites).toEqual([])
    })
})