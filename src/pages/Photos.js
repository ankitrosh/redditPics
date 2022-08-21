import React from "react"
import {Link} from "react-router-dom"

export default function Photos({allPhotos}){  
    console.log(allPhotos)
    const displayPhotos = allPhotos.map(photo => {
        return(
            <div key = {photo.data.id} className="photos--card">
            
                <Link to={`post/${photo.data.id}`}>
                    <img src = {photo.data.thumbnail} className = "images" />
                </Link>

                <Link to={`post/${photo.data.id}`}>
                    <p className = "photos--title"> {photo.data.title } </p> 
                </Link>
                
            </div>
            
        )
        
        
    })
    
    return (
        <div className = "photos--divs">    
            {displayPhotos}
        </div>    
    )
}