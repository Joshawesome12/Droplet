import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations:["Junk Junction", "The Block", "Haunted Hills", "Pleasant Park", "Lazy Links", "Tomato Temple", "Wailing Woods", "Loot Lake", "Snobby Shores", "Tilted Towers", "Dusty Divot",
       "Lonely Lodge", "Retail Row", "Shifty Shafts", "Salty Springs", "Frosty Flights", "Fatal Fields", "Paradise Palms", "Happy Hamlet", "Lucky Landing"],
       drop: "Click Roll!"
    }
  }

  // TODO:
  // Create list of locations
  // Gather images of locations
  // Add "Roll" button

  selectRandom = () => {
    var num = Math.floor(Math.random() * 20);
    // console.log(num)
    var location = this.state.locations[num]
    this.setState({drop: location})
  }


  render() {
    return (
      <div>
        <h1 className="welcome">Welcome to Droplet</h1>
        <div className = "stuff">
          <h2>{this.state.drop}</h2>
          <button onClick={this.selectRandom}>Roll</button>
        </div>
      </div>
    )
  }
}

export default App



// <img className="react-img" src={require('./resources/react.png')} alt='react'/>
