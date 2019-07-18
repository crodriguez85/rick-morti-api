import React, { Component } from "react";
import Characters from './components/Characters'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className={"ui huge header"}>Housing Anywhere Assestment - Rick and Morty API</h1>
        </header>
        <Characters/>
      </div>
    );
  }
}
