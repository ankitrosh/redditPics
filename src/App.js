import './App.css';
import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Photos from "./pages/Photos"
import Post from "./pages/Post"
function App() {
  return (
    <div>
      <Header />

      <Switch>
            <Route exact path="/">
                <Photos />
            </Route>

            <Route path= "/post/:postId">
                <Post />
            </Route>
      </Switch>
      
    </div>
  );
}

export default App;
