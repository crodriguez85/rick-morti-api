import React, { Component, Fragment } from "react";
import Characters from './components/Characters'
import Navbar  from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Characters/>
      </Fragment>
    );
  }
}
