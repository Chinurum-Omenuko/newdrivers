import './App.css'
import Navigation from '../components/Navigation/Navigation.jsx'
import Home from '../pages/Home/Home';
import { useState } from 'react';



function App() {
  const [isClicked, showDrawer] = useState(false)

  return (
    <div className="app-div">
      <Navigation />
      <Home />

    </div>
  );
}

export default App
