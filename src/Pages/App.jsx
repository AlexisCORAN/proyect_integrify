import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import BrewDetail from './BreweryDetail';
import '../styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/breweries/:id" element={<BrewDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;