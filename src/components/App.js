import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // TODO:
  // Create list of locations
  // Gather images of locations
  // Add "Roll" button
  

  render() {
    return (
      <div>
        <h1 className="welcome">Welcome to Droplet</h1>
        <img className="react-img" src={require('./resources/react.png')} alt='react'/>
      </div>
    )
  }
}

export default App
