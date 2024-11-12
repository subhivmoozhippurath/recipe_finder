import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import RecipeDetai from './Components/RecipeDetai';
import React from 'react';
import Header from './Components/Header'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:mealid' element={<RecipeDetai />} />

    </Routes>
    </>
   
  );
}

export default App;
