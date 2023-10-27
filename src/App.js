import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Sidebar from './componants/Sidebar'; // ตรวจสอบเส้นทางการนำทางของ Sidebar component
import PowX from './Page/PowX.js';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} /> {/* ตรวจสอบเส้นทางให้เป็น '/' ที่จะไปยัง Home */}
        <Route path='/PowX' element={<PowX />} /> {/* ตรวจสอบเส้นทางให้เป็น '/PowX' ที่จะไปยัง PowX */}
      </Routes>
    </Router>
  );
}

export default App;