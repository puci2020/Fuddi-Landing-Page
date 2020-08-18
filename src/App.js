import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
       <Home/>
       <Navbar/>
       <About/>
       <Home/>
    </div>
  );
}

export default App;
