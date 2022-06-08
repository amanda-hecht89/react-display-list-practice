import PetItem from './pet/PetItem';

export default function PetList({ pets }) {
  return (
    <div className="pet-list">
      {
        pets.map((pet, i) => <PetItem {...pet} key={pet.name + i} />)
      }
    </div>
  );
}
