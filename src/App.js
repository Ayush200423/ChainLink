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

            <div className = "flexbox-container">
           <div className = "flexboxitem-1">
           <li><a href>HOME</a></li> </div> 
           <div className = "flexboxitem-2"><li>
            <a href>SCANNER</a></li>
           </div> 
            </div>

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
