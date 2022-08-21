import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
export default function Header(){
    const {sortPhotosOC,sortPhotosLikes} = useContext(Context)
    return (
        <header>
            
            <h1>
                <i className="ri-reddit-line"></i> Reddit Pics</h1>
            <div>
                <Link to="/sortedView"> <button className="button" onClick={sortPhotosOC}> OC's First </button> </Link> 
                <Link to="/sortedView"> <button className="button" onClick={sortPhotosLikes}> Up-Votes </button> </Link> 
                <Link to="/"> <button  className="button"> Default View  </button> </Link>
            </div>
            
        </header>
    )
}