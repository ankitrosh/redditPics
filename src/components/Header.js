import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <header>
            
            <h1>
                <i className="ri-reddit-line"></i> Reddit Pics</h1>
            <div>
                <Link to="/sortedView"> <button className="button"> OC's First </button> </Link> 
                <Link to="/"> <button  className="button"> Default View  </button> </Link>
            </div>
            
        </header>
    )
}