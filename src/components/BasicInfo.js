//importing react library
import React from 'react';

//defined functional component 'BasicInfo'
//takes in person prop
const BasicInfo = ({ person }) => {
  return (
    //rendering div to structure the info
    <div>
      <h1>Name: {person.name}</h1>
      <p>Number: {person.number}</p>
      <p>Date of Birth: {person.dob}</p>
      <p>Job: {person.job}</p>
    </div>
  );
}

//exporting the component to use on other files (app.js)
export default BasicInfo;