import React, { } from 'react';
import QRScanner from './Components/QRScanner';
import './App.css'

function App() {
  return (
    <div>
      <header>
        <div className="nav" >
          <p className="logo">LOGO</p>
          <ul>
            <li><a href>HOME</a></li>
            <li><a href>SCANNER</a></li>
          </ul>
        </div>
        <div class="welcome">
          <div class="leftSide">
            <h1>Welcome to the landing page</h1>
            <QRScanner />            
            </div>
        </div>
      </header>
    </div>

  );


}


export default App;
