import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import './App.css';

class App extends Component {
  render() {
    return (
       <HashRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}   />                 <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/cart" component={Cart}/>
                 
                  </Switch>
             </div>
       </HashRouter>
      
    );
  }
}

export default App;
