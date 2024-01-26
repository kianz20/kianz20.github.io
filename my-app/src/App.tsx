import React from 'react';
import ContentSquare from './components/ContentSquare/ContentSquare';

import './App.css';

function App() {
  return (
    <div className="App">
      <ContentSquare className="LeftSquare" content={
        <div className="LeftSquareContent">
          <h1 className="LeftTitle">Hi! I'm Kian.</h1>
          <p className="Description">I'm a full stack software engineer working in
            a software development position at Orion Health, born and raised in Auckland, 
            New Zealand, but currently located in Christchurch.&nbsp;
            I'm hard working, have great problem solving
            skills, and have a keen interest in all things computer hardware and
            software.
          </p>
          <p className="Description">Always looking to level up my skills and gain
            new experiences, and love meeting and working with new people.
            In my free time I enjoy playing travelling across the globe, cooking 
            and eating delicious food, and playing video games.
          </p>
          <p className="Description">Get in Touch!
          </p>

          <div className="SocialContainer">
            <a href="https://www.linkedin.com/in/kian-jazayeri-976614220/" target="_blank" rel="noreferrer">
              <img className="SocialImage" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/kianz20" target="_blank" rel="noreferrer">
              <img className="SocialImage" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
          </div>

        </div>
      } />
      <ContentSquare className="RightSquare" content={
        <div className="RightSquareContent">
          <h1 className="BottomTitle">Proficient in:</h1>
          <img className="LanguageImage" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" />
          <img className="LanguageImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" alt="Python" />
          <img className="LanguageImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JS" />
          <img className="LanguageImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TS" />
          <img className="LanguageImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
          <img className="LanguageImage" src="https://www.svgrepo.com/show/373830/matlab.svg" alt="MatLab" />
          <img className="LanguageImage" src="https://godotengine.org/assets/press/icon_color.png" alt="GDScript" />
          <img className="LanguageImage" src="https://www.step2gen.com/WebsiteAssets/assets/images/c--4.svg" alt="C#" />
          <img className="LanguageImage" src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png" alt="SQL" />
          <img className="LanguageImage" src="https://play-lh.googleusercontent.com/cyTI43JCjc4L-e1m7FvJhI1VhmTSJ4AMNZoqhkp0Xm6_NOtHbaewp9UPVLw5R3-tZIU" alt="PHP" />
          <h1 className="BottomTitle">I also love building PCs!</h1>
          <img className="PCImage" src="https://i.imgur.com/r06N3wy.png" alt="White PC" />
          <img className="PCImage" src="https://i.imgur.com/tD6Oy1F.png" alt="NukaCola" />
          <img className="PCImage" src="https://i.imgur.com/jTYXtdT.jpg" alt="MyPC" />
          <img className="PCImage" src="https://i.imgur.com/jJrh0Dl.png" alt="RGBPC" />
        </div>
      } />


    </div>
  );
}

export default App; 