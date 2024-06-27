import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "../pages/Home";
import NavBar from "../Components/NavBar";
import Github from "../pages/Github";
import Players from "../pages/Players";
import Teams from "../pages/Teams";
import Team from "../pages/Team";

function Router() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  
  return (
    <BrowserRouter>
      <NavBar setSelectedCurrency={setSelectedCurrency} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<Github />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route
          path="/team/new"
          element={<Team team={false} selectedCurrency={selectedCurrency} />}
        />
        <Route
          path="/team/:teamName"
          element={<Team team={false} selectedCurrency={selectedCurrency} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
