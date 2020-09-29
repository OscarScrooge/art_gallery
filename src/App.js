import React from 'react';
import './App.css';
import SideNav from "./app/components/SideNav";
import GalleryContainer from "./app/containers/GalleryContainer";

function App() {
  return (
    <div className="App">
        <SideNav/>
        <GalleryContainer/>
    </div>
  );
}

export default App;
