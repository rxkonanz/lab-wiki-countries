import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryList extends Component {

    state = {
        countries: countries
    }

    displayCountries = () => {
        let countryList = this.state.countries.map((country,i) => {
            return <a href={`${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</a>
        })
        return countryList;
    }

    render() {
        return (
            <div className="col-5">
                <div className="list-group">
                    {this.displayCountries()}
                </div>
            </div>
        )
    }
}

export default CountryList;