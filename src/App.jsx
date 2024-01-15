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
import Loading from './components/Loading';

const App = () => {  
  const [loading, setLoading] = useState(true);

 
    const [mousePosition, setMousePosition] = useState({
  x:0,
  y:0
});

useEffect(() => {
  const delayTimer = setTimeout(() => {
    setLoading(false);
  }, 500);

  return () => clearTimeout(delayTimer);
}, []);

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
      {loading ? (
        <Loading />

      ) : (
        <>
      <motion.div className="cursor lg:block hidden"
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
      </>
      )}
    </main>
  );
};

export default App;


