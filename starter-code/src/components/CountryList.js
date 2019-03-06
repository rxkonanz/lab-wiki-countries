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
            return <Link to={`${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
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


{/* <div className="container">
<div className="row">
<div className="col-5">
    <div className="list-group">
        <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
        <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
        <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
        <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
        <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
        <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
        <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
        <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
        <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
        <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
        <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
        <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
        <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
        <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
        <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
    </div>
</div>
<div className="col-7">
    <h1>France</h1>
    <table className="table">
    <thead></thead>
    <tbody>
        <tr>
        <td>Capital</td>
        <td>Paris</td>
        </tr>
        <tr>
        <td>Area</td>
        <td>551695 km
            <sup>2</sup>
        </td>
        </tr>
        <tr>
        <td>Borders</td>
        <td>
            <ul>
            <li><a href="/AND">Andorra</a></li>
            <li><a href="/BEL">Belgium</a></li>
            <li><a href="/DEU">Germany</a></li>
            <li><a href="/ITA">Italy</a></li>
            <li><a href="/LUX">Luxembourg</a></li>
            <li><a href="/MCO">Monaco</a></li>
            <li><a href="/ESP">Spain</a></li>
            <li><a href="/CHE">Switzerland</a></li>
            </ul>
        </td>
        </tr>
    </tbody>
    </table>
</div>
</div>
</div> */}