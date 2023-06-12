import { useState } from 'react'
import '.././assets/stylesheets/Site.css'
import Navbar from '../components/navigation/Navbar.jsx';



function Site() {
  return(
    <div class="wrapper border-blue-500 border-2">
      <Navbar />
      <Home />
    </div>
    
    );
}

function Home() {
  return(
  <main class="bg-container flex justify-center border-2 border-yellow-800">
    <div class="content-wrapper w-full main-wrapper">
      <div class="text-left headings">
        <h1>Chinurum Omenuko</h1>
        <h2>Portfolio Website</h2>
        <p>Front End Developer</p>
      </div>

      <div class="icons m-10 flex flex-col justify-center">
        <div class="cv btn  mx-auto basis-1">
          <button class="">Download CV</button>
        </div>
        <div class="links flex flex-row justify-center my-5">
          <a href="https://github.com/Chinurum-Omenuko/Chinurum-Omenuko.github.io/"><img src="src/assets/images/github.png" alt="" srcset="" /></a>
          <a href="https://github.com/Chinurum-Omenuko/Chinurum-Omenuko.github.io/"><img src="src/assets/images/linkedin-64.png" alt="" srcset="" /></a>
        </div>   
      </div>

    </div>
  </main>
  );
}

export default Site
