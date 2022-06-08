import CandyItem from './CandyItem.js';

export default function CandiesList({ candies }) {
  return <div>
    {
      candies.map((candy, i) => <CandyItem candy={candy} key={candy + i} />)
    }
  </div>;
}
