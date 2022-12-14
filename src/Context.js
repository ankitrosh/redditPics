import React, { useEffect, useState } from "react"


const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [sortedPhotos, setSortedPhotos] = useState([])
    const [pageValue, setPageValue] = useState("Default")
    const url = "https://www.reddit.com/r/pics/.json?jsonp="
    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(pics => setAllPhotos(pics.data.children))
            
            
    }, [])

    
    function compareOC(a, b){
        
        if(a.data.title[0] === "(" || a.data.title[0] === "["){
            
            return -1
        }
        if(b.data.title[0] === "(" ||b.data.title[0] === "["){
            return 1
        }
        
        return 0
    }
    
    function compareLikes(a, b){
  
        if(a.data.ups > b.data.ups){
            return -1
        } else {
            return 1
        }
    }

    function compareAwards(a, b){
  
        if(a.data.total_awards_received > b.data.total_awards_received){
            return -1
        } else {
            return 1
        }
    }

    function compareComments(a, b){
  
        if(a.data.num_comments > b.data.num_comments){
            return -1
        } else {
            return 1
        }
    }

    function sortPhotosOC(){
        const sortedPics = [...allPhotos]
        sortedPics.sort(compareOC)
        setSortedPhotos(sortedPics)
        setPageValue("Original Content First")
        
    }

    function sortPhotosLikes(){
        const sortedPics = [...allPhotos]
        sortedPics.sort(compareLikes)
        setSortedPhotos(sortedPics)
        setPageValue("Sorted By Likes")
        
    }

    function sortPhotosAwards(){
        const sortedPics = [...allPhotos]
        sortedPics.sort(compareAwards)
        setSortedPhotos(sortedPics)
        setPageValue("Sorted By Awards")
        
    }

    function sortPhotosComments(){
        const sortedPics = [...allPhotos]
        sortedPics.sort(compareComments)
        setSortedPhotos(sortedPics)
        setPageValue("Sorted By Comments")
    }
    
    return (
        <Context.Provider value={{allPhotos,sortedPhotos,pageValue,sortPhotosOC,sortPhotosLikes,sortPhotosAwards,sortPhotosComments}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}