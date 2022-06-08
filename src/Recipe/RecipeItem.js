export default function RecipeItem({ name, instructions, }) {
  return (
    <div >
      <h1>{name}</h1>
      <p>{instructions.price}</p>
      <p>{instructions.ingredients}</p>
    </div>
  );
}
