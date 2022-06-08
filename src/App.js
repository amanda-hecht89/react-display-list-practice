import logo from './logo.svg';
import './App.css';
// import your arrays here
import { candies } from './candies-data.js';
import CandiesList from './CandiesList';
import { pets } from './pets.js';
import PetList from './PetList';


function App() {
  return (
    <div className="App">
      <hr />
      <CandiesList candies={candies} />
      <hr />
      <PetList pets={pets} />
      <hr />
    </div>
  );
}

export default App;
