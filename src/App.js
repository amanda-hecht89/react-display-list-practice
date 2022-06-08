
import './App.css';
// import your arrays here
import { candies } from './candies-data.js';
import CandiesList from './CandiesList';
import { pets } from './pets.js';
import PetList from './PetList';
import { recipes } from './recipes.js';
import RecipeList from './RecipeList';


function App() {
  return (
    <div className="App">
      <hr />
      <CandiesList candies={candies} />
      <hr />
      <PetList pets={pets} />
      <hr />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
