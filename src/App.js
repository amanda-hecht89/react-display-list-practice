
import './App.css';
// import your arrays here
import { candies } from './Candy/candies-data.js';
import CandiesList from './Candy/CandiesList';
import { pets } from './pet/pets.js';
import PetList from './pet/PetList';
import { recipes } from './Recipe/recipes.js';
import RecipeList from './Recipe/RecipeList';
import { television } from './Television/television';
import TelevisionList from './Television/TelevisionList';



function App() {
  return (
    <div className="App">
      <hr />
      <CandiesList candies={candies} />
      <hr />
      <PetList pets={pets} />
      <hr />
      <RecipeList recipes={recipes} />
      <hr />
      <TelevisionList television={television} />
    </div>
  );
}

export default App;
