import React from 'react';

class Pet extends React.Component {
  constructor(props){
    super(props);
    this.state = props.pet;
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header" onChange={this.petName}>Pet {this.state.name} (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: </p>
            <p>Weight: </p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted && <button className="ui primary button">Adopt pet</button>}
          {!this.state.isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
