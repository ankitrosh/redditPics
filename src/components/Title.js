import React, {useContext} from "react"
import {useLocation} from "react-router-dom"
import {Context} from "../Context"
export default function Header(){
    const location = useLocation()
    const {pageValue} = useContext(Context)
    let pageTitle
    if(location.pathname == "/"){
        pageTitle = "Default View"
    } else {
        pageTitle = pageValue
    }
    
    return (
        <h1 className="title--heading">
            {pageTitle}
        </h1>
    )
}