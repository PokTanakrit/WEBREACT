import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Sidebar from './componants/Sidebar'; 
import PowX from './Page/PowX.js';
import Work from './Page/Work.js';
import Maxarr from './Page/Maxarr.js';
import Reversenum from './Page/Reversenum.js';
import Sumnumber from './Page/Sumnumber.js';
import Calender from './Page/Calender.js';
import Pointonrec from './Page/Pointonrec.js';
import Dance from './Page/Dance.js';
import Clock from './Page/Clock.js';
import FuncAvg from './Page/FuncAvg.js';
import Circle from './Page/Circle.js';
import Box from './Page/Box.js';
import Road from './Page/Road.js';
import Maxminavgsd from './Page/Maxminavgsd.js';
import SD from './Page/SD.js';
import Blackpanter from './Page/Blackpanter.js';
import Nearestpoint from './Page/Nearestpoint.js';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/PowX' element={<PowX />} /> 
        <Route path='/Work' element={<Work />} /> 
        <Route path='/Maxarr' element={<Maxarr />} /> 
        <Route path='/Reversenum' element={<Reversenum />} /> 
        <Route path='/Sumnumber' element={<Sumnumber />} /> 
        <Route path='/Calender' element={<Calender />} /> 
        <Route path='/Pointonrec' element={<Pointonrec />} /> 
        <Route path='/Dance' element={<Dance />} /> 
        <Route path='/Clock' element={<Clock />} /> 
        <Route path='/FuncAvg' element={<FuncAvg />} /> 
        <Route path='/OverlapCircle' element={<Circle />} /> 
        <Route path='/Box' element={<Box />} /> 
        <Route path='/Road' element={<Road />} /> 
        <Route path='/Maxminavgsd' element={<Maxminavgsd />} /> 
        <Route path='/SD' element={<SD />} /> 
        <Route path='/Blackpanter' element={<Blackpanter />} /> 
        <Route path='/Nearestpoint' element={<Nearestpoint />} /> 
      </Routes>
    </Router>
  );
}

export default App;