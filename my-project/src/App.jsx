import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import CreateAccount from "./pages/CreateAccount"
import BusinessLoan from './pages/BusinessLoan'; // Create this component
import PropertyLoan from './pages/PropertyLoan'; // Create this component
import ThreeWheelerLoan from './pages/ThreeWheelerLoan';
import BikeLoan from './pages/BikeLoan'
import CarLoan from './pages/CarLoan'
import LandMortgageLoan from './pages/LandMortgageLoan'
import pigmy from './pages/DailyPigmy'
import DailyPigmy from './pages/DailyPigmy'
import Footer from './components/Footer'
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
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/property-loan" element={<PropertyLoan />} />
            <Route path="/bike-loan" element={<BikeLoan />} />
            <Route path="/three-wheeler-loan" element={<ThreeWheelerLoan />} />
            <Route path="/car-loan" element={<CarLoan />} />
            <Route path="/land-mortgage-loan" element={<LandMortgageLoan />} />
            <Route path="/daily-pigmy" element={<DailyPigmy />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
