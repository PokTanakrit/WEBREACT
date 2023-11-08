import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Sidebar from './componants/Sidebar'; 
import PowX from './Page/PowX';
import Work from './Page/Work';
import Maxarr from './Page/Maxarr';
import Reversenum from './Page/Reversenum';
import Sumnumber from './Page/Sumnumber';
import Calender from './Page/Calender';
import Pointonrec from './Page/Pointonrec';
import Dance from './Page/Dance';
import Clock from './Page/Clock';
import FuncAvg from './Page/FuncAvg';
import Circle from './Page/Circle';
import Box from './Page/Box';
import Road from './Page/Road';
import Maxminavgsd from './Page/Maxminavgsd';
import SD from './Page/SD';
import Blackpanter from './Page/Blackpanter';
import Nearestpoint from './Page/Nearestpoint';

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