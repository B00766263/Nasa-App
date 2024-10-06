import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './components/Home'; // Assuming you have a Home component
import NasaPhoto from './components/NasaPhoto'; // The APOD component
import BarChart from './components/BarChart';
import FetchImage from './components/FetchImage';

function App() {

  // //*** return for exercise 1: start
  // const[data, setData] = useState(null);

  // useEffect(() =>{
  //   fetch('/api')
  //   .then((response) => response.json())
  //   .then((response) => setData(response.message))
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {
  //           !data ? "Loading" : data
  //         }
  //       </p>
        
  //     </header>
  //   </div>
  // );
 // *** return for exercise 1: end

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
