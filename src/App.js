import React, { Component } from 'react';
import { HashRouter  as Router, Route } from "react-router-dom";

import Main from './main';
class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
  }
  
  render() {
    let items = this.items;
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} /> 
          <Route exact path="/live" component={Main} />
          <Route exact path="/group" component={Main} />     
        </div>
        
      </Router>
    );
  }
}


export default App;