import RecipeItem from './RecipeItem.js';
import './recipe.css';

export default function RecipeList({ recipes }) {
  return <div className='cook'>
    {
      recipes.map((recipe, i) => <RecipeItem {...recipe} key={recipe + i} />)
    }
  </div>;
}