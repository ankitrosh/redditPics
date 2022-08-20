import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
export default function Photos(){
    const {allPhotos} = useContext(Context)
    
    
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
        return(
            <div key = {photo.data.id} className="photos--card">
                
                <img src = {photo.data.thumbnail} className = "images"></img>
                <Link to={`post/${photo.data.id}`}><p className = "photos--title"> {trim(photo.data.title) } </p> </Link>
                
            </div>
            
        )
        
        
    })
    
    return (
        <div className = "photos--divs">
            {displayPhotos}
        </div>
        
    )
}