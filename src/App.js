import React from 'react';
import Button from './components/core/Button';
import Card from './components/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'France',
      capital: 'Paris',
      flag: 'https://restcountries.eu/data/fra.svg',
      population: 66710000,
      region: 'Europe',
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(country) {
    console.log('App#onClick click', country);
    const url = 'https://restcountries.eu/rest/v2/name/' + country;
    console.log('url', url);
    fetch(url).then((response) => response.json()).then(json => {
      this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population
      })
    })
  }

  render() {
    const { name, capital, flag, population, region } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="mt-3 mb-3">
              Country selector
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <Button 
              onClick={(e) => this.onClick('france')}>
              France
            </Button>
            <Button
              onClick={(e) => this.onClick('brazil')}>
              Brazil
            </Button>
            <Button
              onClick={(e) => this.onClick('croatia')}>
              Croatia
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Card name={name} capital={capital} flag={flag} population={population} region={region}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
