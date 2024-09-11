import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import CreateAccount from "./pages/CreateAccount"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       

    <Router>
      <Navbar />
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
