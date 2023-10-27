import React from 'react';
import cool_smile from './emoji/cool_smiley.png';
import './App.css'; 

function Home() {
  return (
    <div>
      <header className="App-header ">
        <img src={cool_smile} className="App-logo "  />
        <p>HOME</p>
      </header>
    </div>
  );
}

export default Home;
