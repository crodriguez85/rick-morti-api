import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from './components/Characters'

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/" exact component={Characters} />
        </Router>
    );
  }
}

export default App;