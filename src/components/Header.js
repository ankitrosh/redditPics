import React, {useContext} from "react"
import SortDropDown from './SortDropDown'
import {Link} from "react-router-dom"
import {Context} from "../Context"
export default function Header(){
   
    return (
        <header>       
            <h1>
                <i className="ri-reddit-line"></i> Reddit Pics
            </h1>
            <div>
                <SortDropDown />
                <Link to="/"> 
                        <button  className="button"> 
                            Default View  
                        </button> 
                </Link>
            </div>
        </header>
    )
}