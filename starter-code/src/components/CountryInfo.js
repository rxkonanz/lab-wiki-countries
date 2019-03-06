import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryInfo = (props) => {

    let theCountry = countries.find((country) => {
        return country.cca3 === props.match.params.id;
    })

    let theBorders = theCountry.borders.map((border, index) => {
        return (
          <li key={index}>
            <Link to={`/${border}`} key={border}>
              {' '}
              {border}{' '}
            </Link>
          </li>
        );
      });

    

    return (
        <div class="col-7">
            <h1>{theCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="thirty">Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {theBorders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            
        </div>
    )
}

export default CountryInfo;