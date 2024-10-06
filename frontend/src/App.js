import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './components/Home'; 
import NasaPhoto from './components/NasaPhoto'; 
import BarChart from './components/BarChart';
import FetchImage from './components/FetchImage';

function App() {

    return (
      <Router>
        <header>
        <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nasaphoto" element={<NasaPhoto />} />
          <Route path="/barchart" element={<BarChart />} /> 
          <Route path="/fetchimage" element={<FetchImage />} />    
        </Routes>

        <footer>
          <Footer />
        </footer>
      </Router>
  );
}

export default App;
