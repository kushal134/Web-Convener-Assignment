import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import home from "./display"
import ItemDetail from "./Item"
import About from "./About"
import Navigate from "./Heading"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App(){
    return(
        <Router>
        <Navigate />
            <Switch>
            <Route path = "/about" exact component = {About} />
            <Route path = "/" exact component = {home} />
            <Route path = "/:id" exact component = {ItemDetail} />
                
            </Switch>
        </Router>
    )
}

export default App;