import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  useEffect( () => {
    fetch('./courses.JSON')
      .then(res => res.json())
      .then(data => console.log(data))
  })
  return (
    <div>
      <About></About>
      <Home></Home>
    </div>
  );
}

export default App;
