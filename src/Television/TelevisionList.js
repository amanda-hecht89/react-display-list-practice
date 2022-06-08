import TelevisionItem from './TelevisionItem.js';
import './Television.css';

export default function TelevisionList({ television }) {
  return <div className='tele'>
    {
      television.map((telelvision, i) => <TelevisionItem {...telelvision} key={telelvision + i} />)
    }
  </div>;
}
