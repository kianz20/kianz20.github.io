import React from 'react';
import StyledButton from './components/StyledButton/StyledButton';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Kian Jazayeri</h1>
        <p>Software Engineer at Orion Health</p>
        {/* Add more sections and content as needed */}
        <StyledButton onClick={() => console.log('Clicked!')} content="hello world"/>
    </div>
  );
}  

export default App; 