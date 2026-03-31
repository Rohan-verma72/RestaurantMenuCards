import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./Body";
import Chai from "./components/Chai";
import ColdCoffee from "./components/ColdCoffee";
import Burger from "./components/Burger";
import MilkShakes from "./components/MilkShakes";
import Pizza from "./components/Pizza";
import Maggie from "./components/Maggie";
import SandWich from "./components/SandWhich";
import Bites from "./components/Bites"; // Correct import
import Pasta from "./components/Pasta";
import HotCoffee from "./components/HotCoffee";

function App() {
  console.log("working")
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />  
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Chai" element={<Chai />} />
          <Route path="/ColdCoffee" element={<ColdCoffee />} />
          <Route path="/Burger" element={<Burger />} />
          <Route path="/MilkShakes" element={<MilkShakes />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/Maggie" element={<Maggie />} />
          <Route path="/SandWich" element={<SandWich />} />
          <Route path="/Bites" element={<Bites />} />
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/HotCoffee" element={<HotCoffee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
