import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function SortDropDown() {
const {sortPhotosOC,sortPhotosLikes,sortPhotosAwards,sortPhotosComments} = useContext(Context)
  return (
    <DropdownButton variant= "dark" id="dropdown-basic-button" title="Sort">
        <Dropdown.Item as={Link} to="/sortedView" onClick={sortPhotosOC} >
                        OC's First
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/sortedView" onClick={sortPhotosLikes} >
                        Up-Votes
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/sortedView" onClick={sortPhotosAwards} >
                        Awards
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/sortedView" onClick={sortPhotosComments} >
                        Comments
        </Dropdown.Item>
        
    </DropdownButton>
  );
}
export default SortDropDown;