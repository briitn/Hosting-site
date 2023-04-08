import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Projects</h1>
      </header>
      <main>
 
   <section className="project" id='p1'>
          <h2>Project 1</h2>
        
          <a href="https://channel-ofl8.onrender.com" className="project-link">View project</a>
          <p>This is a blogging website built with Ruby on Rails and React. Users can read and create blogs, with tags and comments. Users need to make an account to write blogs, but not to view them. The app has a search function, the ability to add tags to posts, and a recommendation feature</p>
        </section>
             
      
        <section className="project" id='p2'>
          <h2>Project 2</h2>
          <p></p>
        
          <a href="https://chat-app-kgns.onrender.com/" className="project-link">View project</a>
          <p id='firstP'>a chat app built with Ruby on Rails and React JS. Users can log in, send messages, and view posts with hashtags..</p>
        </section>
       
       
      </main>
      <footer>
      <a href="https://www.linkedin.com/in/prince-gobah-0a7554223/" className="about-me-link">LinkedIn</a>
        <a href="https://github.com/briitn" className="about-me-link">GitHub</a>
        <a href="https://medium.com/@babynamek" className="about-me-link">Medium</a>
        <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vRqRknnXU87jN7YYwVu_EUQtXfR1zroN0Ya4iocfQ639_JAVIxeP_xyFgZIzpqEvcxUf8x_yU0vKxJc/pub" className="about-me-link">Resume</a>
        <p>&copy; 2023 My Project Website</p>
      </footer>
    </div>
  );
}

export default App;


