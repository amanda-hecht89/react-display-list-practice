import CandyItem from './CandyItem.js';
import './candy.css';
import backgroundImg from '../candy2.jpg';

export default function CandiesList({ candies }) {
  return <div className='yummy' style={{ backgroundImage: `url(${backgroundImg})` }}>
    {
      candies.map((candy, i) => <CandyItem candy={candy} key={candy + i} />)
    }
  </div>;
}
