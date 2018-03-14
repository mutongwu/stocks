import React, { Component } from 'react';
import { HashRouter  as Router, Route } from "react-router-dom";

import Main from './main';
import LiveRoom from './liveroom';

class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} /> 
          <Route exact path="/live" component={Main} />
          <Route exact path="/group" component={Main} />     
          <Route exact path="/liveroom" component={LiveRoom} /> 
        </div>
        
      </Router>
    );
  }
}


export default App;