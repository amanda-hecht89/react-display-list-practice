export default function PetItem({ 
  name,
  type,
  breed,
}) {
  return (
    <div className="pet">
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{breed}</p>
    </div>
  );
}
