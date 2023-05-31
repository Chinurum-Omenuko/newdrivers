import { useState } from 'react'
import './Site.css'

import Navbar from '../../components/Navbar/Navbar.jsx';

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
  <main class="bg-container flex justify-center">
    <div class="content-wrapper w-full ">
      <div class="text-left headings">
        <h1>Chinurum Omenuko</h1>
        <h2>Portfolio Website</h2>
        <p>Front End Developer from Ontario, Canada</p>
      </div>

      <div class="icons m-10 flex flex-col justify-center">
        <div class="cv btn  mx-auto basis-1">
          <button class="">Download CV</button>
        </div>
        <div class="links flex flex-row justify-center my-5">
          <a href="https://github.com/Chinurum-Omenuko/Chinurum-Omenuko.github.io/"></a>
          <a href="https://github.com/Chinurum-Omenuko/Chinurum-Omenuko.github.io/"></a>
        </div>   
      </div>

    </div>
  </main>
  );
}

export default Site
