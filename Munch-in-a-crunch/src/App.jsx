import { useState } from 'react'
import viteLogo from '/vite.svg'
import Restaurants from './Components/Restaurants';
import NavigationBar from './Components/NavigationBar';
import './App.css'

function App() {


 return (
    <div className="App">
      <div className="navigation-bar-container">
    <NavigationBar/>
     <div>Results</div>
    </div>
    </div>
    );
    }

export default App;