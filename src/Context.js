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

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}