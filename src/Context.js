import React, { useEffect, useState } from "react"
const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    
    const url = "https://www.reddit.com/r/pics/.json?jsonp="
    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(pics => setAllPhotos(pics.data.children))
    }, [])

    function compare(a, b){
        
        if(a.data.title[0] === "(" || a.data.title[0] === "["){
            if(b.data.title[0] === "(" ||b.data.title[0] === "["){
                if(a.data.title[5] >= b.data.title[5]){
                    return 1
                } else {
                    return -1
                }
            }
            return -1
        }
        if(b.data.title[0] === "(" ||b.data.title[0] === "["){
            return 1
        }
        if(a.data.title[0] >= b.data.title[0]){
            return 1
        } else {
            return -1
        }
    }
    function sortPhotos(){
        setAllPhotos(prev =>{
            const sortedPics = prev
            sortedPics.sort(compare)
            return sortedPics
        })
        
    }

    return (
        <Context.Provider value={{allPhotos, sortPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}