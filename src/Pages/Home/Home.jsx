import "./Home.css"

import { useOutletContext } from "react-router";

import { GitUserForm } from "./HomeComponents/GitUserForm";

import stars from "../../Resources/starrynight.jpg"
import earth from "../../Resources/earth.png"
import astrocat from "../../Resources/astrocat1.png"
import gitLogo from "../../Resources/githublogo.png"

export function Home(){

    // Receive props passed down from the parent (App)
    const appData = useOutletContext()

    const imgContainer = (src, className, alt) => {
        return(
            <img 
                src={src}
                className={className}
                alt={alt}
            />
        )
    }

    return(
        <div
            className="search-api-container"
            style={{
                backgroundImage: `url(${stars})`
            }}
        >
            {imgContainer(
                gitLogo, "git-logo-img", "gitLogo"
            )}

            {imgContainer(
                earth, "earth-img", "earthImg"
            )}

            {imgContainer(
                astrocat, "astrocat-img", "astroCatImg"
            )}

            <GitUserForm 
                {...appData}
            />
        </div>
    )
}