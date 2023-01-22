import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './Components/home';  
import Scanner from './Components/scanner';  
import './App.css';  
import NewHash from './Components/newhash';
   
class App extends Component {  
  render() {  
    return (  
       <Router>  
           <div className="App">  
            <ul className="App-header">  
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/newhash">New Hash</Link>  
              </li>  
              <li>  
                <Link to="/scanner">Scanner</Link>  
              </li>  
            </ul>  
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/newhash' element={< NewHash />}></Route>  
                 <Route exact path='/scanner' element={< Scanner />}></Route>  
          </Routes>  
          </div>  
       </Router>  
   );  
  }  
}  
export default App;  
