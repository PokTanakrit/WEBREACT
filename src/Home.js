import React from 'react';
import cool_smile from './emoji/cool_smiley.png';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={cool_smile} className="App-logo" alt="cool_smile" />
        <p>HOME</p>
      </header>
    </div>
  );
}

export default Home;
