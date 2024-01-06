import React from 'react';
import StyledButton from './components/StyledButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kian Jazayeri</h1>
        <p>Software Engineer at Orion Health</p>
        {/* Add more sections and content as needed */}
        <StyledButton onClick={() => console.log('Clicked!')}>
          Click me!
        </StyledButton>
      </header>
    </div>
  );
}  

export default App; 