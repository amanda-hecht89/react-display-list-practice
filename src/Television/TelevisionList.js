import TelevisionItem from './TelevisionItem.js';

export default function TelevisionList({ television }) {
  return <div>
    {
      television.map((telelvision, i) => <TelevisionItem {...telelvision} key={telelvision + i} />)
    }
  </div>;
}
