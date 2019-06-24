import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="resume-header"><h1>Sally Student</h1>
        
      </header>
    <main>
      <section className="contact-information">
        <p>Sally Student</p>
        <address className="sally-email">sallystudent@mail.com</address>
        <p>888-888-8888</p>
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"alt="sally"/>
      </section>
      <section className="education">
        <p>College Name:Texas State</p>
        <p>Graduated:5/11/2011</p>
        <p>Major:Business</p>
      </section>
      <section className="employment-history">
        <h3>Manager</h3>
        <p>Company Name:Mcdonalds</p>
        <p>Dates of Employment:5/2011-5/2013</p>
        <p>Description:Managed employees at Mcdonalds!</p><br></br>
        <h3>Astronaut</h3>
        <p>Company Name: NASA</p>
        <p>Dates of Employment:5/15-6/19</p>
        <p>Description:I Do Space Stuff!</p>


      </section>
    </main>
    </div>
  );
}

export default App;
