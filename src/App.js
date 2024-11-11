import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import RecipeDetai from './Components/RecipeDetai';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:mealid' element={<RecipeDetai />} />

    </Routes>
    </>
   
  );
}

export default App;
