import React, {useContext} from "react"
import {useParams, Link, useHistory} from "react-router-dom"
import {Context} from "../Context"
export default function Post(){
    const {allPhotos} = useContext(Context)
    const {postId} = useParams()
    const thisPost = allPhotos.find(pic => pic.data.id === postId)
    const history = useHistory();
    const numAwardTypes = thisPost.data.all_awardings.length
    let awardsClass
    if(numAwardTypes < 3){
        awardsClass = "smallAwards"
    } else {
        awardsClass = "bigAwards"
    }
    function trimLength(words){
        if(words.length < 30){
            return words
        } else {
            words = words.substring(1,27) + "..."
            return words
        }
    }

    const awardDetails = thisPost.data.all_awardings.map(award => {
        return (
            <div>
                <img src = {award.icon_url}  className="post--icon"/>
                <span> {award.name}:{award.count}</span>
                <p>{trimLength(award.description)}</p>
                
            </div>
        )
    })

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
                <img src = {thisPost.data.thumbnail} className = "post--images"/>
                {numAwardTypes > 0 && <h3>Award Details</h3>}
                <div className={`post--${awardsClass}`}>
                    {awardDetails}
                </div>
                
                
            </div>

            <hr></hr>
            
            <p className="post--link"><a href = {`http://www.reddit.com${thisPost.data.permalink}` } target="_blank" >  Check Out the Original post by clicking here </a> </p>
            
            <div className = "post--metrics">
                <p> 
                    <span className="post--likes">
                        <i className="ri-thumb-up-line"></i> 
                    </span> Up-Votes : {thisPost.data.ups}
                </p>
                <p> 
                    <span className="post--comments">
                        <i className="ri-chat-4-line"></i>
                    </span> Comments : {thisPost.data.num_comments}
                </p>
                <p> 
                    <span className="post--award">
                        <i className="ri-trophy-line"></i> 
                    </span> Awards : {thisPost.data.total_awards_received}
                </p>
            </div>
        </div>
        
    )
}