import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //easy challenge
  constructor(props) { 
    super(props);
    this.state = {
      person: {}
    };
  }



  //very easy challenge
  render() {
    return (
      //div containing basic info; hard coded
      <div className="App">
        <h1>Name: Kennidy Stillwell</h1>
        <p>Number: 704-456-7890</p>
        <p>Date of Birth: August 18, 2003</p>
        <p>Job: Coding Apprentice at R2H</p>
      </div>
    );
  }
}

export default App;