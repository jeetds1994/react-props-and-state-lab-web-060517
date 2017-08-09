import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeFilterType = (val) => {
    this.setState({
      filters: {
          ...this.state.filters,
          type: val
      },
    }, () => {console.log(this.state.filters.type)});
  }

  fetchPets = (selector) => {
    const url = '/api/pets'
    const params = selector !== 'all' || '' ? `?type=${selector}` : ''
    fetch(`${url}` + `${params}`, {
      method: 'get',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',}
  })
  .then((res) => {return res.json()})
  .then(data => this.setState({
    pets: data
  }))
  }

  render() {
    console.log('fetch')
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
