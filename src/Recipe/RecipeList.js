import RecipeItem from './RecipeItem.js';

export default function RecipeList({ recipes }) {
  return <div>
    {
      recipes.map((recipe, i) => <RecipeItem {...recipe} key={recipe + i} />)
    }
  </div>;
}