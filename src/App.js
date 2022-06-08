import logo from './logo.svg';
import './App.css';
// import your arrays here
import { candies } from './candies-data.js';
import CandiesList from './CandiesList';

function App() {
  return (
    <div className="App">
      <hr />
      <CandiesList candies={candies} />
      <hr />
    </div>
  );
}

export default App;
