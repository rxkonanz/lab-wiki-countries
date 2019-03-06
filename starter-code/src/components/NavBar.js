import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                <a class="navbar-brand" href="/">WikiCountries</a>
                </div>
            </nav>
        )
    }
}

export default NavBar;