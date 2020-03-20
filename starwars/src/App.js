import React from 'react';
import './App.css';
import Display from "./components/Display";
import styled from 'styled-components'

const App = () => {
  

  return (
    <div className="App">
      <h1 className="Header">The Spaceiest People Around</h1>
      <Display />
    </div>
    
  );
}

export default App;
// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

