import React from 'react'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBords from './components/LoadingBords';
import BusinessCard from './components/BusinessCard';
import Businesslearning from './components/Businesslearning';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <>

          <Router>
            <Navbarr/>
              <Routes>
                <Route exact  path="/" element={<LoadingBords/>}></Route>
                <Route exact path="/Loadboard" element={<LoadingBords />}></Route>
                <Route exact path="/businessCard" element={<BusinessCard />}></Route>
                <Route exact path="/businessLearning" element={<Businesslearning />}></Route>
              </Routes>
          </Router>
    </>
  );
}

export default App;
