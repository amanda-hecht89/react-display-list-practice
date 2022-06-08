import CandyItem from './CandyItem.js';
import './candy.css';

export default function CandiesList({ candies }) {
  return <div className='yummy'>
    {
      candies.map((candy, i) => <CandyItem candy={candy} key={candy + i} />)
    }
  </div>;
}
