import React, {useContext} from "react"
import {Context} from "../Context"
export default function Header(){
    const {sortPhotos} = useContext(Context)
    function handleClick(){
        sortPhotos()
        
    }
    return (
        <header>
            
            <h1><i className="ri-reddit-line"></i> Reddit Pics</h1>
            <button onClick={handleClick}> sort pics </button>
        </header>
    )
}