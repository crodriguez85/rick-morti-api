import React, { Component } from "react";
import Characters from './components/Characters'
import { Header, Divider, Container } from 'semantic-ui-react';
import Navbar  from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header textAlign="center">
          <Navbar/>
        </Header>
        <Divider/>
        <Container>
          <Characters/>
        </Container>
      </div>
    );
  }
}
