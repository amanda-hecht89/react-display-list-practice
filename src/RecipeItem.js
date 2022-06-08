export default function RecipeItem({ name, instructions, }) {
  return <div>
    {name}
    {instructions.price}
    {instructions.ingredients}
  </div>;
}
