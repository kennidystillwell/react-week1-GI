import React, { Component } from 'react'; //import the necessary modules from React library
import './App.css'; //import the CSS file for styling
import BasicInfo from './components/BasicInfo'; //import the BasicInfo component

//define the App class component that extends the React Component class
class App extends Component {
  constructor(props) { //constructor to initialize the component's state
    super(props); //using super method to call Component
    this.state = { //initialize the component's state with array of people's basic information
      people: [
        {
          name: 'Kennidy Stillwell',
          number: '704-456-7890',
          dob: 'August 18, 2003',
          job: 'Coding Apprentice at R2H'
        },
        {
          name: 'Crystal Clark',
          number: '555-555-5555',
          dob: 'April 20, 1977',
          job: 'Mortgage Coach'
        },

        {
          name: 'SZA',
          number: '321-123-3212',
          dob: 'November 8, 1989',
          job: 'Singer/Songwriter'
        }
      ]
    };
  }

  //render method to define the component's UI
  render() {
    return ( //returns a div with class name 'App' for styling
      <div className="App">
        {this.state.people.map((person, index) => ( //using map method to iterate over people array
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

//export App component to use on other files
export default App;