import React, {useContext} from "react"
import {useParams, Link} from "react-router-dom"
import {Context} from "../Context"
export default function Post(){
    const {allPhotos} = useContext(Context)
    const {postId} = useParams()
    const thisPost = allPhotos.find(pic => pic.data.id === postId)
    console.log(thisPost)
    return (
        <div>
            <Link to ="/"> <p className="post--back"> <i class="ri-arrow-left-line"></i> Go Back</p></Link>
            <h1 className="post--heading">{thisPost.data.title}</h1>
            <h2 className="post--author"> <i class="ri-quill-pen-line"></i> {thisPost.data.author}</h2>
            <div className="post--card">
                <img src = {thisPost.data.thumbnail} className = "images"/>
                <p className="post--cardText"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p> 
            </div>
            
            
        </div>
        
    )
}