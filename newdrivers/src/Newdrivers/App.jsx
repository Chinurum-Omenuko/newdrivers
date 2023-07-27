import './App.css'
import Navbar from '../components/Navigation/Navbar.jsx'
import Home from '../pages/Home/Home';
import { useState } from 'react';



function App() {
  const [isClicked, showDrawer] = useState(false)

  return (
    <div className="app-div">
      <Navbar />
      <Home />

    </div>
  );
}

export default App
