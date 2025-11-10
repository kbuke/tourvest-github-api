import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userFaveCommit = create(
    persist(
        (set, get) => ({
            favourites: [],

            // Add Favourite commits and ensure this is persisted
            addFavourite: (sha) => {
                const {favourites} = get()
                if (!favourites.includes(sha)){
                    set({favourites: [...favourites, sha]})
                }
            },

            // Allow user to delete a fave commit and persist that
            removeFavourite: (sha) => {
                set({
                    favourites: get().favourites.filter((item) => item !== sha),
                })
            },

            // Allow user to toggle between fave commits
            toggleFavourites: (sha) => {
                const {favourites} = get()
                if (favourites.includes(sha)){
                    set({favourites: favourites.filter((item) => item !== sha)})
                } else {
                    set({favourites: [...favourites, sha]})
                }
            },

            clearFavourites: () => set({favourites: []}),
        }),

        {
            name: "favourites-storage"
        }
    )
)