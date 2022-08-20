import React, {useContext, useEffect} from "react"
import {Link} from "react-router-dom"

export default function Photos({allPhotos}){
    
    
    
    console.log(allPhotos)
    function trim(title){
        
        if(title.length < 30){
            return title
        } else {
            title = title.substring(0,27) + "..."
            return title 
        }
    }
    
    const displayPhotos = allPhotos.map(photo => {
        //console.log(photo.data.title)
        return(
            <div key = {photo.data.id} className="photos--card">
                
                <Link to={`post/${photo.data.id}`}><img src = {photo.data.thumbnail} className = "images"></img></Link>
                <Link to={`post/${photo.data.id}`}>
                    <p className = "photos--title tooltip"> {trim(photo.data.title) } 
                        <span className="tooltiptext">{photo.data.title}</span>
                    </p> 
                    
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