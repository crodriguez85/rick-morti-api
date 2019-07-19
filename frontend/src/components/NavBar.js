import React, { Component } from 'react';
import ha_logo from "../ha_logo.png"

export default class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <img src={ha_logo} alt="HA" className="navbar-brand"/>
            <h1>Housing Anywhere Assestment - Rick and Morty API</h1>
        </nav>
    }
}

