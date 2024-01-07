import React, { Component } from 'react'; //import react library/components
import './App.css'; //import css file for styling
import BasicInfo from './components/BasicInfo'; //import 'BasicInfo' component


//defining app class component that extends the react component class
class App extends Component {
  constructor(props) {   //constructor initializes component's state
    super(props); //using super method to call Component
    this.state = { //initializing state with the person object
      person: {
        name: 'Kennidy Stillwell',
        number: '704-456-7890',
        dob: 'August 18, 2003',
        job: 'Coding Apprentice at R2H'
      }
    };
  }

  //render method defines the component's UI
  render() {
    return ( //returns a div with class name 'App' for styling
      <div className="App">
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

//export App component to use on other files
export default App;