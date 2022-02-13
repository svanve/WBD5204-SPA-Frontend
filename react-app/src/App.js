import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartOne from './components/StartOne';
import StartTwo from './components/StartTwo';
import Login from './components/Login';
import Register from './components/RegisterComponents/Register';
import Challenges from './components/ChallengesComponents/Challenges';
import Header from './components/LayoutComponents/Header';
import Head from './components/LayoutComponents/Head.js';

import Footer from './components/Footer/Footer';
// import HookExample from './components/UseStateEx';
import EffectHookExample from './components/UseEffectEx';

import './styles/main.scss';




function App() {
  return (
    <Router>
      <html lang='de'>
        
        <Head></Head>

        <body>

          <div className="content">

            <Header/>

            <main>
              <Routes>
                  <Route path="/" element={<StartOne/>} />
                  <Route path="/start" element={<StartTwo/>} />

                  <Route path="/login" element={<Login/>} />
                  <Route path="/register" element={<Register/>} />

                  <Route path="/challenges" element={<Challenges/>}></Route>

                  {/* Just an exercise: */}
                  <Route path="/useEffectHook" element={<EffectHookExample/>}/>
              </Routes>
            </main>       

          </div>
          
          <Footer></Footer>

        </body>
      </html>
    </Router>
  )

}

export default App;
