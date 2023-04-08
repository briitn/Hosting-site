import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <b>My Projects</b>
      </header>
      <main>
 
   <section className="project" id='p1'>
          <h2>Channel🌐</h2>
        <p></p>
         

          <p>A blogging website built with Ruby on Rails and React. Users can read and create blogs, with tags and comments. Users need to make an account to write blogs, but not to view them. The app has a search function, the ability to add tags to posts, and a recommendation feature</p>
          <a href="https://channel-ofl8.onrender.com" className="project-link">View project</a>
        </section>
             
      
        <section className="project" id='p2'>
          <h2>Text Chat 💬</h2>
          <p></p>
        
       
          <p id='firstP'>A chat app built with Ruby on Rails and React JS. Users can log in, send messages, and view posts with hashtags..</p>
          <a href="https://chat-app-kgns.onrender.com/" className="project-link">View project</a>
        </section>
       
       
      </main>
      <footer>
      <a href="https://www.linkedin.com/in/prince-gobah-0a7554223/" className="about-me-link">LinkedIn</a>
        <a href="https://github.com/briitn" className="about-me-link">GitHub</a>
        <a href="https://medium.com/@babynamek" className="about-me-link">Medium</a>
        <a href='https://twitter.com/MarkupMirth' className='about-me-link'>Twitter</a>
        <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vRqRknnXU87jN7YYwVu_EUQtXfR1zroN0Ya4iocfQ639_JAVIxeP_xyFgZIzpqEvcxUf8x_yU0vKxJc/pub" className="about-me-link">Resume</a>
        <p>&copy; 2023 My Project Website</p>
      </footer>
    </div>
  );
}

export default App;


