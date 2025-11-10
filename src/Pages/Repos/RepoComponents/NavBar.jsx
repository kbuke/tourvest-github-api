import { Link } from "react-router";

import "./NavBar.css"

export function NavBar(){
    return(
        <div
            className="nav-bar-div"
        >
            <Link
                to="/"
                className="home-link"
            >
                Home
            </Link>
        </div>
    )
}