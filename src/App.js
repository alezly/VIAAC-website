import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import HighDefinition from './components/pages/HighDefinition';
import ExternalCoke from './components/pages/ExternalCoke';
import Software from './components/pages/Software';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/high-definition' element={<HighDefinition/>}/>
        <Route path='/services/external-coke' element={<ExternalCoke/>}/>
        <Route path='/software' element={<Software/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
