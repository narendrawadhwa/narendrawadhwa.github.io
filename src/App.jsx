import React from 'react';
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import * as THREE from 'three';
import Spinners from './components/Spinners';


const App = () => {

  return (
    <main className='bg-slate-300/20 h-full '>
      <Router>
        <Navbar />
        <Routes>

          <Route
            path="/3D_Portfolio_App"
            element={
              <Home />
            }
          />          
          <Route path="/3D_Portfolio_App/about" element={<About />} />
          <Route path="/3D_Portfolio_App/spinners" element={<Spinners />} />
          <Route path="/3D_Portfolio_App/projects" element={<Projects />} />
          <Route path="/3D_Portfolio_App/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;


