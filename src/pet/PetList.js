import PetItem from './PetItem';
import './pet.css';
import backgroundImg from '../pets4.jpg';

export default function PetList({ pets }) {
  return (
    <div className="pet-list" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        pets.map((pet, i) => <PetItem {...pet} key={pet.name + i} />)
      }
    </div>
  );
}
