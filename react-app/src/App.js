import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartOne from './components/StartOne';
import StartTwo from './components/StartTwo';
import Login from './components/Login';
import Register from './components/Register';

import Footer from './components/Footer/Footer';
// import HookExample from './components/UseStateEx';
import EffectHookExample from './components/UseEffectEx';

import './styles/main.scss';


function App() {
  return (
    <Router>

      {/* Hier kommt die Nav/Header rein */}

      <div className="content">
        
        <Routes>
          <Route path="/" element={<StartOne/>} />

          <Route path="/start" element={<StartTwo/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/useEffectHook" element={<EffectHookExample/>}/>
        </Routes>
        
      </div>

      <Footer></Footer>
      
    </Router>
  )

}

export default App;
