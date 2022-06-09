import TelevisionItem from './TelevisionItem.js';
import './Television.css';
import backgroundImg from '../television.jpg';

export default function TelevisionList({ television }) {
  return <div className='tele' style={{ backgroundImage: `url(${backgroundImg})` }}>
    {
      television.map((telelvision, i) => <TelevisionItem {...telelvision} key={telelvision + i} />)
    }
  </div>;
}
