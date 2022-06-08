
export default function TelevisionItem({ name, genre, actors }) {
  return <div>
    <p>I love watching <b>{name}</b>.</p>
    <p>Its a {genre}!</p>
    <p>Some people that play in the show are {actors}.</p>
  </div>;
}
