import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Intro.jsx';
import About from './About.jsx';
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
