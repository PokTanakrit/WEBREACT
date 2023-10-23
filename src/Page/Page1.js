import React from 'react';
import cool_smile from '../emoji/cool_smiley.png';
import '../App.css';

function Page1() {
  return (
    <div>
      <header className="App-header">
        <img src={cool_smile} className="App-logo" alt="cool_smile" />
        <p>Page1</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
}

export default Page1;
