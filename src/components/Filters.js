import React from 'react';

import PetBrowser from './PetBrowser'

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      selector: 'all',
    }
  }

  handleFindPets = () => {
    this.props.onFindPetsClick(this.state.selector)
  }

  handleFilterSelection = (event) => {
    this.setState({
      selector: event.target.value
    }, () => {
      console.log(this.state.selector);
      this.props.onChangeType(this.state.selector)})
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterSelection} value={this.state.selector}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
