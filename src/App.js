import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Sidebar from './componants/Sidebar'; // ตรวจสอบเส้นทางการนำทางของ Sidebar component
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
      </Routes>
    </Router>
  );
}

export default App;