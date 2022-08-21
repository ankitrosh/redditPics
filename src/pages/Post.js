import React, {useContext} from "react"
import {useParams, Link, useHistory} from "react-router-dom"
import {Context} from "../Context"
export default function Post(){
    const {allPhotos} = useContext(Context)
    const {postId} = useParams()
    const thisPost = allPhotos.find(pic => pic.data.id === postId)
    const history = useHistory();
    return (
        <div>
            <p className="post--back" onClick = {history.goBack}> <i className="ri-arrow-left-line"></i> Go Back</p>
            <h1 className="post--heading">
                {thisPost.data.title}
            </h1>
            <h2 className="post--author"> 
                <i className="ri-quill-pen-line"></i> 
                {thisPost.data.author}
            </h2>

            
            
            <div className="post--card">
                <img src = {thisPost.data.thumbnail} className = "images"/>
                <p className="post--cardText"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p> 
            </div>

            <hr></hr>
            
            <div className = "post--metrics">
                <p> 
                    <span className="post--likes">
                        <i className="ri-thumb-up-line"></i> 
                    </span> 
                    Up-Votes : {thisPost.data.ups}
                </p>
                <p> 
                    <span className="post--comments">
                        <i className="ri-chat-4-line"></i>
                    </span> 
                    Comments : {thisPost.data.num_comments}
                </p>
                <p> 
                    <span className="post--award">
                        <i className="ri-trophy-line"></i> 
                    </span> 
                    Awards : {thisPost.data.total_awards_received}
                </p>
            </div>
        </div>
        
    )
}