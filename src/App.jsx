import React,{useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BTS from './pages/BTS';
import { motion } from 'framer-motion';

const App = () => {  const [mousePosition, setMousePosition] = useState({
  x:0,
  y:0
});

useEffect(()=>{
const mouseMove = e =>{
setMousePosition({
x : e.clientX,
y: e.clientY
})}

window.addEventListener('mousemove', mouseMove);

return ()=>{
  window.removeEventListener('mousemove', mouseMove)
}
},[]);
  
  const variants ={
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,

    }
  }

  return (
    <main className='bg-slate-300/20 h-full '>
      <motion.div className="cursor"
            variants={variants}
            animate="default"></motion.div>
      <Router>
        <Navbar />
        <Routes>

          <Route
            path="/"
            element={
              <Home />
            }
          />          
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bts" element={<BTS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;


