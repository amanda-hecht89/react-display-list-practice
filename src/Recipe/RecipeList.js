import RecipeItem from './RecipeItem.js';
import './recipe.css';
import backgroundImg from '../food.jpg';

export default function RecipeList({ recipes }) {
  return <div className='cook' style={{ backgroundImage: `url(${backgroundImg})` }}>
    {
      recipes.map((recipe, i) => <RecipeItem {...recipe} key={recipe + i} />)
    }
  </div>;
}