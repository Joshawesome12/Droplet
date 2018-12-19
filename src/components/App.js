import React, { Component } from 'react';

class App extends Component {
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
