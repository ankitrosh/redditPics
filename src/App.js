import './App.css';
import React, {useContext} from "react"
import {Switch, Route} from "react-router-dom"
import {Context} from "./Context"
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Post from "./pages/Post"
import Title from "./components/Title"
function App() {
  const {allPhotos,sortedPhotos} = useContext(Context)
  return (
    <div>
      <Header />
      <Title />
      <Switch>
            <Route exact path="/">
                <Photos allPhotos= {allPhotos}/>
            </Route>
            <Route path= "/sortedView">
                <Photos allPhotos= {sortedPhotos}/>
            </Route>
            <Route path= "/post/:postId">
                <Post />
            </Route>
      </Switch>
      
    </div>
  );
}

export default App;
