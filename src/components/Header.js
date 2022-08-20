import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

export default function Header(){
    const {sortPhotos} = useContext(Context)
    return (
        <header>
            
            <h1><i className="ri-reddit-line"></i> Reddit Pics</h1>
            <div>
                <button><Link to="/sortedView"> Sorted View</Link> </button>
                <button> <Link to="/"> Default View </Link> </button>
            </div>
            
        </header>
    )
}