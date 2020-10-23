import React from 'react';
import './App.css';
import SideNav from "./app/components/SideNav";
import GalleryContainer from "./app/containers/GalleryContainer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContainerDetails from "./app/containers/ContainerDetails";

function App() {
  return (
    <Router>
        <div className="App">

            <Switch>
                <Route path="/details" >
                    <ContainerDetails />
                </Route>
                <Route path="/">
                    <SideNav/>
                    <GalleryContainer/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
